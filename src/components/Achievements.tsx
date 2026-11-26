import { Award, Medal, Rocket, Trophy, type LucideIcon } from "lucide-react";
import { achievements, type Achievement } from "@/data/achievements";
import { Reveal, SectionHead } from "./Ui";
import { Star } from "./Doodles";

const icon: Record<Achievement["kind"], LucideIcon> = { podium: Trophy, scholar: Rocket, finalist: Medal, cert: Award };
const tone: Record<Achievement["kind"], string> = { podium: "bg-sun", scholar: "bg-lilac", finalist: "bg-white", cert: "bg-lav-pale" };

export default function Achievements() {
  const [hero, ...rest] = achievements;
  const Hi = icon[hero.kind];
  return (
    <section id="achievements" aria-labelledby="ach-h" className="wrap py-24 sm:py-32">
      <SectionHead id="ach-h" eyebrow="05 · Achievements">Podiums, <span className="scribble-underline">scholarships</span> & stamps</SectionHead>

      <div className="grid gap-5 md:grid-cols-6">
        <Reveal className="md:col-span-6 lg:col-span-3 lg:row-span-2">
          <article className="card relative h-full overflow-hidden bg-lilac p-8 sm:p-10">
            <Star className="absolute right-6 top-6 w-14 animate-wiggle" />
            <Hi size={44} aria-hidden />
            <p className="mt-6 font-display text-[clamp(4rem,10vw,7rem)] font-bold leading-[0.85]">{hero.rank}</p>
            <p className="mt-1 font-display text-sm font-bold uppercase tracking-widest">of 58,000+ applicants · {hero.year}</p>
            <h3 className="mt-6 font-display text-3xl font-bold leading-tight">{hero.title}</h3>
            <p className="mt-2 font-medium">{hero.org}</p>
          </article>
        </Reveal>

        {rest.map((a, i) => {
          const I = icon[a.kind];
          return (
            <Reveal key={a.id} delay={i * 0.06} className={i < 2 ? "md:col-span-3 lg:col-span-3" : "md:col-span-2 lg:col-span-2"}>
              <article className={`card group h-full p-6 transition-transform hover:-rotate-1 hover:-translate-y-1 ${tone[a.kind]}`}>
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-ink bg-white"><I size={24} aria-hidden /></span>
                  <span className="rounded-full border-2 border-ink bg-white px-3 py-1 font-display text-xs font-bold">{a.year}</span>
                </div>
                <p className="mt-5 font-display text-3xl font-bold leading-none">{a.rank}</p>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug">{a.title}</h3>
                <p className="mt-1 text-sm font-medium text-ink-soft">{a.org}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
