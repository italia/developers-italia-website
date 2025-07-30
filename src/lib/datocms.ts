import { executeQuery as libExecuteQuery } from "@datocms/cda-client";
import type { TadaDocumentNode } from "gql.tada";

export async function executeQuery<Result, Variables>(
  query: TadaDocumentNode<Result, Variables>,
  options?: ExecuteQueryOptions<Variables>,
) {
  const token = options?.includeDrafts
    ? import.meta.env.DATOCMS_DRAFT_API_TOKEN
    : import.meta.env.DATOCMS_API_TOKEN;

  const result = await libExecuteQuery(query, {
    variables: options?.variables,
    excludeInvalid: true,
    includeDrafts: options?.includeDrafts,
    token,
  });

  return result;
}

type ExecuteQueryOptions<Variables> = {
  variables?: Variables;
  includeDrafts?: boolean;
};
