import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        "eastern-blue": {
          50: "#f1f9fa",
          100: "#dcf0f1",
          200: "#bee0e3",
          300: "#90cad0",
          400: "#5caab4",
          500: "#42929d",
          600: "#387582",
          700: "#33606b",
          800: "#30515a",
          900: "#2c454d",
          950: "#192d33",
        },
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
    },
  },
};
