import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8089,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'CogitoFlow',
      fileName: 'cogito-flow',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          vue: 'React',
        },
      },
    },
  },
});
