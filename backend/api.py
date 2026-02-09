from fastapi import FastAPI
from pydantic import BaseModel
import asyncio
from agent_runner import run_financial_agent  # we will define this

app = FastAPI()

class FinancialProfile(BaseModel):
    goalDescription: str
    annualIncome: float
    timeframe: str
    riskAppetite: str
    incomePredictability: str
    savingsTarget: str
    aiInterventionPreference: str
    adviceFormatPreference: str


@app.post("/analyze-finances")
async def analyze_finances(profile: FinancialProfile):
    result = await run_financial_agent(profile.dict())
    return result
