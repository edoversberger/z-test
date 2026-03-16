import { defineConfig } from 'vite';

export default defineConfig({
  server:{
    allowedHosts: true
  },
  optimizeDeps: {
    include: ['superdoc']
  }
});