import datetime
import asyncio
import asyncio
import litellm

from dotenv import load_dotenv
from litellm.exceptions import RateLimitError
from zoneinfo import ZoneInfo
from google.adk.agents import LlmAgent
from google.adk.models.lite_llm import LiteLlm
from opik.integrations.adk import OpikTracer, track_adk_agent_recursive
from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.genai import types
load_dotenv()


def calculate_savings(goal: float, monthly_income: float, monthly_expenses: float) -> dict:
    savings_per_month = monthly_income - monthly_expenses
    months_needed = goal / savings_per_month if savings_per_month > 0 else None

    if months_needed:
        return {
            "status": "success",
            "report": f"You can reach your goal in about {round(months_needed,1)} months by saving ₦{savings_per_month} monthly."
        }
    return {"status": "error", "error_message": "Expenses exceed income."}


def budgeting_advice(income: float) -> dict:
    return {
        "status": "success",
        "report": f"A good rule is 50% needs, 30% wants, 20% savings. For your income of ₦{income}, aim to save ₦{income*0.2:.0f} monthly."
    }


# Initialize LiteLLM with OpenAI gpt-4o with temperature and max_tokens to reduce cost
llm = LiteLlm(
    model="groq/llama-3.1-8b-instant",
    temperature=0.2,
    max_tokens=1024   # LIMIT RESPONSE SIZE
)

# Initialize LiteLLM with OpenAI gpt-4o
# llm = LiteLlm(model="groq/llama-3.1-8b-instant")

# Create the financial coach agent
basic_agent = LlmAgent(
    name="aaron_ai_coach",
    model=llm,
    description="Proactive Financial Goal Guardian",
    instruction=(
        "You are Aaron AI, a personalized financial guardian. "
        "Your goal is to help users reach their 2026 resolutions. "
        "Always factor in the user's Risk Appetite and Income Predictability. "
        "If a user has 'Low' risk appetite, suggest conservative saving over investing. "
        "Explain advice according to the user's 'Advice Preference' (e.g., plain language vs technical)."
    ),
    tools=[calculate_savings, budgeting_advice],
)

# Configure Opik tracer
opik_tracer = OpikTracer(
    project_name="Aaron"
)

# This is the "Magic" line that instruments the agent
track_adk_agent_recursive(basic_agent, opik_tracer)

# from chatGPT
session_service = InMemorySessionService()
runner = Runner(
    agent=basic_agent,  # later: financial_agent
    app_name="financial_coach_app",
    session_service=session_service,
)

from litellm.exceptions import RateLimitError

async def safe_run(runner, user_id, session_id, user_message):
    """
    Retries the agent logic if a Rate Limit is hit.
    This ensures Aaron AI stays robust during judging.
    """
    max_retries = 3
    base_delay = 5  # Start with 5 seconds

    for attempt in range(max_retries):
        try:
            # We use the runner to stream the response
            async for event in runner.run_async(
                user_id=user_id,
                session_id=session_id,
                new_message=user_message,
                plugins=[opik_tracer]  
            ):
                if event.is_final_response():
                    return event.content.parts[0].text
                
        except RateLimitError:
            if attempt < max_retries - 1:
                wait_time = base_delay * (attempt + 1)
                print(f"⚠️ Rate limit hit. Attempt {attempt + 1} failed. Retrying in {wait_time}s...")
                await asyncio.sleep(wait_time)
            else:
                return "❌ Error: I'm receiving too many requests right now. Please try again in a minute."
        except Exception as e:
            return f"❌ An unexpected error occurred: {str(e)}"

async def main():
    # 1. Initialize the session
    session = await session_service.create_session(
        app_name="financial_coach_app",
        user_id="test_user",
        session_id="session_001",
    )

    # 2. Structured Onboarding Data
    # In a real app, these come from your frontend form
    user_profile = {
        "goal_description": "Save for a professional certification and a new laptop",
        "target_savings": 2000000,
        "annual_income": 6000000,
        "monthly_expenses": 350000,
        "timeframe": "1 Year (Target 2027)",
        "risk_appetite": "Low (Prefers safety)",
        "income_predictability": "Stable (Monthly salary)",
        "intervention_level": "When I'm about to spend > 50,000 naira",
        "advice_style": "Plain language and encouraging"
    }

    # 3. Create the 'Onboarding' prompt
    onboarding_text = (
        f"Hello Aaron AI. Here is my financial profile:\n"
        f"- Goal: {user_profile['goal_description']}\n"
        f"- Target: ₦{user_profile['target_savings']}\n"
        f"- Monthly Income: ₦{user_profile['annual_income']/12}\n"
        f"- Monthly Expenses: ₦{user_profile['monthly_expenses']}\n"
        f"- Timeframe: {user_profile['timeframe']}\n"
        f"- Risk Appetite: {user_profile['risk_appetite']}\n"
        f"- Advice Style: {user_profile['advice_style']}\n\n"
        "Please analyze if my goal is realistic and give me my first steps."
    )

    user_message = types.Content(
        role="user",
        parts=[types.Part(text=onboarding_text)]
    )

    print(f"--- {basic_agent.name} is analyzing your profile ---")

    # 4. Run the safe_run
    response = await safe_run(
        runner=runner, 
        user_id="test_user", 
        session_id=session.id, 
        user_message=user_message
    )
    
    print(f"\nAaron AI: {response}")

if __name__ == "__main__":
    asyncio.run(main())

async def safe_completion(**kwargs):
    for attempt in range(3):  # retry up to 3 times
        try:
            return await litellm.acompletion(**kwargs)
        except litellm.exceptions.RateLimitError as e:
            wait_time = 2  # seconds (you can make this smarter)
            print(f"Rate limited. Retrying in {wait_time}s...")
            await asyncio.sleep(wait_time)
    raise Exception("Still rate limited after retries")