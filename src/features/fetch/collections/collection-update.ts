import { UpdateCollectionsProps } from "@features/utils/collections.type";
import { AUTHORIZATION, COLLATIONS_URL } from "./index";

export type CollectionsUpdatePayload = UpdateCollectionsProps;

export default async function collectionUpdate(
  payload: CollectionsUpdatePayload,
  signal?: AbortSignal
): Promise<boolean> {
  const request = await fetch(COLLATIONS_URL + "/update", {
    body: JSON.stringify(payload),
    signal,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...AUTHORIZATION,
    },
    method: "PUT",
  });

  if (!request.ok) {
    throw Error("failed to fetch collection-update");
  }

  return true;
}
