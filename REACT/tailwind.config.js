/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-container": "#e0e5cc",
        "secondary-fixed": "#e0e5cc",
        "on-tertiary-fixed-variant": "#643f00",
        "on-secondary-container": "#626753",
        "background": "#fbf8ff",
        "primary-fixed": "#ffdcbc",
        "surface-dim": "#d7d8f4",
        "on-primary": "#ffffff",
        "surface-container": "#edecff",
        "on-error": "#ffffff",
        "on-tertiary-container": "#643e00",
        "error-container": "#ffdad6",
        "inverse-on-surface": "#f1efff",
        "surface": "#fbf8ff",
        "primary-container": "#ff9f1c",
        "on-background": "#181a2e",
        "secondary": "#5c614d",
        "surface-variant": "#e0e0fc",
        primary: "#895100",
        "surface-bright": "#fbf8ff",
        "outline-variant": "#dac2ae",
        "on-secondary-fixed": "#191d0e",
        "surface-container-high": "#e6e6ff",
        "surface-tint": "#895100",
        "on-primary-fixed-variant": "#683d00",
        outline: "#877462",
        "on-error-container": "#93000a",
        "surface-container-low": "#f4f2ff",
        "tertiary-fixed-dim": "#ffb95a",
        "primary-fixed-dim": "#ffb86b",
        "on-surface-variant": "#544434",
        "on-secondary-fixed-variant": "#444937",
        "on-primary-fixed": "#2c1700",
        "on-secondary": "#ffffff",
        "surface-container-lowest": "#ffffff",
        "tertiary-container": "#f0a63b",
        "secondary-fixed-dim": "#c4c9b1",
        "on-primary-container": "#683c00",
        "inverse-primary": "#ffb86b",
        "on-surface": "#181a2e",
        tertiary: "#845400",
        error: "#ba1a1a",
        "on-tertiary-fixed": "#2a1800",
        "on-tertiary": "#ffffff",
        "surface-container-highest": "#e0e0fc",
        "inverse-surface": "#2d2f44",
        "tertiary-fixed": "#ffddb6"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
        card: "24px"
      },
      spacing: {
        "stack-lg": "32px",
        base: "4px",
        "margin-mobile": "20px",
        "stack-md": "16px",
        "stack-sm": "8px",
        "margin-desktop": "48px",
        gutter: "16px"
      },
      fontFamily: {
        "headline-md": ["Noto Serif", "serif"],
        "body-lg": ["Plus Jakarta Sans", "sans-serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"],
        "label-md": ["Plus Jakarta Sans", "sans-serif"],
        "display-lg-mobile": ["Noto Serif", "serif"],
        "display-lg": ["Noto Serif", "serif"],
        "title-lg": ["Plus Jakarta Sans", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "body-lg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-md": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "500" }],
        "display-lg-mobile": ["32px", { lineHeight: "38px", fontWeight: "700" }],
        "display-lg": ["40px", { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "title-lg": ["20px", { lineHeight: "28px", fontWeight: "600" }]
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0,0,0,0.03)',
        'glass': '0 8px 24px rgba(43,45,66,0.08)'
      }
    },
  },
  plugins: [],
}
