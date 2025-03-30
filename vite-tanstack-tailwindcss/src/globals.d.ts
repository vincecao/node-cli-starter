import "@tanstack/react-query";

interface ImportMetaEnv {
  MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

type QueryKey = ["demo-predict-nationality", ...ReadonlyArray<unknown>];

/**
 * Registering the query and mutation key types
 * Ref: https://tanstack.com/query/latest/docs/framework/react/typescript#registering-the-query-and-mutation-key-types
 */
declare module "@tanstack/react-query" {
  interface Register {
    queryKey: QueryKey;
    mutationKey: QueryKey;
  }
}
