import { useState } from "react";
import { skillGroups, systemLanes } from "@/data/skills";
import { Reveal, SectionHead, bg } from "./Ui";

export default function Skills() {
  const [focus, setFocus] = useState<string | null>(null);
  const group = skillGroups.find((g) => g.id === focus);
  const lit = new Set(group?.items ?? []);

  return (
    <section id="skills" aria-labelledby="skills-h" className="border-y-2 border-ink bg-white/40 py-24 sm:py-32">
      <div className="wrap">
        <SectionHead id="skills-h" eyebrow="04 · Stack" sub="No progress bars — just the tools I actually use, grouped by the job they do. Select a cluster to see where it sits in a typical system.">
          How I <span className="scribble-underline">build</span>
        </SectionHead>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.id} delay={i * 0.05}>
              <section aria-labelledby={`sg-${g.id}`} className={`card h-full p-5 transition-all ${bg[g.color]} ${focus && focus !== g.id ? "opacity-50" : ""} ${focus === g.id ? "-translate-y-1 shadow-pop-lg" : ""}`}>
                <button type="button" aria-pressed={focus === g.id} onClick={() => setFocus(focus === g.id ? null : g.id)} className="w-full text-left">
                  <h3 id={`sg-${g.id}`} className="font-display text-2xl font-bold">{g.title}</h3>
                  <p className="text-sm font-medium text-ink-soft">{g.blurb}</p>
                </button>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => <li key={s} className="chip transition-transform hover:-translate-y-0.5 hover:bg-ink hover:text-white">{s}</li>)}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="card bg-white p-5 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-2">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">A system, drawn from my stack</h3>
              <p className="text-sm text-ink-soft">{group ? `Highlighting: ${group.title}` : "Select a cluster above to highlight it"}</p>
            </div>
            <div className="mt-6 grid gap-3">
              {systemLanes.map((l, i) => (
                <div key={l.label} className="grid items-center gap-3 sm:grid-cols-[120px_1fr]">
                  <p className="font-display text-xs font-bold uppercase tracking-widest text-ink-soft">{String(i + 1).padStart(2, "0")} {l.label}</p>
                  <div className="flex flex-wrap gap-2 rounded-2xl border-2 border-dashed border-ink p-2.5">
                    {l.nodes.map((n) => (
                      <span key={n} className={`rounded-xl border-2 border-ink px-3 py-1.5 text-sm font-bold transition-all ${lit.has(n) ? "-translate-y-0.5 bg-sun shadow-pop-sm" : "bg-lav-pale"}`}>{n}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
