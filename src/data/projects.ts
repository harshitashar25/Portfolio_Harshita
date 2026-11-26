export type Category =
  | "Agentic AI"
  | "LLM Engineering"
  | "RAG & Semantic Search"
  | "Backend Engineering"
  | "Developer Tools"
  | "Full Stack";

export const categories: Category[] = [
  "Agentic AI",
  "LLM Engineering",
  "RAG & Semantic Search",
  "Backend Engineering",
  "Developer Tools",
  "Full Stack",
];

export type Art = "agent" | "mac" | "docs" | "voice" | "chat" | "dic" | "chain" | "socket";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  status: string;
  featured?: boolean;
  categories: Category[];
  color: "yellow" | "lilac" | "white" | "lav";
  art: Art;
  summary: string;
  problem: string;
  /** Rows of the architecture diagram, top → bottom. */
  architecture: { label: string; nodes: string[] }[];
  architectureNote?: string;
  implementation: string[];
  decisions: { title: string; body: string }[];
  challenges: { challenge: string; solution: string }[];
  outcomes: string[];
  /** Optional step-by-step gate, used for MacMind's permission model. */
  gate?: { title: string; intro: string; steps: { name: string; detail: string; gate?: boolean }[]; rules: string[] };
  stack: string[];
  links: { github?: string; demo?: string; note?: string };
  sourceNote?: string;
}

export const projects: Project[] = [
  {
    id: "agentforge",
    title: "AgentForge",
    subtitle: "Stateful multi-agent workflow orchestration & evaluation platform",
    year: "2026",
    status: "Source not public",
    featured: true,
    categories: ["Agentic AI", "LLM Engineering", "RAG & Semantic Search"],
    color: "yellow",
    art: "agent",
    summary:
      "A supervisor-based multi-agent system built on LangGraph's StateGraph — with an agent harness for tools, structured outputs, retries and human approval, a pgvector retrieval layer, end-to-end tracing and an evaluation suite.",
    problem:
      "Single-prompt agents break down on multi-step, personalised work: they lose context, can't resume after a failure, and there is no way to tell whether a change made them better or worse. AgentForge treats an agent system as an engineered workflow — decomposed, stateful, observable and tested.",
    architecture: [
      { label: "Orchestration", nodes: ["Supervisor agent", "Task decomposition", "Conditional routing"] },
      { label: "Specialist agents", nodes: ["Specialised agents", "Shared execution state", "Context-aware personalisation"] },
      { label: "Agent harness", nodes: ["LLM tool use", "Pydantic structured outputs", "Retry / timeout middleware", "Human-in-the-loop approval", "MCP clients & servers"] },
      { label: "Memory & retrieval", nodes: ["PostgreSQL + pgvector", "Relevance ranking", "Continuously updated index", "Persistent state & checkpoints"] },
      { label: "Observability & evals", nodes: ["Langfuse / OpenTelemetry traces", "Ground-truth datasets", "Tool-use checks", "LLM-as-a-Judge"] },
      { label: "Delivery", nodes: ["Docker", "Cloud deployment"] },
    ],
    architectureNote: "Condensed from the system's design; the repository is not public so component names follow my resume.",
    implementation: [
      "Supervisor graph in LangGraph StateGraph: the supervisor decomposes a request, routes to specialised agents with conditional edges, and all agents read and write a shared execution state.",
      "Agent harness wraps every model/tool call with structured-output parsing (Pydantic), retry and timeout middleware, and an approval step for actions that need a human.",
      "External tools are reached through MCP clients and servers rather than bespoke integrations.",
      "Semantic retrieval over PostgreSQL/pgvector embeddings with relevance ranking, over an index that is continuously updated as new content arrives.",
      "Persistent state and checkpointing so long-running executions can pause, fail and resume.",
      "Traces instrumented with Langfuse/OpenTelemetry; regression tests use ground-truth datasets, tool-use checks and LLM-as-a-Judge.",
    ],
    decisions: [
      { title: "Supervisor over free-for-all", body: "A central supervisor keeps the control flow inspectable: you can read the graph and know which agent can run next, instead of agents calling each other ad hoc." },
      { title: "Checkpointed, resumable state", body: "State is persisted, not held in memory — so retries, human approvals and crashes don't throw away a half-finished run." },
      { title: "Evaluate like software", body: "Ground-truth datasets, tool-use checks and an LLM judge turn 'it seems better' into a regression suite that runs on every change." },
    ],
    challenges: [
      { challenge: "Agents that fail silently or hang", solution: "Retry and timeout middleware at the harness level, with traces that show exactly which step stalled." },
      { challenge: "Long-running work that needs a human", solution: "Human-in-the-loop approval nodes combined with checkpointing, so execution waits and then resumes where it left off." },
      { challenge: "Retrieval drifting as data changes", solution: "A continuously updated pgvector index with ranking, evaluated against ground-truth data." },
    ],
    outcomes: [
      "End-to-end multi-agent workflow: decomposition → routing → tools → retrieval → approval → resumable execution.",
      "Automated evaluation and regression testing for agent behaviour and tool use.",
      "Containerised with Docker and deployed to the cloud.",
    ],
    stack: ["Python", "LangGraph", "LangChain", "MCP", "Pydantic", "PostgreSQL", "pgvector", "Langfuse", "OpenTelemetry", "Docker"],
    links: { note: "Source repository is not public — ask me for a walkthrough." },
  },
  {
    id: "macmind",
    title: "MacMind",
    subtitle: "A native macOS AI agent that asks before it acts",
    year: "2026",
    status: "Early foundation build",
    featured: true,
    categories: ["Agentic AI", "Developer Tools", "Full Stack"],
    color: "lilac",
    art: "mac",
    summary:
      "A Tauri/Rust core with a React/TypeScript glass UI: a personal on-device agent with local SQLite memory, local Ollama inference with Gemini fallback, and a confirm-gated tool registry that can act on the Mac — only with approval.",
    problem:
      "An assistant that can run shell commands and edit files is only useful if you trust it. Most agents either can't touch the OS or can do anything. MacMind makes capability explicit: every tool is declared, previewed, and — when destructive — blocked until a human says yes.",
    architecture: [
      { label: "WebView (presentation only)", nodes: ["React + TypeScript", "Tailwind + Framer Motion", "Zustand"] },
      { label: "Typed IPC", nodes: ["Commands in", "Streamed events out: reasoning · tokens · tool calls · confirmations · results"] },
      { label: "Rust core (all privileged work)", nodes: ["Orchestrator", "Conversation agent", "Context engine", "Tool registry", "SQLite memory"] },
      { label: "Inference", nodes: ["Ollama (local first)", "Gemini (fallback)"] },
      { label: "macOS tools", nodes: ["Files", "Shell", "System control", "Spotlight", "Web search", "Clipboard", "Notifications", "Music"] },
    ],
    architectureNote: "From the project's own architecture doc. The WebView never holds secrets or calls external APIs — it only speaks to Rust.",
    implementation: [
      "Rust orchestrator streams reasoning, tokens, tool calls, confirmations and results to the UI over typed IPC.",
      "Provider abstraction: an explicit MACMIND_PROVIDER wins, otherwise a running local Ollama is used, otherwise Gemini when a key is configured.",
      "Every capability is a Tool behind one trait — name, description, JSON-schema input, a destructive flag, a human-readable preview and an execute function.",
      "Local SQLite memory under the user's Application Support directory; live macOS context gathered on demand, not polled.",
      "Global summon shortcut (Option + Command + Space) for a floating assistant window.",
    ],
    decisions: [
      { title: "Tauri + Rust over Electron", body: "Smaller binary, lower idle memory and a native-feeling launch — the product's defining requirements. The trade-off is a smaller ecosystem and Rust's learning curve." },
      { title: "Local-first inference", body: "Ollama is preferred when available so prompts can stay on-device; Gemini is a fallback, not a dependency." },
      { title: "The UI is untrusted by design", body: "All privileged access and secrets live in the Rust core; the web layer only renders and sends typed commands." },
    ],
    challenges: [
      { challenge: "Letting a model act without letting it act recklessly", solution: "A single registry with a destructive() gate: the orchestrator looks the tool up, shows a precise preview of this specific call, and waits for approval." },
      { challenge: "Keeping a Rust ⇄ React boundary correct", solution: "A typed IPC contract mirrored on both sides, so a malformed event is a compile error rather than a runtime surprise." },
      { challenge: "Working offline or without a key", solution: "Provider selection order with local Ollama first and Gemini fallback; the browser preview uses a simulated transport." },
    ],
    outcomes: [
      "Working runtime, design system, IPC, orchestrator, conversation agent, tool registry, context engine and local memory.",
      "Real tools for files, shell, system info/control, Spotlight, web search, webpage fetches, music, clipboard, notifications and memory.",
      "Public repository with an architecture doc that records each decision and the rejected alternative.",
    ],
    gate: {
      title: "The permission model",
      intro: "Every model-requested action walks the same gauntlet. Safe tools run; destructive ones stop and ask.",
      steps: [
        { name: "Model emits a tool call", detail: "The model returns a function call (name + JSON arguments) against the registered tool specs." },
        { name: "Registry lookup", detail: "The orchestrator looks the name up in ToolRegistry — only registered tools can run." },
        { name: "Argument parsing", detail: "Each tool parses its own arguments; missing or malformed input returns a typed InvalidArgs error." },
        { name: "Preview", detail: "The tool renders a one-line, human-readable summary of this exact invocation." },
        { name: "Destructive?", detail: "If the tool declares destructive(), execution pauses.", gate: true },
        { name: "Human approval", detail: "The user sees the preview and approves or declines before anything runs.", gate: true },
        { name: "Execute & report", detail: "The result string goes back to the model and is shown in the tool-call card." },
      ],
      rules: [
        "Destructive tools can't run without explicit confirmation.",
        "Secrets never reach the WebView; the Rust core owns API access.",
        "Context is gathered on demand, each source gated by its own macOS permission.",
        "No silent telemetry — local-first state in SQLite on the user's disk.",
      ],
    },
    stack: ["Rust", "Tauri 2", "React", "TypeScript", "SQLite", "Ollama", "Gemini", "Tokio", "Zustand", "Tailwind"],
    links: { github: "https://github.com/harshitashar25/MacMind" },
    sourceNote: "README labels this an early foundation build; the roadmap lists further agents.",
  },
  {
    id: "smartconcurrence",
    title: "Tender & Concurrence Assistant",
    subtitle: "Human-in-the-loop financial concurrence and RFP-first tender evaluation",
    year: "2026",
    status: "Pilot (local)",
    categories: ["Backend Engineering", "RAG & Semantic Search", "LLM Engineering"],
    color: "white",
    art: "docs",
    summary:
      "A pilot where the LLM proposes, validators dispose and humans decide: upload → text/OCR extraction → proposed fields that stay UNVERIFIED until someone verifies or corrects them, with RBAC and an audit hash chain.",
    problem:
      "Procurement evidence arrives as PDFs, Word, Excel and scans. Automated extraction is fast but can be wrong — and in finance a wrong value is worse than a missing one.",
    architecture: [
      { label: "Frontend", nodes: ["Next.js dashboard", "Evidence viewer", "Extracted-fields review"] },
      { label: "API", nodes: ["FastAPI", "RBAC (4 demo roles)", "Audit hash chain"] },
      { label: "Pipeline", nodes: ["Text extraction", "OCR when needed", "Field extraction", "Rule validators"] },
      { label: "Storage", nodes: ["PostgreSQL (Alembic migrations)", "Redis"] },
    ],
    architectureNote: "From the repository README and docker-compose layout.",
    implementation: [
      "Uploads of PDF, DOCX, XLSX, PNG and JPEG auto-process on case, tender and bidder documents.",
      "Extracted values carry an UNVERIFIED status; nothing auto-promotes to VERIFIED — a human verifies or corrects, and each action is audited.",
      "Money is Decimal-only; the project prefers a missing field to a wrong one.",
      "Role-based access (admin, procurement officer, approving authority, auditor) and a hash-chained audit log.",
    ],
    decisions: [
      { title: "'LLM proposes, validators dispose, humans decide'", body: "The model is never the source of truth; deterministic validation and a human review step are." },
      { title: "No fabricated OCR / AI", body: "If extraction fails, the field is left empty and can be re-run — rather than guessed." },
    ],
    challenges: [
      { challenge: "Scanned documents with no text layer", solution: "Native text extraction first, OCR as a fallback, with re-run controls on failure." },
      { challenge: "Trusting extracted figures", solution: "Decimal-only money handling, validators, UNVERIFIED-by-default fields and audited corrections." },
    ],
    outcomes: [
      "Upload → extract → review flow working end to end on a local pilot.",
      "The repo's own release-readiness notes are explicit that it is a pilot, not full production.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Alembic", "Redis", "Docker", "Next.js", "OCR"],
    links: { github: "https://github.com/harshitashar25/cog-tender-approve" },
    sourceNote: "Public repo described as the SmartConcurrence pilot — relationship to my Cognecto internship needs my confirmation before I describe it further.",
  },
  {
    id: "emotivox",
    title: "Emotivox 2.0",
    subtitle: "Voice cloning, text-to-speech and speech-to-text in the browser",
    year: "2025",
    status: "Working prototype",
    categories: ["Full Stack", "LLM Engineering"],
    color: "yellow",
    art: "voice",
    summary:
      "A React + Vite front end over a Flask API that clones a voice from an uploaded sample using the YourTTS model, plus browser-native text-to-speech and English/Hindi speech-to-text.",
    problem:
      "Voice cloning demos usually need a notebook. Emotivox wraps a multilingual TTS model behind a small API and a friendly UI so anyone can upload a sample and hear it speak new text.",
    architecture: [
      { label: "Frontend", nodes: ["React + Vite", "Voice cloning page", "Text-to-speech page", "Speech-to-text page"] },
      { label: "Browser APIs", nodes: ["Web Speech API (STT: en-IN / hi-IN)", "speechSynthesis (basic TTS)"] },
      { label: "Flask API", nodes: ["POST /clone", "GET /outputs/<file>", "GET /list-outputs"] },
      { label: "Model", nodes: ["Coqui TTS · YourTTS (your_tts)", "pydub audio handling"] },
    ],
    architectureNote: "Read from the repository source: Flask app.py and the React components.",
    implementation: [
      "Flask endpoint /clone takes a speaker sample and text, synthesises with the YourTTS multilingual model and serves the generated audio file.",
      "Frontend lets users upload samples, play/pause generated audio and download it.",
      "Speech-to-text for English and Hindi uses the browser's Web Speech API; basic text-to-speech uses the browser speechSynthesis API.",
    ],
    decisions: [
      { title: "Heavy model server-side, light features in the browser", body: "Only voice cloning needs the Python model; STT and basic TTS ride on built-in browser APIs." },
    ],
    challenges: [
      { challenge: "Serving large generated audio files", solution: "Generated outputs are stored with unique IDs and exposed through dedicated retrieval and listing routes." },
    ],
    outcomes: ["Working voice-cloning flow with audio playback and download.", "Bilingual (English/Hindi) transcription."],
    stack: ["Python", "Flask", "Coqui TTS (YourTTS)", "React", "Vite", "JavaScript"],
    links: { github: "https://github.com/harshitashar25/Emotivox2.0" },
    sourceNote: "The repository uses YourTTS and the browser Web Speech API — I found no Whisper in the code, so it is not claimed here.",
  },
  {
    id: "fraudtrace",
    title: "Blockchain Fraud Traceability",
    subtitle: "Corda ledger, AI risk scoring and a live law-enforcement dashboard",
    year: "2025–26",
    status: "Prototype",
    categories: ["Backend Engineering", "Full Stack"],
    color: "lav",
    art: "chain",
    summary:
      "A multi-service prototype that analyses bank transactions with an AI risk engine, records them on a Corda blockchain between bank nodes, and streams alerts to a React dashboard.",
    problem: "Fraud investigations span banks and agencies; evidence has to be traceable and tamper-evident while alerts reach investigators fast.",
    architecture: [
      { label: "Banks", nodes: ["Bank API (Spring Boot / Kotlin)", "Corda nodes: BankA · BankB · Notary"] },
      { label: "Intelligence", nodes: ["AI risk engine (Python Flask)"] },
      { label: "Law-enforcement side", nodes: ["Node.js backend + WebSocket", "React dashboard"] },
    ],
    implementation: [
      "CorDapp with contracts, states and flows between bank nodes.",
      "Spring Boot bank API calls the Flask risk engine and records outcomes on the ledger.",
      "Node.js WebSocket server pushes live updates to the React dashboard; Docker Compose ties services together.",
    ],
    decisions: [{ title: "One service per concern", body: "Ledger, risk scoring, ingestion API and dashboard are separate services so each can evolve independently." }],
    challenges: [{ challenge: "Coordinating five runtimes", solution: "Phased startup scripts and a docker-compose file documented in the README." }],
    outcomes: ["End-to-end prototype across Kotlin, Python, Node.js and React."],
    stack: ["Kotlin", "Spring Boot", "Corda", "Python", "Flask", "Node.js", "WebSockets", "React", "Docker"],
    links: { github: "https://github.com/harshitashar25/BlockChain_Based_Fraud_Detection_System" },
  },
  {
    id: "dic",
    title: "Stereo / 2D DIC Viewer",
    subtitle: "Digital image correlation for displacement and strain",
    year: "2026",
    status: "Research tool",
    categories: ["Developer Tools"],
    color: "white",
    art: "dic",
    summary:
      "A research-oriented Python viewer for Digital Image Correlation: full-field displacement and strain from speckled image sequences, in 2D and stereo 3D, built around SEM DIC Challenge-style datasets.",
    problem: "Measuring how a surface deforms needs correlation, calibration and triangulation to work together — and a way to look at the results.",
    architecture: [
      { label: "Input", nodes: ["Speckle image sequences", "Calibration data"] },
      { label: "Processing", nodes: ["2D DIC (U, V + Green–Lagrange strain)", "Stereo triangulation (X, Y, Z)"] },
      { label: "Output", nodes: ["3D displacement", "Surface strain incl. equivalent strain", "Interactive viewer"] },
    ],
    implementation: ["2D and stereo 3D pipelines in Python with documented mathematical background.", "Screen-recorded demos of live runs are included in the repository."],
    decisions: [{ title: "Datasets stay out of Git", body: "The 15+ GB image sets are not tracked; the repo ships software, docs, calibration and recordings." }],
    challenges: [{ challenge: "Huge datasets", solution: "A prepare_data step that converts local challenge folders into prepared inputs." }],
    outcomes: ["Technical documentation and two demo recordings."],
    stack: ["Python"],
    links: { github: "https://github.com/harshitashar25/DIC_SAMPLE01" },
  },
  {
    id: "aichatbot",
    title: "AI ChatBot",
    subtitle: "Multimodal Gemini chat in React",
    year: "2025",
    status: "Learning project",
    categories: ["LLM Engineering", "Full Stack"],
    color: "lilac",
    art: "chat",
    summary: "A React + Vite chatbot on Google's Gemini 1.5 Pro API that accepts text and image/screenshot input, with a typing indicator and auto-scrolling chat UI.",
    problem: "An early exploration of calling a hosted multimodal LLM from a frontend.",
    architecture: [{ label: "Client", nodes: ["React + Vite", "aiService.js"] }, { label: "Model", nodes: ["Gemini 1.5 Pro API"] }],
    implementation: ["Text and image input, real-time response rendering, auto-scroll."],
    decisions: [{ title: "Hindsight", body: "The README has the API key edited directly into source — fine for a prototype, and exactly why my later work keeps secrets server-side." }],
    challenges: [{ challenge: "Image + text prompts", solution: "Image uploads are sent alongside the text query." }],
    outcomes: ["A working first LLM app that led into the agentic work above."],
    stack: ["React", "Vite", "JavaScript", "Gemini API"],
    links: { github: "https://github.com/harshitashar25/AI_ChatBot" },
  },
  {
    id: "tcpchat",
    title: "TCP Chat & File Transfer",
    subtitle: "Socket server with broadcast chat and file relay",
    year: "2026",
    status: "Networks lab project",
    categories: ["Backend Engineering", "Developer Tools"],
    color: "yellow",
    art: "socket",
    summary: "A multi-client TCP server in pure Python standard library: broadcast chat, file relay between peers, a line client and a full-screen curses TUI client.",
    problem: "A Computer Networks lab project: build the plumbing yourself, test it over real LAN/Wi-Fi.",
    architecture: [{ label: "Clients", nodes: ["Line terminal client", "Curses TUI client"] }, { label: "Server", nodes: ["chat_server.py · 0.0.0.0:12345", "Broadcast + file relay"] }],
    implementation: ["Standard-library only (Python 3.9+)", "Commands such as /file and /quit; server logs every connect, line and relay."],
    decisions: [{ title: "Zero dependencies", body: "Only the stdlib, so it runs on any lab machine." }],
    challenges: [{ challenge: "Reliable file relay over streams", solution: "Framed messages so text and files share one connection." }],
    outcomes: ["Tested across two laptops on the same network."],
    stack: ["Python", "TCP sockets", "curses"],
    links: { github: "https://github.com/harshitashar25/tcp-chat-file-transfer" },
  },
];

/** Smaller / earlier / unreviewed repos, shown compactly. Descriptions only where verified. */
export const labNotes = [
  { name: "Campus-Compass", lang: "Python" },
  { name: "ETH_FraudDetection_System", lang: "JavaScript" },
  { name: "BlockChain", lang: "JavaScript" },
  { name: "ML_Part1", lang: "Jupyter" },
  { name: "Dhvani-Mitra", lang: "JavaScript" },
  { name: "CampusConnect", lang: "—" },
  { name: "CPP-Algorithms", lang: "C++" },
  { name: "Emotivox1.0", lang: "CSS" },
];
