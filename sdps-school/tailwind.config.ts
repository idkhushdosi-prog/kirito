import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e3a8a",
          light: "#3b82f6",
          dark: "#0f172a",
        },
        accent: {
          DEFAULT: "#f59e0b",
          light: "#fbbf24",
        },
        success: {
          DEFAULT: "#10b981",
        },
        background: {
          DEFAULT: "#ffffff",
          light: "#f8fafc",
        },
        text: {
          primary: "#1f2937",
          secondary: "#64748b",
        },
        border: {
          DEFAULT: "#e2e8f0",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "Segoe UI", "Roboto", "sans-serif"],
        body: ["var(--font-inter)", "Segoe UI", "Roboto", "sans-serif"],
      },
      fontSize: {
        "h1": ["clamp(2rem, 5vw, 3.5rem)", { lineHeight: "1.2", letterSpacing: "-0.025em" }],
        "h2": ["clamp(1.5rem, 4vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "h3": ["clamp(1.25rem, 3vw, 2rem)", { lineHeight: "1.3" }],
        "body": ["clamp(0.875rem, 2vw, 1.125rem)", { lineHeight: "1.6" }],
      },
      spacing: {
        "xs": "0.25rem",
        "sm": "0.5rem",
        "md": "1rem",
        "lg": "1.5rem",
        "xl": "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
      },
      borderRadius: {
        "none": "0px",
        "sm": "4px",
        "md": "8px",
        "lg": "12px",
        "full": "9999px",
      },
      boxShadow: {
        "sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "md": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        "lg": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        "xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, rgba(30,58,138,0.95) 0%, rgba(15,23,42,0.95) 100%)",
        "cta-gradient": "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
        "card-hover": "linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(16,185,129,0.1) 100%)",
      },
      transitionTimingFunction: {
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
