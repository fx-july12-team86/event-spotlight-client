import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  return {
    base: '/event-spotlight-client/',
    plugins: [react()],
    resolve: {
      alias: {
        src: "/src",
        "@styles": '/src/shared/styles/utils.scss'
      },
    },
    css: {
      modules: {
        localsConvention: "camelCase",
        generateScopedName: isDev ? "[name]__[local]__[hash:base64:2]" : '[hash:base64:5]'
      }
    },
  }
});
