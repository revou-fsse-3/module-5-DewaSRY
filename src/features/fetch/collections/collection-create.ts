import { getCookies } from "@libs/cookies";
import { COLLATIONS_URL } from "./index";
import type { CollectionsProps } from "@features/utils/collections.type";
export interface CreateCollectionsResult {
  data: CollectionsProps;
}
export interface CreateCategoryPayload {
  name: string;
}
export default async function collectionCreate(
  payload: CreateCategoryPayload,
  signal?: AbortSignal
): Promise<CreateCollectionsResult> {
  const request = await fetch(COLLATIONS_URL + "/create", {
    body: JSON.stringify(payload),
    signal,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookies(),
    },
    method: "POST",
  });

  if (!request.ok) {
    throw Error("failed to fetch collection-create");
  }
  const response = (await request.json()) as unknown;

  return response as CreateCollectionsResult;
}
