export interface SkillGroup {
  id: string;
  title: string;
  blurb: string;
  items: string[];
  color: "yellow" | "lilac" | "white" | "lav";
}

export const skillGroups: SkillGroup[] = [
  { id: "agentic", title: "Agentic AI", blurb: "Orchestrating models that act.", color: "yellow",
    items: ["LangGraph", "LangChain", "DeepAgents", "MCP", "Agent Orchestration", "Tool Use", "State Management", "Checkpointing", "Human-in-the-Loop"] },
  { id: "llm", title: "LLM Engineering", blurb: "Making models useful and measurable.", color: "lilac",
    items: ["RAG", "Prompt Engineering", "Embeddings", "Semantic Search", "Vector Search", "Retrieval & Ranking", "Structured Outputs", "LLM Evaluation", "OpenAI / Anthropic APIs"] },
  { id: "obs", title: "Observability & Evals", blurb: "Seeing why agents fail.", color: "white",
    items: ["Agent Tracing", "Failure Analysis", "Langfuse", "OpenTelemetry", "Ground-Truth Evaluation", "LLM-as-a-Judge"] },
  { id: "backend", title: "Backend & Data", blurb: "The boring parts that make it real.", color: "lav",
    items: ["FastAPI", "Node.js", "REST APIs", "WebSockets", "PostgreSQL", "pgvector", "MongoDB", "ChromaDB", "Pydantic", "SQL Schema & Query Design"] },
  { id: "lang", title: "Programming", blurb: "Languages I reach for.", color: "white",
    items: ["Python", "C / C++", "Java", "JavaScript", "TypeScript", "SQL"] },
  { id: "tools", title: "Tools & Delivery", blurb: "Shipping and keeping it running.", color: "yellow",
    items: ["Docker", "Git", "GitHub Actions", "Linux", "GCP", "pytest", "CI/CD", "Cloud Deployment"] },
];

/** Lanes of the "how I build" system diagram. Every node is a skill from the resume. */
export const systemLanes = [
  { label: "Interface", nodes: ["TypeScript", "REST APIs", "WebSockets"] },
  { label: "Agents", nodes: ["LangGraph", "MCP", "Tool Use", "Human-in-the-Loop"] },
  { label: "Retrieval", nodes: ["Embeddings", "pgvector", "Retrieval & Ranking"] },
  { label: "Data", nodes: ["PostgreSQL", "SQL", "Pydantic"] },
  { label: "Trust", nodes: ["Langfuse", "OpenTelemetry", "LLM-as-a-Judge"] },
  { label: "Ship", nodes: ["Docker", "GitHub Actions", "GCP"] },
];
