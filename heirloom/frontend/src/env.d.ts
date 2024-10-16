/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string; // Add any other environment variables you are using here
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  