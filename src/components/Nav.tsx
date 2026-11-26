import { useEffect, useState } from "react";
import { Download, Menu, X, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  ["Home", "#home"], ["About", "#about"], ["Experience", "#experience"], ["Projects", "#projects"],
  ["Skills", "#skills"], ["Achievements", "#achievements"], ["Contact", "#contact"],
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const ids = links.map((l) => l[1].slice(1));
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive("#" + e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => { const el = document.getElementById(id); el && io.observe(el); });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-3 z-40 px-3 sm:top-5 sm:px-6">
      <nav aria-label="Primary" className="mx-auto flex max-w-[1180px] items-center justify-between gap-3 rounded-full border-2 border-ink bg-white py-2 pl-3 pr-2 shadow-pop">
        <a href="#home" aria-label="Harshita Sharma — home" className="flex items-center gap-2 font-display font-bold">
          <img src="/favicon.svg" alt="" width={36} height={36} className="h-9 w-9" />
          <span className="hidden sm:inline">Harshita<span className="text-lilac-deep">.</span></span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.slice(0, -1).map(([label, href]) => (
            <li key={href}>
              <a href={href} aria-current={active === href ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-colors hover:bg-lav ${active === href ? "bg-sun" : ""}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={profile.resume} download className="hidden items-center gap-1.5 rounded-full border-2 border-ink px-4 py-2 text-sm font-bold transition-colors hover:bg-sun md:inline-flex">
            <Download size={15} aria-hidden /> Resume
          </a>
          <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-lilac px-4 py-2 text-sm font-bold shadow-pop-sm transition-transform hover:-translate-y-0.5">
            <Mail size={15} aria-hidden /> <span>Let's talk</span>
          </a>
          <button type="button" className="grid h-10 w-10 place-items-center rounded-full border-2 border-ink lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="card mx-auto mt-3 max-w-[1180px] p-3 lg:hidden">
          <ul className="grid gap-1">
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)} className={`block rounded-2xl px-4 py-3 font-display text-lg font-bold ${active === href ? "bg-sun" : "hover:bg-lav"}`}>{label}</a>
              </li>
            ))}
            <li><a href={profile.resume} download className="block rounded-2xl px-4 py-3 font-display text-lg font-bold hover:bg-lav">Download resume</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
