/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_PUBLIC_URL: string;
  // Add other variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}