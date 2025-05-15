import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        "el-messiri": ["El_Messiri"],
        poppins: ["Poppins"],
        poppinsMedium: ["Poppins_Medium"],
      },
      colors: {
        primary: "#CB2C70",
        "primary-light": "#E38CB1",
        "primary-lightest": "#FCF3F7",
        "primary-dark": "#C2185B",
        secondary: "#333333",
        "secondary-light": "#4F4F4F",
        "secondary-dark": "#1A1A1A",
        LabelBlack: "#101010",
        inputBorder: "#B2B2B2",
        Blue100: "#2174F0",
        Black0: "#E8EAEC",
        Black30: "#A4ACB2",
        Black40: "#8D989F",
        Black: "#77838C",
        Black60: "#606F79",
        Black70: "#495A66",
        Black80: "#324552",
        Black90: "#1C313F",
        Black100: "#051C2C",
        Gray2: "#2C2C2E",
        Gray50: "#FAFAFA",
        Gray200: "#EDF2F7",
        Gray300: "#E2E8F0",
        Gray600: "#718096",
        Gray700: "#4A5568",
        Gray800: "#2D3748",
        Gray900: "#1A202C",
        GraySecondary: "#898F8F",
        successDark: "#4AAE8C",
        successLight: "#ECFFF5",
        warningDark: "#D46A51",
        warningLight: "#FFEDE3",
        dangerDark: "#CF4655",
        dangerLight: "#FFE6E4",
        borderSecondary: "#DDDDDD",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      boxShadow: {
        card: "0px 4.8px 4.8px 0px #00000040",
        "review-card": "0px 4.8px 16.8px 0px #00000026",
        search: "0px 3px 8px -1px #3232470D",
        "deal-card": "0px 4.8px 16.8px 0px #00000026"
      },
      backgroundImage: {
        "review-bg": "url('/images/review-background.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
