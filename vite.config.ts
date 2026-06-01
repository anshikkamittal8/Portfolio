import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative asset URLs so Live Server / file:// preview works (not only domain root).
  base: './',
});
