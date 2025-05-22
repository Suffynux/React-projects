# React + Vite + Tailwind CSS Project Setup

This project is a modern React application built with Vite and styled with Tailwind CSS. It includes a modal component (controlled by a button toggle) as part of a responsive navigation bar.

## Prerequisites

- **Node.js**: Version 20.x or later (recommended).
- **npm**: Version 10.x or later (comes with Node.js).
- A code editor like VS Code.

## Installation

Follow these steps to set up the project locally.

### Step 1: Create a New React Project with Vite

1. Open your terminal and navigate to your desired project directory.
2. Run the following command to create a new Vite project with the React template:
   ```bash
   npm create vite@latest my-react-app -- --template react
   ```
   - Select `React` as the framework and `JavaScript` as the variant (or `TypeScript` for `.tsx` files).
   - Replace `my-react-app` with your preferred project name.
3. Navigate to the project directory:
   ```bash
   cd my-react-app
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server to verify the setup:
   ```bash
   npm run dev
   ```
   - Open `http://localhost:5173` (or the URL shown in the terminal) to see the default Vite + React app.

### Step 2: Add Tailwind CSS

Tailwind CSS v4.x is used with the `@tailwindcss/vite` plugin for seamless integration with Vite.

1. Install Tailwind CSS and its Vite plugin:
   ```bash
   npm install -D tailwindcss @tailwindcss/vite
   ```
2. Update `vite.config.js` (or `vite.config.ts` for TypeScript) to include the Tailwind CSS plugin:
   ```javascript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import tailwindcss from '@tailwindcss/vite';

   export default defineConfig({
     plugins: [react(), tailwindcss()],
   });
   ```
3. Generate a `tailwind.config.js` file:
   ```bash
   npx tailwindcss init
   ```
4. Update `tailwind.config.js` to specify content paths:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```
5. Add Tailwind directives to `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
   - If you have custom styles, keep them in `src/App.css` or append them to `index.css`.

