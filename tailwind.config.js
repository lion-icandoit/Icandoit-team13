/* 커스텀 추가 작업*/

/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: ["./client/*/.{html,js}"], 
=======
  content: ["./client/**/*.{html,js}"],
>>>>>>> 3f855bd6592dba5ca3afe20fa322ad21daf66d4d
  theme: {
    extend: {
      backgroundImage: {
        "checkbox-default": "url('../images/check-default.svg')",
        "checkbox-checked": "url('../images/check-checked.svg')",
        "checkbox-agree": "url('../images/icon-agree-check.svg')",
        "checkbox-agree-red": "url('../images/icon-agree-check-red.svg')",
        "checkbox-password": "url('../images/icon-password.svg')"
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      },
      colors: {
        '--black': '#000000',
        '--white': '#ffffff',
        '--gray-100':'#e1e1e',
        '--gray-200': '#c4c4c4',
        '--gray-300': '#a6a6a6',
        '--gray-400': '#898989',
        '--gray-500': '#6b6b6b',
        '--gray-600': '#565656',
        '--gray-700': '#404040',
        '--gray-800': '#2b2b2b',
        '--gray-900': '#151515',
        '--brand-red-1': '#ff153c',
        '--brand-red-2': '#e93945',
        '--brand-dark-bg-1': '#191919',
        '--brand-dark-bg-2': '#212121',
      },
      maxWidth: {
        full: "1920px"
      },
  screens: {
        mobile: {'min': '320px', 'max': '767px'},
        tablet: {'min': '768px', 'max': '1199px'},
        desktop: {'min': '1200px', 'max': '1920px'}
      },
      fontSize: {
        '--heading-medium': ['16px', '140%,', '700'],
        '--heading-large': ['21.33px', '140%,', '700'],
        '--heading-xl': ['28.43px', '140%,', '700'],
        '--heading-xxl': ['37.9px', '140%,', '700'],
        '--heading-xxxl': ['50.52px', '140%,', '700'],
        '--font-xl' : ['45px', '160%', '700'],
        '--label-small':['12px', '150%,', '600'],
        '--label-medium': ['16px', '150%,', '600'],
        '--label-large': ['21.33px', '150%,', '600'],
        '--label-xl': ['28.43px', '150%,', '600'],
        '--label-xxl': ['37.9px', '150%,', '600'],
        '--paragraph-small':['12px', '160%,', '400'],
        '--paragraph-medium':['16px', '160%,', '400'],
        '--paragraph-large':['21.33px', '160%,', '400'],
        '--paragraph-xl': ['28.43px', '160%,', '400'],
      },
      fontFamily: {
        '--font-family': ['Pretendard', 'sans-serif'],
      },
      boxShadow: {
        '--text-box-shadow': 'inset 1px 1px 0px 0px rgba(0, 0, 0, 1)',
        '--above-high-box-shadow': '0px -16px 48px 0px rgba(0, 0, 0, 0.3)',
        '--above-medium-box-shadow': '0px -8px 36px 0px rgba(0, 0, 0, 0.2)',
        '--above-low-box-shadow': '0px -4px 24px 0px rgba(0, 0, 0, 0.1)',
        '--below-high-box-shadow': '0px 16px 48px 0px rgba(0, 0, 0, 0.3)',
        '--below-medium-box-shadow': '0px 8px 36px 0px rgba(0, 0, 0, 0.2)',
        '--below-low-box-shadow': '0px 4px 24px 0px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}