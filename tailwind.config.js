/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textOrange: "#D68C45",
        darkBlue: "#052337",
        lightBlue: "#003249",
        textGray: "#B3B3B3",
        lightGray: "#C4DBDB",
      },
      screens: {
        "2sm": "360px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1600px",
      },
    },
  },
  plugins: [require("daisyui")],
};
