import { useEffect, useRef } from "react";
import { ArrowDown, ExternalLink, Github, Lock, ShieldCheck, X } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectArt } from "./Doodles";
import { bg } from "./Ui";

function H({ n, children }: { n: string; children: string }) {
  return <h3 className="mb-4 flex items-baseline gap-3 font-display text-2xl font-bold sm:text-3xl"><span className="text-sm text-lilac-deep">{n}</span>{children}</h3>;
}

export default function CaseStudy({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const body = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (project && !d.open) { d.showModal(); document.body.style.overflow = "hidden"; body.current?.scrollTo(0, 0); }
    if (!project && d.open) { d.close(); }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  const p = project;
  return (
    <dialog ref={ref} onClose={onClose} onClick={(e) => e.target === ref.current && onClose()} aria-labelledby="cs-title"
      className="m-auto h-[94vh] w-[min(1100px,96vw)] max-w-none overflow-hidden rounded-[2rem] border-2 border-ink bg-lav p-0 text-ink shadow-pop-lg backdrop:bg-ink/60">
      {p && (
        <div ref={body} className="h-full overflow-y-auto">
          <div className={`relative border-b-2 border-ink ${bg[p.color]} px-6 pb-8 pt-6 sm:px-10`}>
            <button type="button" onClick={onClose} aria-label="Close case study" className="sticky top-0 float-right grid h-11 w-11 place-items-center rounded-full border-2 border-ink bg-white shadow-pop-sm hover:bg-ink hover:text-white"><X size={20} /></button>
            <p className="font-display text-xs font-bold uppercase tracking-widest">Case study · {p.year} · {p.status}</p>
            <div className="mt-3 grid items-center gap-6 md:grid-cols-[1fr_260px]">
              <div>
                <h2 id="cs-title" className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl">{p.title}</h2>
                <p className="mt-3 max-w-2xl text-lg font-semibold">{p.subtitle}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {p.links.github && <a className="btn bg-white" href={p.links.github} target="_blank" rel="noopener noreferrer"><Github size={16} aria-hidden /> Repository</a>}
                  {p.links.demo && <a className="btn bg-ink text-white" href={p.links.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} aria-hidden /> Live demo</a>}
                  {!p.links.github && <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-2 text-sm font-bold"><Lock size={14} aria-hidden /> {p.links.note ?? "Source not public"}</span>}
                </div>
              </div>
              <div className="hidden rounded-3xl border-2 border-ink bg-white/70 p-2 md:block"><ProjectArt art={p.art} /></div>
            </div>
          </div>

          <div className="space-y-14 px-6 py-10 sm:px-10">
            <section aria-label="Overview" className="grid gap-6 md:grid-cols-2">
              <div><H n="01">Overview</H><p className="text-lg leading-relaxed">{p.summary}</p></div>
              <div className="card p-6"><H n="02">The problem</H><p className="leading-relaxed text-ink-soft">{p.problem}</p></div>
            </section>

            <section aria-label="Architecture">
              <H n="03">Architecture</H>
              <div className="card p-5 sm:p-7">
                <ol className="space-y-2">
                  {p.architecture.map((lane, i) => (
                    <li key={lane.label}>
                      <div className={`rounded-2xl border-2 border-ink p-3 sm:p-4 ${["bg-sun", "bg-lilac", "bg-white", "bg-lav-pale"][i % 4]}`}>
                        <p className="font-display text-xs font-bold uppercase tracking-widest">{lane.label}</p>
                        <div className="mt-2 flex flex-wrap gap-2">{lane.nodes.map((n) => <span key={n} className="rounded-xl border-2 border-ink bg-white px-3 py-1.5 text-sm font-semibold shadow-pop-sm">{n}</span>)}</div>
                      </div>
                      {i < p.architecture.length - 1 && <ArrowDown className="mx-auto my-1" size={18} aria-hidden />}
                    </li>
                  ))}
                </ol>
                {p.architectureNote && <p className="mt-4 text-sm text-ink-soft">{p.architectureNote}</p>}
              </div>
            </section>

            {p.gate && (
              <section aria-label={p.gate.title} className="rounded-[2rem] border-2 border-ink bg-ink p-6 text-white sm:p-9">
                <div className="flex items-center gap-3 text-sun"><ShieldCheck size={28} aria-hidden /><h3 className="font-display text-3xl font-bold sm:text-4xl">{p.gate.title}</h3></div>
                <p className="mt-3 max-w-2xl text-white/80">{p.gate.intro}</p>
                <ol className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                  {p.gate.steps.map((s, i) => (
                    <li key={s.name} className={`rounded-2xl border-2 p-4 ${s.gate ? "border-sun bg-sun text-ink" : "border-white/30 bg-white/5"}`}>
                      <p className="font-display text-xs font-bold opacity-70">{String(i + 1).padStart(2, "0")}{s.gate ? " · GATE" : ""}</p>
                      <p className="mt-1 font-display text-lg font-bold leading-tight">{s.name}</p>
                      <p className={`mt-1 text-sm ${s.gate ? "" : "text-white/75"}`}>{s.detail}</p>
                    </li>
                  ))}
                </ol>
                <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                  {p.gate.rules.map((r) => <li key={r} className="flex gap-2 text-sm"><span className="text-sun" aria-hidden>✓</span>{r}</li>)}
                </ul>
              </section>
            )}

            <section aria-label="Technical implementation">
              <H n="04">Technical implementation</H>
              <ul className="grid gap-3 md:grid-cols-2">
                {p.implementation.map((x) => <li key={x} className="flex gap-3 rounded-2xl border-2 border-ink bg-white p-4 leading-snug"><span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-lilac-deep" aria-hidden />{x}</li>)}
              </ul>
            </section>

            <section aria-label="Key engineering decisions">
              <H n="05">Key engineering decisions</H>
              <div className="grid gap-4 md:grid-cols-3">
                {p.decisions.map((d, i) => (
                  <article key={d.title} className={`rounded-3xl border-2 border-ink p-5 shadow-pop-sm ${["bg-sun", "bg-lilac", "bg-white"][i % 3]}`}>
                    <h4 className="font-display text-lg font-bold leading-tight">{d.title}</h4><p className="mt-2 text-sm leading-relaxed">{d.body}</p>
                  </article>
                ))}
              </div>
            </section>

            <section aria-label="Challenges and solutions">
              <H n="06">Challenges & solutions</H>
              <div className="space-y-3">
                {p.challenges.map((c) => (
                  <div key={c.challenge} className="grid overflow-hidden rounded-2xl border-2 border-ink bg-white md:grid-cols-2">
                    <p className="border-b-2 border-ink bg-lav-pale p-4 font-semibold md:border-b-0 md:border-r-2"><span className="mb-1 block font-display text-xs font-bold uppercase tracking-widest text-lilac-deep">Challenge</span>{c.challenge}</p>
                    <p className="p-4"><span className="mb-1 block font-display text-xs font-bold uppercase tracking-widest text-lilac-deep">Solution</span>{c.solution}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid gap-6 md:grid-cols-2">
              <section aria-label="Outcomes"><H n="07">Outcomes</H>
                <ul className="space-y-2">{p.outcomes.map((o) => <li key={o} className="flex gap-2"><span aria-hidden>★</span>{o}</li>)}</ul>
                {p.sourceNote && <p className="mt-4 rounded-2xl border-2 border-dashed border-ink p-3 text-sm text-ink-soft"><strong>Note:</strong> {p.sourceNote}</p>}
              </section>
              <section aria-label="Tech stack"><H n="08">Tech stack</H>
                <div className="flex flex-wrap gap-2">{p.stack.map((s) => <span key={s} className="chip bg-sun">{s}</span>)}</div>
                <H n="09">Links</H>
                <div className="flex flex-wrap gap-3">
                  {p.links.github ? <a className="btn bg-sun" href={p.links.github} target="_blank" rel="noopener noreferrer"><Github size={16} aria-hidden /> GitHub</a> : <span className="text-sm text-ink-soft">{p.links.note ?? "Repository is private."}</span>}
                  {p.links.demo && <a className="btn bg-white" href={p.links.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} aria-hidden /> Live demo</a>}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
