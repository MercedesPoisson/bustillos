/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // lightblue: "#CCE9FF",
        // midblue: "#2A94F4",
        // blue: "#487aa1",
        lightblue: "#EBEBEB", //gris claro para letra sobre fondo oscuro
        midblue: "#197BBD", // un azul mas chillon para botones
        blue: "#125E8A", // azul oscuro para fondo
        tacho: "#F45B69", // rojo para tacho y alertas
        edit: "#59C3C3", // verde para editar
        
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}

