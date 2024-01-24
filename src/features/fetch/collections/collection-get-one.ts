import { CollectionsProps } from "@features/utils/collections.type";
import { AUTHORIZATION, COLLATIONS_URL } from "./index";
export interface getCollectionsResult {
  data: CollectionsProps;
}
export default async function collectionGetOne(
  id: string,
  signal?: AbortSignal
): Promise<getCollectionsResult> {
  const request = await fetch(COLLATIONS_URL + "/" + id, {
    signal,
    headers: {
      Accept: "application/json",
      ...AUTHORIZATION,
    },
  });

  if (!request.ok) {
    throw Error("failed to fetch collectionGetOne");
  }
  const response = (await request.json()) as unknown;
  return response as getCollectionsResult;
}
