import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/convertingInput/', // to gh-pages change to "/{repo}/" && use HashRouter instead of BrowserRouter
  plugins: [react(), tsconfigPaths()],
  server: {
    // open: true,
    port: 4000,
  },
});
