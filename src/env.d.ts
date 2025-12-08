/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Base public path when served in development or production.
   * Example: "/"
   */
  readonly BASE_URL: string;

  /**
   * App environment: "development", "production", etc.
   */
  readonly MODE: string;

  /**
   * Whether the app is running under SSR.
   */
  readonly SSR: boolean;

  /**
   * Your custom environment variables.
   * Must start with VITE_ to be exposed to client.
   */
  readonly VITE_API_BASE_URL: string;
  // Add more custom variables below:
  // readonly VITE_SOME_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
