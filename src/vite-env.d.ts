/// <reference types="vite/client" />

interface Window {
  global: typeof globalThis;
  Buffer: typeof Buffer;
}