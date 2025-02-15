
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: { 
        'hero-image': "url('/hero.jpeg')",
        'category-image': "url('/k.jpeg')",
        'about-image': "url('/a.jpg')",
      },
    },
  },
  plugins: [],
};
