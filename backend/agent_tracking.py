import datetime
import asyncio
from zoneinfo import ZoneInfo

from google.adk.agents import LlmAgent
from google.adk.models.lite_llm import LiteLlm
from opik.integrations.adk import OpikTracer, track_adk_agent_recursive
from google.adk.runners import Runner
from google.adk.sessions import InMemorySessionService
from google.genai import types

def get_weather(city: str) -> dict:
    """Get weather information for a city."""
    if city.lower() == "new york":
        return {
            "status": "success",
            "report": "The weather in New York is sunny with a temperature of 25 °C (77 °F).",
        }
    elif city.lower() == "london":
        return {
            "status": "success",
            "report": "The weather in London is cloudy with a temperature of 18 °C (64 °F).",
        }
    return {"status": "error", "error_message": f"Weather info for '{city}' is unavailable."}

def get_current_time(city: str) -> dict:
    """Get current time for a city."""
    if city.lower() == "new york":
        tz = ZoneInfo("America/New_York")
        now = datetime.datetime.now(tz)
        return {
            "status": "success",
            "report": now.strftime(f"The current time in {city} is %Y-%m-%d %H:%M:%S %Z%z."),
        }
    elif city.lower() == "london":
        tz = ZoneInfo("Europe/London")
        now = datetime.datetime.now(tz)
        return {
            "status": "success",
            "report": now.strftime(f"The current time in {city} is %Y-%m-%d %H:%M:%S %Z%z."),
        }
    return {"status": "error", "error_message": f"No timezone info for '{city}'."}

# Initialize LiteLLM with OpenAI gpt-4o
llm = LiteLlm(model="groq/llama-3.1-8b-instant")

# Create the basic agent
basic_agent = LlmAgent(
    name="weather_time_agent",
    model=llm,
    description="Agent for answering time & weather questions",
    instruction="Answer questions about the time or weather in a city. Be helpful and provide clear information.",
    tools=[get_weather, get_current_time],
)

# Configure Opik tracer
opik_tracer = OpikTracer(
    name="basic-weather-agent",
    tags=["basic", "weather", "time", "single-agent"],
    metadata={
        "environment": "development",
        "model": "gpt-4o",
        "framework": "google-adk",
        "example": "basic"
    },
    project_name="Aaron"
)

# Instrument the agent with a single function call - this is the recommended approach
track_adk_agent_recursive(basic_agent, opik_tracer)

# from chatGPT
session_service = InMemorySessionService()
runner = Runner(
    agent=basic_agent,  # later: financial_agent
    app_name="financial_coach_app",
    session_service=session_service,
)

async def main():
    session = await session_service.create_session(
        app_name="financial_coach_app",
        user_id="test_user",
        session_id="session_001",
    )

    user_message = types.Content(
        role="user",
        parts=[types.Part(text="What's the weather in London?")]
    )

    async for event in runner.run_async(
        user_id="test_user",
        session_id=session.id,
        new_message=user_message,
    ):
        if event.is_final_response():
            print("Assistant:", event.content.parts[0].text)

if __name__ == "__main__":
    asyncio.run(main())
