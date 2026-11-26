import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink py-8 text-white">
      <div className="wrap flex flex-col items-center justify-between gap-3 text-sm sm:flex-row">
        <p className="font-display font-bold">© {new Date().getFullYear()} {profile.name}<span className="text-sun"> ✦ </span>AI & Software Engineer</p>
        <p className="text-white/70">Designed and built by hand — static React, no backend.</p>
        <p><a className="underline underline-offset-4 hover:text-sun" href="#home">Back to top ↑</a></p>
      </div>
    </footer>
  );
}
