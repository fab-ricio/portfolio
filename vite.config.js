import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/mon-portfolio/', // Remplace par le nom de ton repo GitHub
  plugins: [react()],
})
