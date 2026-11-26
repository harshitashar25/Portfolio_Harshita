const words = ["AGENTS", "RAG", "FASTAPI", "PGVECTOR", "LANGGRAPH", "RUST", "MCP", "EVALS", "TRACING", "SQL", "NODE.JS", "DOCKER"];
export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-ink py-3 text-sun" aria-hidden>
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-display text-xl font-bold tracking-widest">
        {row.map((w, i) => <span key={i} className="flex items-center gap-8">{w} <span className="text-lilac">✦</span></span>)}
      </div>
    </div>
  );
}
