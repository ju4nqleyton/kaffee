/** @type {import('tailwindcss').Config} */

import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["Inter var", ..._fontFamily.sans],
    },
  },
};
export const plugins = [];
