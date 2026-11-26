import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, MapPin } from "lucide-react";
import { experience, type Experience as Exp } from "@/data/experience";
import { Reveal, SectionHead, bg } from "./Ui";

function Card({ e, i }: { e: Exp; i: number }) {
  const [open, setOpen] = useState(i === 0);
  const reduce = useReducedMotion();
  const panel = `exp-${e.id}`;
  return (
    <Reveal delay={0.05} className="relative pl-10 sm:pl-16">
      <span className={`absolute left-0 top-8 grid h-9 w-9 place-items-center rounded-full border-2 border-ink font-display text-sm font-bold sm:left-2 ${e.current ? "bg-sun" : "bg-white"}`} aria-hidden>{i + 1}</span>
      <article className={`card overflow-hidden ${open ? bg[e.color] : "bg-white"} transition-colors`}>
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-display text-xs font-bold uppercase tracking-widest text-ink-soft">{e.product}</p>
              <h3 className="mt-1 font-display text-3xl font-bold leading-none sm:text-5xl">{e.company}</h3>
              <p className="mt-2 font-semibold">{e.role}</p>
            </div>
            <div className="text-right text-sm font-semibold">
              <p className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-white px-3 py-1">{e.period}{e.current && <span className="rounded-full bg-[#34c759] px-1.5 text-[10px] font-bold uppercase text-ink">now</span>}</p>
              <p className="mt-2 inline-flex items-center gap-1 text-ink-soft"><MapPin size={14} aria-hidden /> {e.location}</p>
            </div>
          </div>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed">{e.summary}</p>

          <div className="mt-5 flex flex-wrap gap-3">
            {e.impact.map((m) => (
              <div key={m.label} className="rounded-2xl border-2 border-ink bg-white px-4 py-2 shadow-pop-sm">
                <p className="font-display text-2xl font-bold leading-none">{m.value}</p>
                <p className="mt-1 text-xs font-semibold text-ink-soft">{m.label}</p>
              </div>
            ))}
          </div>

          <ul className="mt-6 grid gap-2 md:grid-cols-2">
            {e.contributions.map((c) => <li key={c} className="flex gap-2 text-[15px] leading-snug"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-ink" aria-hidden />{c}</li>)}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">{e.stack.map((s) => <span key={s} className="chip">{s}</span>)}</div>

          <button type="button" aria-expanded={open} aria-controls={panel} onClick={() => setOpen((o) => !o)} className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-2 font-display text-sm font-bold hover:bg-ink hover:text-white">
            {open ? "Hide" : "Read"} the engineering story <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div id={panel} initial={reduce ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden border-t-2 border-ink bg-white/70">
              <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-3">
                {e.story.map((s) => (
                  <div key={s.heading}><h4 className="font-display text-lg font-bold">{s.heading}</h4><p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{s.body}</p></div>
                ))}
              </div>
              {e.pipeline && (
                <div className="border-t-2 border-dashed border-ink px-6 pb-7 pt-5 sm:px-8">
                  <p className="mb-3 font-display text-xs font-bold uppercase tracking-widest">Pipeline</p>
                  <ol className="flex flex-wrap items-center gap-2">
                    {e.pipeline.map((p, k) => (
                      <li key={p} className="flex items-center gap-2"><span className="rounded-xl border-2 border-ink bg-white px-3 py-1.5 text-sm font-bold">{p}</span>{k < e.pipeline!.length - 1 && <span aria-hidden className="font-bold">→</span>}</li>
                    ))}
                  </ol>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-h" className="border-y-2 border-ink bg-white/40 py-24 sm:py-32">
      <div className="wrap">
        <SectionHead id="exp-h" eyebrow="02 · Experience" sub="Three internships, three production systems. Each one is a short case study — expand it for the engineering story.">
          Where I've shipped
        </SectionHead>
        <div className="relative space-y-8">
          <div className="absolute bottom-0 left-[17px] top-8 w-0.5 bg-ink sm:left-[25px]" aria-hidden />
          {experience.map((e, i) => <Card key={e.id} e={e} i={i} />)}
        </div>
      </div>
    </section>
  );
}
