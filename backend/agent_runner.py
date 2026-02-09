from google.adk.runners import Runner
from your_agent_setup import financial_agent   # your ADK agent
import uuid

runner = Runner()

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
