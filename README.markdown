npm create vite@latest tabbing-react -- --template react 
npm install

npm install tailwindcss @tailwindcss/vite


import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})


@import "tailwindcss";
npm run dev
