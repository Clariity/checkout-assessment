module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      theme: "var(--theme)",
      "theme-hover": "var(--theme-hover)",
      "theme-secondary": "var(--theme-secondary)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      tertiary: "var(--tertiary)",
      "fg-primary": "var(--fg-primary)",
      "fg-secondary": "var(--fg-secondary)",
      error: "#ee4242",
      success: "#539b3d",
      black: "#000000",
      white: "#ffffff",
    },
  },
  plugins: [],
};
