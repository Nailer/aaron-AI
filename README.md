# Aaron AI (RESOLV.AI) 🚀
### The Agentic Financial Bodyguard & Goal Guardian

**Aaron AI** (internally branded as **RESOLV.AI**) is an autonomous financial coaching system built for the 2026 New Year Resolution Hackathon. Unlike passive budgeting apps, Aaron AI uses a multi-agent orchestration to proactively intervene in spending habits, evaluate financial feasibility, and guide users toward their long-term goals using high-fidelity AI observability.

### Here is one of our traces id
```019c25c3-d5f4-7d4a-9953-089c87868dcc```

---

## 🌟 Key Features
* **Proactive Goal Tracking:** Moves beyond spreadsheets to provide active "nudges" based on user-defined financial missions.
* **Multi-Agent Orchestration:** Powered by the **Google Agent Development Kit (ADK)** to separate reasoning, math, and coaching logic.
* **Production-Grade Observability:** Deep integration with **Opik** for real-time trace logging, response evaluation, and LLM-as-a-judge scoring.
* **Behavioral Intervention:** Custom logic that factors in risk appetite and income predictability to provide personalized advice.

---

## 🛠️ Tech Stack
* **Frontend:** Next.js 14+, Tailwind CSS, Lucide React.
* **Backend:** FastAPI (Python 3.13), Uvicorn.
* **AI Engine:** Google ADK, LiteLLM.
* **LLMs:** Llama 3.3 70B & 3.1 8B (via Groq).
* **Observability:** [Opik](https://www.comet.com/docs/opik/) (by Comet).

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v18+)
* [Python](https://www.python.org/) (v3.10+)
* [Git](https://git-scm.com/)


# --- AI & LLM CONFIGURATION ---
# Get your key at https://console.groq.com/
GROQ_API_KEY=your_groq_api_key_here

# --- OPIK OBSERVABILITY ---
# Get your key at https://www.comet.com/docs/opik/
OPIK_API_KEY=your_opik_api_key_here
OPIK_PROJECT_NAME=Aaron
OPIK_WORKSPACE=your_workspace_name

```bash 
GEMINI_API_KEY="your_gemini_api_key_here"

# Opik Configuration
OPIK_API_KEY="your_opik_api_key_here"
OPIK_URL_OVERRIDE="https://www.comet.com/opik/api"
OPIK_PROJECT_NAME="Aaron"
OPIK_WORKSPACE="your_opik_workspace_here"

# LLM Provider API Keys (if needed)
OPENAI_API_KEY="your_openai_api_key_here"
OPENAI_API_KEY_2="your_openai_api_key_2_here"
GROQ_API_KEY="your_groq_api_key_here"

# Logging Configuration (see Debug Mode and Logging section below)
OPIK_CONSOLE_LOGGING_LEVEL="WARNING"  # Python: Control console output (DEBUG, INFO, WARNING, ERROR, CRITICAL)
OPIK_FILE_LOGGING_LEVEL="DEBUG"       # Python: Enable file logging
OPIK_LOG_LEVEL="DEBUG"                # TypeScript: Control log level
```

# --- SERVER CONFIGURATION ---
PORT=8000
FRONTEND_URL=http://localhost:3000

### Environment Configuration 🔑
Before running the backend, you must set up your environment variables. 

1. In the root directory, copy the example file:
   ```bash
   cp .env.example .env

### 2. Installation & Frontend Setup
Clone the repository and install dependencies for the user interface.

Note: If you encounter any bugs during the frontend setup, please create a new [issue](https://github.com/Nailer/aaron-AI/issues) on GitHub.
```bash
# Clone the project
git clone [https://github.com/Nailer/aaron-AI](https://github.com/Nailer/aaron-AI)

# Navigate to the project directory
cd aaron-AI

# Install dependencies
# We use NPM for package management. See the official [NPM Documentation](https://docs.npmjs.com/) for more info.
npm install

# Start the frontend development server
npm run dev
```

### 3. AI Backend & Opik Observability Setup
To enable the AI "brain" and log traces for response evaluation, follow these steps to set up the Python environment.
```bash
# Initialize Virtual Environment
# Create and activate a virtual environment to keep dependencies isolated.

# For macOS/Linux:
python3 -m venv venv
source venv/bin/activate

# For Windows
python -m venv venv
.\venv\Scripts\activate
```
### Install Requirements & Start API
```bash
# Install backend dependencies
pip install -r requirements.txt

# Start the FastAPI server
uvicorn backend.api:app --port 8000 --reload
```

### Enable Agent Tracking
In a new terminal tab (with the venv activated), run the tracking script to initiate the [Opik](https://www.comet.com/docs/opik/) logging session:

```bash
python backend/agent_tracking.py

# All agent trajectories, tool calls, and LLM outputs will now be logged to the Opik dashboard for evaluation.
```

### 📊 AI Observability with Opik
We utilize Opik to ensure our financial advice is accurate and safe.

* Tracing: Every interaction is traced through the Google ADK runner.

* Evaluation: We use LLM-as-a-judge metrics to score "Financial Responsibility".

* Debugging: Traces allow us to deduce exactly why an agent recommended a specific savings plan.

├── backend/
│   ├── api.py              # FastAPI Endpoints
│   ├── agent_runner.py     # ADK Runner logic
│   ├── agent_tracking.py   # Opik integration script
│   └── __init__.py            # Financial calculation tools
├── frontend/               # Next.js Application
├── requirements.txt        # Python dependencies
└── package.json            # Node.js dependencies

### 🛡️ Security & Privacy
Aaron AI is built with financial privacy in mind. We do not store raw bank credentials. All data processed is used strictly for the generation of your financial plan and is encrypted during transit.

## 📄 License
Distributed under the MIT License. See LICENSE for more information.

### Developed with ❤️ for the 2026 Comet Hackathon.
