export default {
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      colors: {
        shell: "#f4efe7",
        ink: "#171717",
        mist: "#f8f7f4",
        brand: {
          50: "#f7f4ef",
          100: "#ece2d3",
          200: "#ddc7a8",
          300: "#cea77b",
          400: "#c08b58",
          500: "#a96f40",
          600: "#8a5732",
          700: "#6c432a",
          800: "#4c3021",
          900: "#301d14"
        },
        accent: {
          500: "#1b6b63",
          600: "#145149"
        }
      },
      boxShadow: {
        soft: "0 16px 40px rgba(23, 23, 23, 0.08)"
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
