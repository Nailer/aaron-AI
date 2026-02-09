import datetime
import asyncio
import asyncio
import uuid
import litellm

from google.adk.runners import Runner

from dotenv import load_dotenv
from litellm.exceptions import RateLimitError
from zoneinfo import ZoneInfo
from google.adk.agents import LlmAgent
from google.adk.models.lite_llm import LiteLlm
from opik.integrations.adk import OpikTracer, track_adk_agent_recursive
from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.genai import types
from google.adk.runners import Runner
from agent_tracking import basic_agent
from google.adk.sessions import InMemorySessionService

# 1. Instantiate the session service
session_service = InMemorySessionService()

# 2. Pass it to the Runner during initialization
runner = Runner(
    agent=basic_agent,  # The agent you defined earlier
    app_name="financial_coach_app",
    session_service=session_service  # Added this required argument
)

async def run_financial_agent(user_data: dict):
    session_id = str(uuid.uuid4())

    user_prompt = f"""
    A user has provided the following financial profile:

    Goal: {user_data['goalDescription']}
    Annual Income: ${user_data['annualIncome']}
    Timeframe: {user_data['timeframe']}
    Risk Appetite: {user_data['riskAppetite']}
    Income Stability: {user_data['incomePredictability']}
    Savings Target: {user_data['savingsTarget']}
    AI Help Preference: {user_data['aiInterventionPreference']}
    Advice Style: {user_data['adviceFormatPreference']}

    Analyze their situation and produce a financial action plan.
    """

    response_text = ""

    async for event in runner.run_async(
        financial_agent,
        user_id="user",
        session_id=session_id,
        new_message=user_prompt,
    ):
        if event.content and event.content.parts:
            response_text += event.content.parts[0].text

    return {"analysis": response_text}
