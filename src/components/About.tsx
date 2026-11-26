import { GraduationCap, MapPin } from "lucide-react";
import { philosophy, profile, stats } from "@/data/profile";
import { Reveal, SectionHead } from "./Ui";
import { Star, Squiggle } from "./Doodles";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-h" className="wrap relative py-24 sm:py-32">
      <SectionHead id="about-h" eyebrow="01 · About">
        From writing apps to <span className="scribble-underline">engineering</span> intelligent systems
      </SectionHead>

      <div className="grid gap-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="card h-full p-7 sm:p-10">
            <p className="font-display text-2xl font-bold leading-snug sm:text-3xl">
              I started as a general software developer and kept getting pulled toward the hard part: making AI systems <em className="not-italic text-lilac-deep">reliable</em>.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{profile.summary}</p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Across three internships I've shipped Python/FastAPI and Node.js services, designed SQL schemas, built retrieval and ranking with embeddings, and put humans, validators and audit trails around LLM output.
              Outside work I build agents of my own — a supervisor-based workflow platform and a native macOS assistant that asks before it acts.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="flex gap-3 rounded-2xl border-2 border-ink bg-lav p-4"><GraduationCap className="mt-0.5 shrink-0" aria-hidden />
                <div><p className="font-display font-bold">{profile.education.institute}</p><p className="text-sm text-ink-soft">B.Tech + M.Tech, CSE · CGPA {profile.education.cgpa} · {profile.education.period}</p></div></div>
              <div className="flex gap-3 rounded-2xl border-2 border-ink bg-lav p-4"><MapPin className="mt-0.5 shrink-0" aria-hidden />
                <div><p className="font-display font-bold">{profile.location}</p><p className="text-sm text-ink-soft">Open to AI Engineering & Software Engineering roles</p></div></div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div className={`card h-full p-5 ${["bg-sun", "bg-lilac", "bg-white", "bg-sun"][i]} ${i % 2 ? "sm:translate-y-4" : ""}`}>
                <p className="font-display text-5xl font-bold tracking-tight">{s.value}</p>
                <p className="mt-2 text-sm font-semibold leading-snug">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="relative mt-16 grid gap-5 md:grid-cols-3">
        <Star className="absolute -top-8 right-6 hidden w-10 animate-wiggle md:block" />
        {philosophy.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <article className="h-full rounded-3xl border-2 border-dashed border-ink p-6">
              <span className="font-display text-sm font-bold text-lilac-deep">0{i + 1}</span>
              <h3 className="mt-1 font-display text-xl font-bold leading-tight">{p.title}</h3>
              <p className="mt-2 text-ink-soft">{p.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Squiggle className="mx-auto mt-12 w-40" />
    </section>
  );
}
