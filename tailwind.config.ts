import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lav: { DEFAULT: "#F0E7F7", deep: "#E4D4F2", pale: "#F8F3FC" },
        ink: { DEFAULT: "#101010", soft: "#3b3545" },
        sun: { DEFAULT: "#FFE16A", deep: "#FFD23F" },
        lilac: { DEFAULT: "#CFAAFF", deep: "#A97CF0" },
      },
      fontFamily: {
        display: ['"Space Grotesk Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Plus Jakarta Sans Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        pop: "4px 4px 0 0 #101010",
        "pop-lg": "7px 7px 0 0 #101010",
        "pop-sm": "2px 2px 0 0 #101010",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0) rotate(var(--r,0deg))" }, "50%": { transform: "translateY(-10px) rotate(var(--r,0deg))" } },
        wiggle: { "0%,100%": { transform: "rotate(-4deg)" }, "50%": { transform: "rotate(4deg)" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        blink: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        wiggle: "wiggle 2.4s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        blink: "blink 1s steps(1) infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
