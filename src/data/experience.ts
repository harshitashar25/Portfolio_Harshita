export interface Experience {
  id: string;
  company: string;
  product: string;
  role: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  contributions: string[];
  stack: string[];
  impact: { value: string; label: string }[];
  story: { heading: string; body: string }[];
  pipeline?: string[];
  color: "yellow" | "lilac" | "white";
}

export const experience: Experience[] = [
  {
    id: "cognecto",
    company: "Cognecto",
    product: "SmartConcurrence Platform",
    role: "Software Engineer Intern (Backend)",
    location: "Bengaluru, India",
    period: "Nov 2026 – Present",
    current: true,
    summary:
      "Shipping Python/FastAPI backend features to production for an AI-assisted financial concurrence and tender-evaluation platform.",
    contributions: [
      "Production FastAPI features for a platform processing PDF, DOCX, XLSX and scanned documents.",
      "Document ingestion with an OCR fallback and LLM structured-output field extraction.",
      "PostgreSQL / pgvector semantic search and ranking for evidence retrieval; designed the underlying table schemas and SQL queries.",
      "Hybrid LLM evaluation workflows: deterministic rule validation + LLM-assisted observations + human review + audit trails.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "SQL", "OCR", "LLM structured outputs"],
    impact: [
      { value: "4", label: "document formats ingested" },
      { value: "Hybrid", label: "rules + LLM + human review" },
    ],
    story: [
      {
        heading: "The problem",
        body: "Financial concurrence and tender evaluation depend on evidence buried in heterogeneous documents — native PDFs, Word and Excel files and scans. Reviewers need the right evidence quickly, and every judgement has to be auditable.",
      },
      {
        heading: "The approach",
        body: "A layered pipeline: ingest each format, fall back to OCR when there is no text layer, extract structured fields with an LLM, and index evidence in pgvector so reviewers retrieve ranked, relevant passages instead of searching by hand.",
      },
      {
        heading: "Evaluation you can defend",
        body: "Evaluation is hybrid on purpose. Deterministic rules decide what can be decided deterministically; the LLM adds observations; a human makes the call; an audit trail records all three.",
      },
    ],
    pipeline: ["Ingest", "OCR fallback", "LLM field extraction", "pgvector retrieval", "Rule validation", "Human review", "Audit trail"],
    color: "yellow",
  },
  {
    id: "trodo",
    company: "Trodo",
    product: "AI Agent Observability Platform",
    role: "Software Engineer Intern (Backend & AI Systems)",
    location: "Ahmedabad, India",
    period: "May 2026 – Jul 2026",
    summary:
      "Built a Python platform that traces production LLM agent runs to catch silent execution failures and evaluate output quality.",
    contributions: [
      "Tracing of agent executions: tool calls, prompts, completions and retrieved context.",
      "Designed a four-stage failure-analysis pipeline over a continuously growing trace index.",
      "Deterministic Python/SQL event processing and schema design.",
      "Embedding-based semantic search and clustering of failures; training-data export.",
    ],
    stack: ["Python", "SQL", "Embeddings", "Semantic clustering", "Schema design"],
    impact: [
      { value: "~97%", label: "infrastructure cost reduction" },
      { value: "4", label: "pipeline stages" },
    ],
    story: [
      {
        heading: "The problem",
        body: "Production agents rarely crash — they quietly do the wrong thing. A bad tool call or a missed piece of context looks like a normal run unless something is watching for it.",
      },
      {
        heading: "The approach",
        body: "Capture the full execution (prompts, completions, tool calls, retrieved context), then process it with a deterministic four-stage pipeline: signal extraction → root-cause / severity scoring → embedding-based semantic search & clustering → training-data export.",
      },
      {
        heading: "The result",
        body: "Similar failures are grouped so they can be fixed once, and exported as training data. Doing the heavy lifting with deterministic Python/SQL processing is what brought infrastructure cost down by roughly 97%.",
      },
    ],
    pipeline: ["Signal extraction", "Root-cause & severity scoring", "Semantic search & clustering", "Training-data export"],
    color: "lilac",
  },
  {
    id: "cryptique",
    company: "Cryptique",
    product: "Web3 Product Analytics Platform",
    role: "Software Engineer Intern",
    location: "Remote",
    period: "Aug 2025 – Feb 2026",
    summary:
      "Built production Node.js backend services and REST APIs for an SDK that tracks wallet behaviour across 30+ blockchains.",
    contributions: [
      "Node.js services and REST APIs shipped to production.",
      "Improved retrieval and ranking logic in the CQ Intelligence agent pipeline.",
      "SQL analytics, relational table / query design and smart-contract integrations.",
      "Caching, batching and query optimisation to cut infrastructure spend.",
    ],
    stack: ["Node.js", "REST APIs", "SQL", "Smart contracts", "Caching", "Batching"],
    impact: [
      { value: "30+", label: "blockchains tracked" },
      { value: "~90%", label: "infrastructure cost reduction" },
    ],
    story: [
      {
        heading: "The problem",
        body: "Product analytics for wallets means ingesting behaviour from dozens of chains. At that scale, naive queries and per-event calls get expensive quickly.",
      },
      {
        heading: "The approach",
        body: "Treat cost as a design constraint: cache hot reads, batch writes and external calls, and tune the relational schema and queries behind the analytics APIs.",
      },
      {
        heading: "The result",
        body: "Roughly 90% lower infrastructure cost, plus better retrieval and ranking in the CQ Intelligence agent pipeline.",
      },
    ],
    pipeline: ["SDK events", "Node.js APIs", "Caching + batching", "SQL analytics", "CQ Intelligence agent"],
    color: "white",
  },
];
