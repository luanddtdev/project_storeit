import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"]
      },
      colors: {
        brand: {
          DEFAULT: "#FA7275"
        }
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".h1": {
          "@apply font-bold text-[46px] leading-[56px]": {}
        },
        ".body-1": {
          "@apply font-normal text-[16px] leading-[24px]": {}
        }
      })
    })
  ]
} satisfies Config