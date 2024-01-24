import { AUTHORIZATION } from "./index";
import { CollectionsProps } from "@features/utils/collections.type";

export interface collectionGetAllResponse {
  data: CollectionsProps[];
}

export default async function collectionGetAll(
  page = 1,
  signal?: AbortSignal
): Promise<collectionGetAllResponse> {
  const request = await fetch(
    "https://mock-api.arikmpt.com/api/category?page=" + page,
    {
      signal,
      headers: {
        Accept: "application/json",
        ...AUTHORIZATION,
      },
    }
  );

  if (!request.ok) {
    throw Error("failed to fetch collection-get-all");
  }
  const response = (await request.json()) as unknown;
  return response as collectionGetAllResponse;
}
