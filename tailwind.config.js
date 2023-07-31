/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/*/.{html,js}"], 
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "checkbox-default": "url('../images/check-default.svg')",
        "checkbox-checked": "url('../images/check-checked.svg')",
        "checkbox-agree": "url('../images/icon-agree-check.svg')",
        "checkbox-agree-red": "url('../images/icon-agree-check-red.svg')",
        "checkbox-password": "url('../images/icon-password.svg')"
      }),
      colors: {
        white: "#ffffff",
        black: "#000000",
        red: "#ff153c",
        gray1: "#e1e1e1",
        gray2: "#c4c4c4",
        gray3: "#a6a6a6",
        gray4: "#898989",
        gray5: "#6b6b6b",
        gray6: "#565656",
        gray7: "#404040",
        gray8: "#2b2b2b",
        gray9: "#151515",
        primary: "#c4c4c4", //gray2
        secondary: "#a6a6a6", //gray3
        body: "#2b2b2b", //gray8
        accent: "#e93945",
        darkAccent: "#e93945"
      },
      maxWidth: {
        full: "1920px"
      },
      screens: {
        mobile: {'min': '320px', 'max': '767px'},
        tablet: {'min': '768px', 'max': '1199px'},
        desktop: {'min': '1200px', 'max': '1920px'}
      }
    },
  },
  plugins: [],
}