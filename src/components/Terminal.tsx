import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

type Line = { kind: "in" | "out"; text: string };

const commands: Record<string, () => string> = {
  help: () => "commands: whoami · focus · projects · stack · contact · clear",
  whoami: () => `${profile.name} — ${profile.role}\n${profile.education.institute} · CGPA ${profile.education.cgpa}`,
  focus: () => profile.focus.map((f) => "› " + f).join("\n"),
  projects: () => projects.filter((p) => p.featured).map((p) => `› ${p.title} — ${p.subtitle}`).join("\n") + "\n(scroll to Projects for case studies)",
  stack: () => "Python · FastAPI · LangGraph · MCP · pgvector · PostgreSQL · Rust · TypeScript",
  contact: () => `${profile.email}\n${profile.github}`,
};

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { kind: "in", text: "whoami" },
    { kind: "out", text: commands.whoami() },
    { kind: "out", text: "type `help` to explore ↵" },
  ]);
  const [val, setVal] = useState("");
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => { const b = box.current; if (b) b.scrollTop = b.scrollHeight; }, [lines]);

  const run = (raw: string) => {
    const c = raw.trim().toLowerCase();
    if (!c) return;
    if (c === "clear") return setLines([]);
    const out = commands[c];
    setLines((l) => [...l, { kind: "in", text: raw }, { kind: "out", text: out ? out() : `command not found: ${c} — try \`help\`` }]);
  };

  return (
    <div className="card overflow-hidden rounded-2xl bg-ink text-[13px] text-white shadow-pop" role="group" aria-label="Interactive terminal">
      <div className="flex items-center gap-1.5 border-b-2 border-ink bg-white px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-ink bg-[#FF8A8A]" /><span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-ink bg-sun" /><span className="h-2.5 w-2.5 rounded-full border-[1.5px] border-ink bg-[#8AE6A5]" />
        <span className="ml-2 font-mono text-[11px] font-semibold text-ink">harshita@lab ~ %</span>
      </div>
      <div ref={box} className="h-44 overflow-y-auto p-3 font-mono leading-relaxed" onClick={() => document.getElementById("term-in")?.focus()}>
        {lines.map((l, i) => (
          <pre key={i} className={`whitespace-pre-wrap break-words font-mono ${l.kind === "in" ? "text-sun" : "text-white/85"}`}>{l.kind === "in" ? "$ " : ""}{l.text}</pre>
        ))}
        <form onSubmit={(e) => { e.preventDefault(); run(val); setVal(""); }} className="flex gap-2">
          <label htmlFor="term-in" className="text-sun">$</label>
          <input id="term-in" value={val} onChange={(e) => setVal(e.target.value)} autoComplete="off" spellCheck={false} aria-label="Terminal command" className="w-full bg-transparent font-mono text-white outline-none focus-visible:outline-none" />
        </form>
      </div>
    </div>
  );
}
