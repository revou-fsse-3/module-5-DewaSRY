import { getCookies } from "@libs/cookies";
import { CollectionsProps } from "@features/utils/collections.type";
import { COLLATIONS_URL } from "./index";
export interface collectionGetAllResponse {
  data: CollectionsProps[];
}

export default async function collectionGetAll(
  page = 1,
  signal?: AbortSignal
): Promise<collectionGetAllResponse> {
  const request = await fetch(COLLATIONS_URL + "?page=" + page, {
    signal,
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + getCookies(),
    },
  });

  if (!request.ok) {
    throw Error("failed to fetch collection-get-all");
  }
  const response = (await request.json()) as unknown;
  return response as collectionGetAllResponse;
}
