import { profile } from "@/data/profile";

export interface Repo {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  fork: boolean;
  url: string;
  pushedAt: string;
}
export interface GhData {
  repos: number;
  followers: number;
  stars: number;
  languages: { name: string; count: number }[];
  recent: Repo[];
  live: boolean;
  fetchedAt: string;
}

/** Snapshot collected during the repository audit (Nov 2026). Used if the API is rate-limited or offline. */
export const snapshot: GhData = {
  repos: 27,
  followers: 5,
  stars: 1,
  live: false,
  fetchedAt: "2026-11-26",
  languages: [
    { name: "HTML", count: 5 }, { name: "JavaScript", count: 4 }, { name: "Python", count: 4 }, { name: "TypeScript", count: 2 },
    { name: "CSS", count: 2 }, { name: "Jupyter Notebook", count: 2 }, { name: "Rust", count: 1 }, { name: "Kotlin", count: 1 },
  ],
  recent: [
    { name: "cog-tender-approve", description: "Tender management dashboard and RFP-first evaluation (SmartConcurrence)", language: "Python", stars: 0, fork: false, url: `${profile.github}/cog-tender-approve`, pushedAt: "2026-11-11" },
    { name: "DIC_SAMPLE01", description: "Stereo/2D Digital Image Correlation (DIC) viewer with SEM Challenge sample workflows", language: "Python", stars: 0, fork: false, url: `${profile.github}/DIC_SAMPLE01`, pushedAt: "2026-07-24" },
    { name: "MacMind", description: null, language: "Rust", stars: 1, fork: false, url: `${profile.github}/MacMind`, pushedAt: "2026-06-29" },
    { name: "ML_Part1", description: null, language: "Jupyter Notebook", stars: 0, fork: false, url: `${profile.github}/ML_Part1`, pushedAt: "2026-06-21" },
    { name: "BlockChain_Based_Fraud_Detection_System", description: null, language: "Kotlin", stars: 0, fork: false, url: `${profile.github}/BlockChain_Based_Fraud_Detection_System`, pushedAt: "2026-04-02" },
    { name: "tcp-chat-file-transfer", description: null, language: "Python", stars: 0, fork: false, url: `${profile.github}/tcp-chat-file-transfer`, pushedAt: "2026-04-01" },
  ],
};

const KEY = "gh-cache-v1";
const TTL = 60 * 60 * 1000;

export async function loadGithub(signal?: AbortSignal): Promise<GhData> {
  try {
    const cached = JSON.parse(localStorage.getItem(KEY) ?? "null");
    if (cached && Date.now() - cached.t < TTL) return cached.d as GhData;
  } catch { /* ignore */ }

  const base = `https://api.github.com/users/${profile.githubUser}`;
  const [u, r] = await Promise.all([
    fetch(base, { signal }).then((x) => { if (!x.ok) throw new Error(String(x.status)); return x.json(); }),
    fetch(`${base}/repos?per_page=100&sort=updated`, { signal }).then((x) => { if (!x.ok) throw new Error(String(x.status)); return x.json(); }),
  ]);
  const own = (r as any[]).filter((x) => !x.fork);
  const langs = new Map<string, number>();
  own.forEach((x) => x.language && langs.set(x.language, (langs.get(x.language) ?? 0) + 1));
  const data: GhData = {
    repos: u.public_repos,
    followers: u.followers,
    stars: own.reduce((s, x) => s + x.stargazers_count, 0),
    languages: [...langs].map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count).slice(0, 8),
    recent: own.slice(0, 6).map((x) => ({ name: x.name, description: x.description, language: x.language, stars: x.stargazers_count, fork: x.fork, url: x.html_url, pushedAt: x.pushed_at })),
    live: true,
    fetchedAt: new Date().toISOString(),
  };
  try { localStorage.setItem(KEY, JSON.stringify({ t: Date.now(), d: data })); } catch { /* ignore */ }
  return data;
}

export interface Contribs { total: number; weeks: { date: string; level: number; count: number }[][] }

/** Public, token-free contribution calendar (third-party mirror of GitHub's graph). Returns null on any failure. */
export async function loadContributions(signal?: AbortSignal): Promise<Contribs | null> {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${profile.githubUser}?y=last`, { signal });
    if (!res.ok) return null;
    const j = await res.json();
    const days: { date: string; count: number; level: number }[] = j.contributions;
    const weeks: Contribs["weeks"] = [];
    days.forEach((d, i) => {
      const dow = new Date(d.date + "T00:00:00").getDay();
      if (i === 0 || dow === 0) weeks.push([]);
      weeks[weeks.length - 1].push(d);
    });
    const total = days.reduce((s, d) => s + d.count, 0);
    return { total, weeks };
  } catch { return null; }
}
