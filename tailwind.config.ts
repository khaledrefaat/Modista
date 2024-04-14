import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#1B7F79',
      secondary: '#FF4858',
      primaryAccent: '#00CCC0',
      aquaColor: '#72F2EB',
      textColor: '#747F7F',
    },
  },
  plugins: [],
};
export default config;
