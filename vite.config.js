import { defineConfig } from 'vitest/config';

export default defineConfig({
  root: './__tests__/',
  server: {
    port: 8080,
    open: '/',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    threads: false,
  },
});
