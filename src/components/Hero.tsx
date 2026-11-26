import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, MousePointerClick } from "lucide-react";
import { profile } from "@/data/profile";
import { Arrow, Brackets, Cloud, DB, Hand, Neural, Robot, Squiggle, Star } from "./Doodles";
import Terminal from "./Terminal";

const lines = ["Zzz… press the button!", "Booting agent… 🧠", "Supervisor says: ship it.", "Tool call approved ✓", "Traces look clean.", "pgvector: 0 hallucinations (kidding)."];

export default function Hero() {
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);
  const [pressed, setPressed] = useState(false);
  const mood = n === 0 ? "think" : n % 3 === 0 ? "wow" : "happy";

  const press = () => {
    setN((x) => x + 1);
    setPressed(true);
    setTimeout(() => setPressed(false), 220);
  };

  return (
    <section id="home" aria-labelledby="hero-h" className="relative overflow-hidden pt-28 sm:pt-36">
      <Cloud className="absolute -left-10 top-24 hidden w-56 animate-float opacity-90 md:block" style={{ ["--r" as string]: "-4deg" }} />
      <Cloud className="absolute -right-12 top-56 hidden w-64 animate-float opacity-90 md:block" style={{ animationDelay: "-2s" }} />
      <Star className="absolute left-[8%] top-[52%] hidden w-10 animate-wiggle md:block" />
      <Star className="absolute right-[10%] top-32 w-8 animate-wiggle" fill="#CFAAFF" />

      <div className="wrap relative">
        <motion.p initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-xs font-bold shadow-pop-sm sm:text-sm">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#34c759]" aria-hidden /> Open to AI & Software Engineering roles
        </motion.p>

        <h1 id="hero-h" className="text-center font-display text-[clamp(2.6rem,9.2vw,8.2rem)] font-bold uppercase leading-[0.88] tracking-[-0.03em]">
          <motion.span className="block" initial={reduce ? false : { opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            Building <span className="relative inline-block"><span className="relative z-10">intelligent</span><span className="absolute inset-x-0 bottom-[8%] -z-0 h-[34%] -rotate-1 rounded bg-lilac" aria-hidden /></span>
          </motion.span>
          <motion.span className="block" initial={reduce ? false : { opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            systems<span className="text-lilac-deep">.</span>
          </motion.span>
          <motion.span className="block" initial={reduce ? false : { opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            Engineering <span className="scribble-underline">what's next.</span>
          </motion.span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-center text-base text-ink-soft sm:text-lg">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="btn bg-sun">View projects <ArrowDown size={16} aria-hidden /></a>
          <a href={profile.resume} download className="btn bg-white"><Download size={16} aria-hidden /> Download resume</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="btn bg-white !px-4"><Github size={18} aria-hidden /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="btn bg-white !px-4"><Linkedin size={18} aria-hidden /></a>
        </div>

        {/* Stage */}
        <div className="relative mx-auto mt-14 grid max-w-6xl items-end gap-6 lg:grid-cols-[1fr_minmax(320px,440px)_1fr]">
          <motion.div initial={reduce ? false : { opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="order-2 lg:order-1">
            <Terminal />
            <div className="card mt-5 hidden bg-white p-4 lg:block">
              <p className="font-display text-xs font-bold uppercase tracking-widest text-lilac-deep">Currently</p>
              <ul className="mt-2 space-y-1.5 text-sm font-medium">{profile.focus.map((f) => <li key={f} className="flex gap-2"><span aria-hidden>↳</span>{f}</li>)}</ul>
            </div>
          </motion.div>

          <div className="relative order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/4.4] w-full max-w-[440px] rounded-[2.5rem] border-2 border-ink bg-sun shadow-pop-lg">
              <div className="dots absolute inset-0 rounded-[2.5rem]" aria-hidden />
              <motion.div animate={pressed ? { rotate: [0, -3, 3, 0], scale: [1, 1.04, 1] } : {}} transition={{ duration: 0.3 }} className="absolute inset-x-[14%] top-[6%] animate-float">
                <Robot mood={mood} title="Hand-drawn illustration of a friendly AI agent robot" />
              </motion.div>
              <div className="absolute left-4 top-4 max-w-[60%] rounded-2xl rounded-tl-sm border-2 border-ink bg-white px-3 py-2 text-xs font-bold shadow-pop-sm" role="status" aria-live="polite" key={n}>{lines[n % lines.length]}</div>
              <DB className="absolute -left-5 bottom-8 w-16 animate-float" />
              <Neural className="absolute -right-6 top-[30%] w-24 animate-float" style={{ animationDelay: "-3s" }} />
              <Brackets className="absolute -right-2 bottom-4 w-20 animate-wiggle" />
              <button type="button" onClick={press} aria-label="Press the button to wake the robot" className="group absolute -bottom-7 left-1/2 flex -translate-x-1/2 items-end gap-2 rounded-full border-2 border-ink bg-lilac px-6 py-3 font-display text-sm font-bold shadow-pop transition-all hover:-translate-y-1 active:translate-y-[2px] active:shadow-none">
                <MousePointerClick size={16} aria-hidden /> Press me <span className="text-xs opacity-70">×{n}</span>
              </button>
              <Hand className="pointer-events-none absolute -bottom-20 left-[56%] w-14 -rotate-12 transition-transform group-hover:translate-y-1" />
            </div>
          </div>

          <motion.div initial={reduce ? false : { opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="order-3 hidden lg:block">
            <div className="card relative -rotate-2 bg-lilac p-5">
              <p className="font-display text-xs font-bold uppercase tracking-widest">Shipping</p>
              <p className="mt-2 font-display text-3xl font-bold leading-tight">Agents that can be traced, tested & trusted.</p>
              <Squiggle className="mt-3 w-28" />
            </div>
            <Arrow className="ml-6 mt-2 w-20 rotate-[20deg]" />
          </motion.div>
        </div>
      </div>
      <div className="h-24" />
    </section>
  );
}
