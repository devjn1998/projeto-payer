/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003366", // corPrincipal mais escuro
        secondary: "#0066cc", // corSecundaria
        tertiary: "#0099ff", // corTerciaria
        accent: "#f37806", // corDetalhes (laranja)
        background: "#f8f9fa", // corDeFundo
        header: "#001a33", // corHeader mais escura
      },
      fontFamily: {
        carousel: ["Montserrat", "sans-serif"], // fontCarousel
        sans: ["Open Sans", "sans-serif"],
      },
      height: {
        700: "700px",
        520: "520px",
      },
      boxShadow: {
        elegant: "0 4px 12px rgba(0, 0, 0, 0.1)",
        strong: "0 10px 25px -5px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out forwards",
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
