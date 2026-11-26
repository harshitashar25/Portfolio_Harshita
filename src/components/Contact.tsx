import { useState } from "react";
import { Check, Copy, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal } from "./Ui";
import { Arrow, Star, TerminalDoodle } from "./Doodles";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); } catch {
      const t = document.createElement("textarea"); t.value = profile.email; document.body.appendChild(t); t.select(); document.execCommand("copy"); t.remove();
    }
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" aria-labelledby="contact-h" className="wrap relative py-24 sm:py-32">
      <Reveal>
        <div className="card relative overflow-hidden bg-sun p-7 sm:p-14">
          <div className="dots absolute inset-0" aria-hidden />
          <Star className="absolute right-8 top-8 hidden w-14 animate-wiggle sm:block" fill="#CFAAFF" />
          <TerminalDoodle className="absolute bottom-8 right-8 hidden w-36 animate-float lg:block" />
          <div className="relative max-w-4xl">
            <span className="eyebrow">07 · Contact</span>
            <h2 id="contact-h" className="mt-5 font-display text-[clamp(2.4rem,7.5vw,6.5rem)] font-bold uppercase leading-[1] tracking-tight">
              Have a challenging problem? <span className="rounded bg-lilac px-2">Let's engineer</span> something.
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-medium">I'm looking for AI Engineering and Software Engineering opportunities — agentic systems, retrieval, evaluation and backend infrastructure. If that sounds like your team, say hello.</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}?subject=Hello%20Harshita`} className="btn bg-ink text-white"><Mail size={16} aria-hidden /> {profile.email}</a>
              <button type="button" onClick={copy} className="btn bg-white" aria-live="polite">{copied ? <><Check size={16} aria-hidden /> Copied!</> : <><Copy size={16} aria-hidden /> Copy email</>}</button>
            </div>
            <div className="mt-3 flex flex-wrap gap-3">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn bg-lilac"><Linkedin size={16} aria-hidden /> LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn bg-white"><Github size={16} aria-hidden /> GitHub</a>
              <a href={profile.resume} download className="btn bg-white"><Download size={16} aria-hidden /> Resume (PDF)</a>
            </div>
            <Arrow className="mt-6 hidden w-20 sm:block" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
