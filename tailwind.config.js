export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    fontFamily:{
      'outfit':["Outfit", 'sans-serif'],
      'poppins':["Poppins", 'sans-serif'],
      'montserrat':["Montserrat", 'sans-serif'],
    },
    extend: {
      colors: {
        bg:'#161513',
        linear:'#DF8908',
        linear1:'#B415FF',
        primaryDark: '#0D1117', 
        primaryLight: '#FFFFFF', 
        accentDark: '#58A6FF',
        accentLight: '#3B82F6', 
      },
      
    },
  },
  plugins: [],
};
