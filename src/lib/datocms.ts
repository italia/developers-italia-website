import { executeQuery as libExecuteQuery } from "@datocms/cda-client";
import type { TadaDocumentNode } from "gql.tada";

export async function executeQuery<Result, Variables>(
  query: TadaDocumentNode<Result, Variables>,
  options?: ExecuteQueryOptions<Variables>,
) {
  const metaEnv = (
    import.meta as ImportMeta & {
      env?: Record<string, string | undefined>;
    }
  ).env;
  const getEnv = (key: string) => metaEnv?.[key] ?? process.env[key];
  const token = options?.includeDrafts
    ? getEnv("DATOCMS_DRAFT_API_TOKEN")
    : (getEnv("DATOCMS_MANAGEMENT_API_TOKEN") ?? getEnv("DATOCMS_API_TOKEN"));

  const result = await libExecuteQuery(query, {
    variables: options?.variables,
    excludeInvalid: true,
    includeDrafts: options?.includeDrafts,
    environment: getEnv("DATOCMS_ENVIRONMENT"),
    token,
  });

  return result;
}

type ExecuteQueryOptions<Variables> = {
  variables?: Variables;
  includeDrafts?: boolean;
};
