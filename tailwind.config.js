module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dm-white": "#FFFFFF",
        "dm-blue": "#1E2A47",
        "dm-light-blue": "#0079FF",
        "dm-light-blue-hover": "#60ABFF",
        "dm-black-blue": "#141D2F",
        "lm-white": "#FEFEFE",
        "lm-blue": "#4B6A9B",
        "lm-light-blue": "#0079FF",
        "lm-grey": "#697C9A",
        "lm-light-grey": "#F6F8FF",
        "lm-dark-grey": "#2B3442",
        error: "#F74646",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
