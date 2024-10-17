/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string; // Declare your environment variables here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  