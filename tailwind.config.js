/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        //font-primary
        primary: "Barlow Semi Condensed",
      },
      colors: {
        primary: {
          100: "hsl(263, 55%, 52%)",
          200: "hsl(217, 19%, 35%)",
          300: "hsl(219, 29%, 14%)",
          400: "hsl(0, 0%, 100%)",
        },
        secoundry: {
          100: "hsl(0, 0%, 81%)",
          200: "hsl(210, 46%, 95%)",
        },
      },
    },
  },
  plugins: [],
};
