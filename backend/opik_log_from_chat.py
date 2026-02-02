from opik.integrations.adk import OpikTracer
import opik


tracer = OpikTracer(
    name="financial-coach-agent",
    project_name="financial-ai-coach",  # you can change from Default later
    tags=["finance", "goals", "hackathon"],
)

agent = LlmAgent(
    name="financial_agent",
    model=llm,
    description="AI Financial Goal Coach",
    instruction="Help users plan and improve their financial health responsibly.",
    tools=[your_financial_tools_here],

    before_agent_callback=tracer.before_agent_callback,
    after_agent_callback=tracer.after_agent_callback,
    before_model_callback=tracer.before_model_callback,
    after_model_callback=tracer.after_model_callback,
    before_tool_callback=tracer.before_tool_callback,
    after_tool_callback=tracer.after_tool_callback,
)
