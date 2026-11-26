import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Lock } from "lucide-react";
import { categories, labNotes, projects, type Category, type Project } from "@/data/projects";
import { ProjectArt, Star } from "./Doodles";
import CaseStudy from "./CaseStudy";
import { Reveal, SectionHead, bg } from "./Ui";

function Actions({ p, open }: { p: Project; open: () => void }) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-2">
      <button type="button" onClick={open} className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-ink px-4 py-2 font-display text-sm font-bold text-white transition-transform hover:-translate-y-0.5">
        Read case study <ArrowUpRight size={15} aria-hidden />
      </button>
      {p.links.github ? (
        <a href={p.links.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} on GitHub`} className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-white px-4 py-2 font-display text-sm font-bold hover:bg-sun"><Github size={15} aria-hidden /> Code</a>
      ) : (
        <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-dashed border-ink px-3 py-2 text-xs font-bold"><Lock size={13} aria-hidden /> Source private</span>
      )}
      {p.links.demo && <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-ink bg-lilac px-4 py-2 font-display text-sm font-bold">Live demo</a>}
    </div>
  );
}

function Featured({ p, flip, open }: { p: Project; flip: boolean; open: () => void }) {
  return (
    <Reveal>
      <article className={`card grid overflow-hidden ${bg[p.color]} md:grid-cols-2 ${flip ? "" : ""}`}>
        <div className={`flex flex-col justify-center p-7 sm:p-10 ${flip ? "md:order-2" : ""}`}>
          <p className="font-display text-xs font-bold uppercase tracking-widest">Featured · {p.year} · {p.status}</p>
          <h3 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight sm:text-7xl">{p.title}</h3>
          <p className="mt-3 text-lg font-semibold leading-snug">{p.subtitle}</p>
          <p className="mt-3 leading-relaxed">{p.summary}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">{p.stack.slice(0, 7).map((s) => <span key={s} className="chip">{s}</span>)}</div>
          <Actions p={p} open={open} />
        </div>
        <button type="button" onClick={open} aria-label={`Open ${p.title} case study`} className={`group relative grid min-h-[260px] place-items-center border-t-2 border-ink bg-white/60 p-6 md:border-t-0 ${flip ? "md:order-1 md:border-r-2" : "md:border-l-2"} border-ink`}>
          <div className="dots absolute inset-0" aria-hidden />
          <ProjectArt art={p.art} className="relative w-full max-w-sm transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2" />
          <Star className="absolute right-6 top-6 w-9 animate-wiggle" />
        </button>
      </article>
    </Reveal>
  );
}

function Tile({ p, open }: { p: Project; open: () => void }) {
  return (
    <motion.article layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.25 }}
      className="card group flex flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-pop-lg">
      <button type="button" onClick={open} aria-label={`Open ${p.title} case study`} className={`relative block h-44 border-b-2 border-ink ${bg[p.color]} p-4`}>
        <ProjectArt art={p.art} className="h-full w-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2" />
      </button>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-ink-soft">{p.year} · {p.status}</p>
        <h3 className="mt-1 font-display text-2xl font-bold leading-tight">{p.title}</h3>
        <p className="mt-1.5 flex-1 text-[15px] leading-snug text-ink-soft">{p.subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">{p.stack.slice(0, 4).map((s) => <span key={s} className="chip !px-2.5 !py-0.5">{s}</span>)}</div>
        <Actions p={p} open={open} />
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const [current, setCurrent] = useState<Project | null>(null);
  const reduce = useReducedMotion();

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const list = useMemo(() => (filter === "All" ? rest : projects.filter((p) => p.categories.includes(filter))), [filter, rest]);

  // deep links: #project/macmind
  useEffect(() => {
    const sync = () => {
      const m = location.hash.match(/^#project\/(.+)$/);
      setCurrent(m ? projects.find((p) => p.id === m[1]) ?? null : null);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  const open = (p: Project) => { history.pushState(null, "", `#project/${p.id}`); setCurrent(p); };
  const close = () => { setCurrent(null); if (location.hash.startsWith("#project/")) history.replaceState(null, "", "#projects"); };

  return (
    <section id="projects" aria-labelledby="proj-h" className="wrap py-24 sm:py-32">
      <SectionHead id="proj-h" eyebrow="03 · Projects Lab" sub="Curated from my GitHub and resume: two flagship systems first, then everything else filterable. Each has a full case study.">
        The <span className="scribble-underline">lab</span>
      </SectionHead>

      <div className="space-y-8">{featured.map((p, i) => <Featured key={p.id} p={p} flip={i % 2 === 1} open={() => open(p)} />)}</div>

      <div className="mt-20">
        <div role="group" aria-label="Filter projects by category" className="hide-scroll -mx-5 flex gap-2 overflow-x-auto px-5 pb-3 sm:mx-0 sm:flex-wrap sm:px-0">
          {(["All", ...categories] as const).map((c) => (
            <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)}
              className={`shrink-0 rounded-full border-2 border-ink px-4 py-2 font-display text-sm font-bold transition-all ${filter === c ? "bg-ink text-white shadow-none" : "bg-white shadow-pop-sm hover:-translate-y-0.5"}`}>
              {c}
            </button>
          ))}
        </div>
        <p className="mt-3 text-sm font-semibold text-ink-soft" aria-live="polite">{filter === "All" ? `${rest.length} more projects` : `${list.length} project${list.length === 1 ? "" : "s"} in ${filter}`}</p>

        <LayoutGroup>
          <motion.div layout={!reduce} className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>{list.map((p) => <Tile key={p.id} p={p} open={() => open(p)} />)}</AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>

      <Reveal className="mt-16">
        <div className="rounded-3xl border-2 border-dashed border-ink p-6">
          <h3 className="font-display text-xl font-bold">Lab notes — earlier & smaller repos</h3>
          <p className="mt-1 text-sm text-ink-soft">The rest of my public GitHub: coursework, experiments and early learning projects. Not every repo is a finished product, so I haven't dressed them up.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {labNotes.map((n) => <a key={n.name} href={`https://github.com/harshitashar25/${n.name}`} target="_blank" rel="noopener noreferrer" className="chip hover:bg-sun">{n.name} <span className="ml-1.5 text-ink-soft">{n.lang}</span></a>)}
          </div>
        </div>
      </Reveal>

      <CaseStudy project={current} onClose={close} />
    </section>
  );
}
