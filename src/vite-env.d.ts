/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_MONGODB_URI: string;
    readonly VITE_JWT_SECRET: string;
    readonly VITE_PORT?: string;
    readonly VITE_NODE_ENV?: 'development' | 'production' | 'test';
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  