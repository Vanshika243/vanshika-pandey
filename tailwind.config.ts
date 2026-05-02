import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 30px 60px rgba(15, 23, 42, 0.25)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top right, rgba(56, 189, 248, 0.35), transparent 30%), radial-gradient(circle at bottom left, rgba(168, 85, 247, 0.25), transparent 25%)',
      },
    },
  },
  plugins: [],
};

export default config;
