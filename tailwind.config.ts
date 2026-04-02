import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#B48C57",
        "on-primary": "#ffffff",
        "surface": "#fbf9f6",
        "surface-container": "#f5f3f0",
        "on-surface": "#1b1c1a",
        "on-surface-variant": "#4f453a",
        "outline-variant": "#d2c4b6",
        "footer-bg": "#1b1c1a"
      },
      fontFamily: {
        "headline": ['"Cabrito Flare"', "serif"],
        "body": ['"Poppins"', "sans-serif"],
        "label": ['"Poppins"', "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    forms,
    containerQueries
  ],
  content: []
} satisfies Partial<Config>
