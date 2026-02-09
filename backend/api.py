from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from agent_runner import run_financial_agent

app = FastAPI()

# CRITICAL: Allow your frontend to talk to your backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # Your Next.js URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
    # .dict() is deprecated in newer Pydantic; use .model_dump()
    result = await run_financial_agent(profile.model_dump())
    return result