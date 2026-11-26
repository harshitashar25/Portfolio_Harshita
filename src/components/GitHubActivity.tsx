import { useEffect, useState } from "react";
import { GitFork, Github, Star as StarIcon, Users, BookMarked } from "lucide-react";
import { loadContributions, loadGithub, snapshot, type Contribs, type GhData } from "@/lib/github";
import { profile } from "@/data/profile";
import { Reveal, SectionHead } from "./Ui";

const shade = ["bg-ink/10", "bg-lilac/60", "bg-lilac-deep", "bg-sun-deep", "bg-ink"];
const fmt = (d: string) => new Date(d).toLocaleDateString("en", { month: "short", year: "numeric" });

export default function GitHubActivity() {
  const [data, setData] = useState<GhData>(snapshot);
  const [state, setState] = useState<"loading" | "live" | "fallback">("loading");
  const [cal, setCal] = useState<Contribs | null>(null);

  useEffect(() => {
    const ac = new AbortController();
    loadGithub(ac.signal).then((d) => { setData(d); setState("live"); }).catch(() => { if (!ac.signal.aborted) setState("fallback"); });
    loadContributions(ac.signal).then(setCal);
    return () => ac.abort();
  }, []);

  const maxLang = Math.max(...data.languages.map((l) => l.count), 1);
  const nums = [
    { icon: BookMarked, v: data.repos, l: "public repos" }, { icon: StarIcon, v: data.stars, l: "stars" }, { icon: Users, v: data.followers, l: "followers" },
  ];

  return (
    <section id="github" aria-labelledby="gh-h" className="border-y-2 border-ink bg-sun py-24 sm:py-32">
      <div className="wrap">
        <SectionHead id="gh-h" eyebrow="06 · GitHub" sub={state === "live" ? "Live from the public GitHub API." : state === "loading" ? "Fetching live data…" : `GitHub's API wasn't reachable — showing a snapshot from ${snapshot.fetchedAt}.`}>
          Open <span className="rounded bg-white px-2">source</span> trail
        </SectionHead>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="card grid h-full grid-cols-3 gap-3 bg-white p-5">
              {nums.map(({ icon: I, v, l }) => (
                <div key={l} className="rounded-2xl border-2 border-ink bg-lav p-3 text-center"><I className="mx-auto" size={20} aria-hidden /><p className="mt-1 font-display text-3xl font-bold">{v}</p><p className="text-xs font-semibold">{l}</p></div>
              ))}
              <div className="col-span-3 mt-2">
                <p className="font-display text-xs font-bold uppercase tracking-widest">Languages across my repos</p>
                <ul className="mt-3 space-y-2">
                  {data.languages.slice(0, 6).map((l) => (
                    <li key={l.name} className="grid grid-cols-[110px_1fr_20px] items-center gap-2 text-sm font-semibold">
                      <span className="truncate">{l.name}</span>
                      <span className="h-3 rounded-full border-2 border-ink bg-white"><span className="block h-full rounded-full bg-lilac" style={{ width: `${(l.count / maxLang) * 100}%` }} /></span>
                      <span className="text-right text-ink-soft">{l.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.08}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {data.recent.map((r) => (
                <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="card block min-w-0 bg-white p-4 transition-all hover:-translate-y-1 hover:shadow-pop-lg">
                  <p className="flex min-w-0 items-center gap-2 font-display font-bold"><Github size={16} className="shrink-0" aria-hidden /><span className="min-w-0 truncate">{r.name}</span></p>
                  <p className="mt-1 line-clamp-2 min-h-[2.5rem] text-sm text-ink-soft">{r.description ?? "No description yet."}</p>
                  <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold">
                    {r.language && <span className="chip !py-0.5">{r.language}</span>}
                    <span className="inline-flex items-center gap-1"><StarIcon size={12} aria-hidden /> {r.stars}</span>
                    <span className="ml-auto inline-flex items-center gap-1 text-ink-soft"><GitFork size={12} aria-hidden /> updated {fmt(r.pushedAt)}</span>
                  </p>
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {cal && (
          <Reveal className="mt-5">
            <div className="card bg-white p-5">
              <p className="font-display text-sm font-bold">{cal.total} contributions in the last year</p>
              <div className="hide-scroll mt-3 overflow-x-auto" role="img" aria-label={`Contribution calendar: ${cal.total} contributions in the last year`}>
                <div className="flex w-max gap-[3px]">
                  {cal.weeks.map((w, i) => <div key={i} className="flex flex-col gap-[3px]">{w.map((d) => <span key={d.date} title={`${d.count} on ${d.date}`} className={`h-[11px] w-[11px] rounded-[3px] ${shade[d.level]}`} />)}</div>)}
                </div>
              </div>
            </div>
          </Reveal>
        )}

        <p className="mt-6 text-sm font-semibold">
          <a className="underline decoration-2 underline-offset-4" href={profile.github} target="_blank" rel="noopener noreferrer">View the full profile on GitHub ↗</a>
        </p>
      </div>
    </section>
  );
}
