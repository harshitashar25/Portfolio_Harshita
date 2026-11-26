import type { CSSProperties, ReactNode } from "react";
import type { Art } from "@/data/projects";

const S = { stroke: "#101010", strokeWidth: 3.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

interface P { className?: string; style?: CSSProperties; title?: string }
const wrap = (vb: string, children: ReactNode, { className, style, title }: P) => (
  <svg viewBox={vb} className={className} style={style} role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true} fill="none">
    {children}
  </svg>
);

export const Cloud = (p: P) =>
  wrap("0 0 200 110", <path d="M40 98c-22 0-34-14-30-30 3-13 16-19 28-16 2-20 22-36 44-33 17 2 29 13 33 26 22-8 44 5 42 26-1 16-15 27-33 27z" fill="#CFAAFF" {...S} />, p);

export const Star = (p: P & { fill?: string }) =>
  wrap("0 0 60 60", <path d="M30 4c3 13 5 18 8 20 4 2 10 3 18 6-8 3-14 4-18 7-3 2-5 7-8 19-3-12-5-17-8-19-4-3-10-4-18-7 8-3 14-3 18-6 3-3 5-8 8-20z" fill={p.fill ?? "#FFE16A"} {...S} />, p);

export const Squiggle = (p: P) =>
  wrap("0 0 160 30", <path d="M6 18c10-16 18-16 24 0s14 16 24 0 18-16 24 0 14 16 24 0 18-16 24 0" {...S} />, p);

export const Arrow = (p: P) =>
  wrap("0 0 120 80", <><path d="M8 62C30 20 70 14 108 30" {...S} /><path d="M86 14l24 17-26 14" {...S} /></>, p);

export const DB = (p: P) =>
  wrap("0 0 90 110", <>
    <path d="M10 22v66c0 9 15 16 35 16s35-7 35-16V22" fill="#fff" {...S} />
    <ellipse cx="45" cy="22" rx="35" ry="14" fill="#FFE16A" {...S} />
    <path d="M10 49c0 9 15 16 35 16s35-7 35-16M10 72c0 9 15 16 35 16s35-7 35-16" {...S} />
  </>, p);

export const Brackets = (p: P) =>
  wrap("0 0 120 70", <><path d="M34 10L8 35l26 25M86 10l26 25-26 25" {...S} strokeWidth={6} /><path d="M70 6L50 64" {...S} stroke="#A97CF0" strokeWidth={6} /></>, p);

export const Neural = (p: P) =>
  wrap("0 0 140 110", <>
    <g {...S} strokeWidth={2.4}>
      <path d="M22 25L70 18M22 25L70 55M22 25L70 92M22 85L70 18M22 85L70 55M22 85L70 92M70 18L118 55M70 55L118 55M70 92L118 55" />
    </g>
    {[[22, 25], [22, 85], [70, 18], [70, 55], [70, 92], [118, 55]].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="10" fill={i % 2 ? "#CFAAFF" : "#FFE16A"} {...S} />
    ))}
  </>, p);

export const TerminalDoodle = (p: P) =>
  wrap("0 0 140 100", <>
    <rect x="6" y="8" width="128" height="84" rx="12" fill="#fff" {...S} />
    <path d="M6 30h128" {...S} />
    <circle cx="20" cy="19" r="3.5" fill="#FF8A8A" stroke="#101010" strokeWidth="2" />
    <circle cx="33" cy="19" r="3.5" fill="#FFE16A" stroke="#101010" strokeWidth="2" />
    <circle cx="46" cy="19" r="3.5" fill="#8AE6A5" stroke="#101010" strokeWidth="2" />
    <path d="M22 48l14 10-14 10M46 70h30" {...S} />
  </>, p);

export const Hand = (p: P) =>
  wrap("0 0 90 120", <>
    <path d="M30 14c0-6 10-6 10 0v36c3-8 14-6 14 2 4-6 14-4 14 4 4-4 12-2 12 8v18c0 18-12 30-30 30h-6c-14 0-22-8-28-20L8 66c-3-8 6-12 12-6l10 12z" fill="#fff" {...S} />
    <path d="M40 50v16M54 52v14M68 56v12" {...S} strokeWidth={2.4} />
  </>, p);

export const Robot = ({ mood = "happy", ...p }: P & { mood?: "happy" | "wow" | "think" }) =>
  wrap("0 0 320 360", <>
    {/* antenna */}
    <path d="M160 52V22" {...S} strokeWidth={5} />
    <circle cx="160" cy="16" r="12" fill="#CFAAFF" {...S} strokeWidth={4} />
    {/* ears */}
    <rect x="40" y="108" width="26" height="62" rx="12" fill="#CFAAFF" {...S} strokeWidth={4} />
    <rect x="254" y="108" width="26" height="62" rx="12" fill="#CFAAFF" {...S} strokeWidth={4} />
    {/* head */}
    <path d="M70 62c40-8 140-8 180 0 14 3 18 12 18 28v84c0 14-6 22-18 24-40 7-140 7-180 0-12-2-18-10-18-24V90c0-16 4-25 18-28z" fill="#fff" {...S} strokeWidth={5} />
    {/* screen face */}
    <path d="M84 88c28-5 124-5 152 0 8 2 12 8 12 16v52c0 8-4 14-12 16-28 5-124 5-152 0-8-2-12-8-12-16v-52c0-8 4-14 12-16z" fill="#FFE16A" {...S} strokeWidth={4} />
    {mood === "wow" ? (<><circle cx="124" cy="124" r="13" fill="#101010" /><circle cx="196" cy="124" r="13" fill="#101010" /><ellipse cx="160" cy="158" rx="12" ry="14" fill="#101010" /></>) : mood === "think" ? (<><path d="M108 122h30M184 122h30" {...S} strokeWidth={6} /><path d="M140 158h40" {...S} strokeWidth={5} /></>) : (<><path d="M110 128c6-14 20-14 26 0M184 128c6-14 20-14 26 0" {...S} strokeWidth={6} /><path d="M132 150c14 18 42 18 56 0" {...S} strokeWidth={5} /></>)}
    <circle cx="102" cy="150" r="7" fill="#FF9EC4" opacity=".8" /><circle cx="218" cy="150" r="7" fill="#FF9EC4" opacity=".8" />
    {/* neck + body */}
    <path d="M140 198v16M180 198v16" {...S} strokeWidth={5} />
    <path d="M86 222c46-8 102-8 148 0 12 3 18 12 18 26v66c0 12-8 20-18 22-46 7-102 7-148 0-10-2-18-10-18-22v-66c0-14 6-23 18-26z" fill="#CFAAFF" {...S} strokeWidth={5} />
    <rect x="124" y="250" width="72" height="44" rx="12" fill="#fff" {...S} strokeWidth={4} />
    <path d="M138 272h12l6-10 8 20 6-10h6" {...S} strokeWidth={3.4} />
    {/* arms */}
    <path d="M86 244c-26 4-42 22-44 50" {...S} strokeWidth={6} />
    <circle cx="42" cy="298" r="13" fill="#fff" {...S} strokeWidth={4} />
    <path d="M234 244c26 4 42 22 44 50" {...S} strokeWidth={6} />
    <circle cx="278" cy="298" r="13" fill="#fff" {...S} strokeWidth={4} />
    {/* legs */}
    <path d="M128 336v14M192 336v14" {...S} strokeWidth={6} />
    <path d="M108 354h38M174 354h38" {...S} strokeWidth={6} />
  </>, p);

/** Small illustrated tile used on each project card and case-study header. */
export function ProjectArt({ art, className }: { art: Art; className?: string }) {
  const c = className ?? "h-full w-full";
  switch (art) {
    case "agent":
      return wrap("0 0 300 200", <>
        <g {...S} strokeWidth={2.6}><path d="M150 52L70 120M150 52L150 130M150 52L230 120M70 120L150 130M230 120L150 130" strokeDasharray="2 7" /></g>
        <rect x="120" y="22" width="60" height="44" rx="14" fill="#fff" {...S} /><circle cx="140" cy="44" r="4" fill="#101010" /><circle cx="160" cy="44" r="4" fill="#101010" />
        {[[70, 120], [150, 134], [230, 120]].map(([x, y], i) => <g key={i}><rect x={x - 28} y={y - 18} width="56" height="38" rx="12" fill={["#CFAAFF", "#fff", "#CFAAFF"][i]} {...S} /><path d={`M${x - 10} ${y + 2}h20`} {...S} /></g>)}
        <path d="M60 176c30-10 50 10 80 0s50-10 100 0" {...S} />
      </>, { className: c });
    case "mac":
      return wrap("0 0 300 200", <>
        <rect x="46" y="22" width="208" height="130" rx="16" fill="#fff" {...S} /><path d="M46 48h208" {...S} />
        <circle cx="64" cy="35" r="4" fill="#FF8A8A" stroke="#101010" strokeWidth="2" /><circle cx="78" cy="35" r="4" fill="#FFE16A" stroke="#101010" strokeWidth="2" /><circle cx="92" cy="35" r="4" fill="#8AE6A5" stroke="#101010" strokeWidth="2" />
        <rect x="70" y="66" width="120" height="26" rx="13" fill="#FFE16A" {...S} /><path d="M82 79h60" {...S} />
        <rect x="110" y="104" width="120" height="30" rx="15" fill="#CFAAFF" {...S} /><path d="M124 119l8 8 14-16" {...S} />
        <path d="M100 178h100" {...S} strokeWidth={5} />
      </>, { className: c });
    case "docs":
      return wrap("0 0 300 200", <>
        <path d="M70 30h90l30 30v110H70z" fill="#fff" {...S} /><path d="M160 30v30h30" {...S} />
        <path d="M88 84h70M88 104h70M88 124h44" {...S} />
        <rect x="150" y="116" width="80" height="50" rx="12" fill="#FFE16A" {...S} /><path d="M166 142l12 12 24-26" {...S} />
        <circle cx="236" cy="52" r="22" fill="#CFAAFF" {...S} /><path d="M228 52l6 6 10-12" {...S} />
      </>, { className: c });
    case "voice":
      return wrap("0 0 300 200", <>
        <rect x="124" y="26" width="52" height="86" rx="26" fill="#fff" {...S} /><path d="M100 96c0 34 22 50 50 50s50-16 50-50M150 146v28M118 176h64" {...S} />
        <path d="M54 80v36M72 62v72M228 62v72M246 80v36" {...S} strokeWidth={5} stroke="#A97CF0" />
      </>, { className: c });
    case "chat":
      return wrap("0 0 300 200", <>
        <path d="M50 34h130c10 0 16 6 16 16v44c0 10-6 16-16 16h-70l-30 24v-24H50c-10 0-16-6-16-16V50c0-10 6-16 16-16z" fill="#fff" {...S} /><path d="M56 64h110M56 82h70" {...S} />
        <path d="M130 120h120c10 0 16 6 16 16v28c0 10-6 16-16 16h-14v22l-28-22h-78c-10 0-16-6-16-16v-28c0-10 6-16 16-16z" fill="#FFE16A" {...S} />
      </>, { className: c });
    case "dic":
      return wrap("0 0 300 200", <>
        <rect x="40" y="30" width="100" height="100" rx="12" fill="#fff" {...S} /><rect x="160" y="30" width="100" height="100" rx="12" fill="#fff" {...S} />
        {Array.from({ length: 14 }).map((_, i) => <circle key={i} cx={52 + (i * 37) % 80} cy={44 + (i * 23) % 76} r="4" fill={i % 3 ? "#101010" : "#A97CF0"} />)}
        {Array.from({ length: 14 }).map((_, i) => <circle key={i} cx={176 + (i * 37) % 80 + 4} cy={44 + (i * 23) % 76 + 3} r="4" fill={i % 3 ? "#101010" : "#A97CF0"} />)}
        <path d="M60 168c40-30 140-30 180 0" fill="#FFE16A" {...S} />
      </>, { className: c });
    case "chain":
      return wrap("0 0 300 200", <>
        {[60, 150, 240].map((x, i) => <g key={x}><rect x={x - 32} y="60" width="64" height="64" rx="14" fill={["#fff", "#FFE16A", "#CFAAFF"][i]} {...S} /><path d={`M${x - 14} 84h28M${x - 14} 100h18`} {...S} /></g>)}
        <path d="M94 92h24M184 92h24" {...S} strokeWidth={6} /><path d="M100 160c30 20 70 20 100 0" {...S} />
      </>, { className: c });
    default:
      return wrap("0 0 300 200", <>
        <rect x="30" y="50" width="90" height="90" rx="16" fill="#fff" {...S} /><rect x="180" y="50" width="90" height="90" rx="16" fill="#CFAAFF" {...S} />
        <path d="M120 95h60M164 80l16 15-16 15M136 110l-16-15 16-15" {...S} /><path d="M50 80h50M50 100h30M200 80h50M200 100h30" {...S} />
      </>, { className: c });
  }
}
