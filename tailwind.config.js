/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./src/**/*.{js,ts,j2sx,tsx,mdx}",
    "./src/**/**/*.{js,ts,j2sx,tsx,mdx}",
    "./src/**/**/**/*.{js,ts,j2sx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
      },
    },
  },
  plugins: [],
});
