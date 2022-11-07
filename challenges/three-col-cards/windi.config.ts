import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  attributify: {
    prefix: 's:',
  },
  theme: {
    extend: {
      colors: {
        gray: "#F2F2F2",
        skobeloff: "#006971",
        green: "#004140",
        orange: "#E28625",
      },
      fontFamily: {
        shoulders: [
          'Big Shoulders Display',
          'sans-serif',
        ],
        lexend: [
          'Lexend Deca',
          'sans-serif',
        ],
      }
    },
  },
});
