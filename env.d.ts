interface ImportMetaEnv {
  readonly VITE_AVAILABLE_FOR_WORK: string;
  readonly VITE_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
