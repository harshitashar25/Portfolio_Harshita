export interface Achievement {
  id: string;
  title: string;
  org: string;
  year: string;
  kind: "podium" | "scholar" | "finalist" | "cert";
  rank: string;
  size: "xl" | "lg" | "md";
}

export const achievements: Achievement[] = [
  { id: "reliance", title: "Reliance Foundation Undergraduate Scholar", org: "Selected among the top 5,000 of 58,000+ applicants", year: "2024", kind: "scholar", rank: "Top 5,000", size: "xl" },
  { id: "kodekurrent", title: "KodeKurrent", org: "IEEE RGIPT", year: "2025", kind: "podium", rank: "1st Runner-Up", size: "lg" },
  { id: "hackageek", title: "HackaGeek", org: "GeeksforGeeks", year: "2024", kind: "podium", rank: "1st Runner-Up", size: "lg" },
  { id: "devbhoomi", title: "Devbhoomi Cyber Hackathon 3.0", org: "Hackathon", year: "2025", kind: "podium", rank: "2nd Runner-Up", size: "md" },
  { id: "sphinx", title: "Sphinx Hackathon", org: "MNIT Jaipur", year: "2024", kind: "finalist", rank: "Top 10", size: "md" },
  { id: "dpb", title: "Dark Patterns Buster", org: "Government of India", year: "2024", kind: "finalist", rank: "Semi-Finalist", size: "md" },
  { id: "scrum", title: "Agile Scrum Master Certified", org: "Certification", year: "2026", kind: "cert", rank: "Certified", size: "md" },
];
