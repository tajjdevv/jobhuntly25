/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        customeWhite:"rgba(81, 91, 111, 1)",
        customeWhitee:"rgba(37, 50, 75, 1)",
        customeBlue2:"rgba(70, 64, 222, 0.7)",
        customeBlue:"rgba(70, 64, 222, 1)",
        customlightBlue:"rgba(38, 164, 255, 1)",
        customSer:"rgba(124, 132, 147, 1)",
        customPop:"rgba(32, 36, 48, 1)"
      },
      backgroundColor:{
        customeBg:"rgba(248, 248, 253, 1)",
        customJb:"rgba(70, 64, 222, 1)",
      },
      fontFamily:{
        'Epilogue':[
        'Epilogue'
      ]},
      width:{
        customWidth:"25rem",
        customWidth2:"35rem",
        // customSer:"53.25rem",
        customjb:"13.0625rem",
        customew:"22.75rem",
        customewi:"35.25rem",
        custome100w:"100%",
        custome100w2:"80%"
      },
      height:{
        customH:"21.625rem",
        customhh:"346px",
        custome100h:"100%"
      },
      margin:{
        customM:"450px"
      },
      fontSize:{
        customSize:"4.5rem",
        customSize:"3.5rem",
        customT:"1.3rem"
      },
      lineHeight:{
        customeLine:"1"
      },
      
      borderColor:{
        customBorder:"rgba(124, 132, 147, 1)",
        custombord:"rgba(214, 221, 235, 1)"
      },
      screens:{
        big:"850px",
        big2:"650px",
        big3:"533px",
        small:"426px"
      },
      aspectRatio:{
        aspectRatio:1/1
      }
      
    },
  },
  plugins: [],
}

