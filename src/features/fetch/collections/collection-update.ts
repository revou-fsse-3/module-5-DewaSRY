import { UpdateCollectionsProps } from "@features/utils/collections.type";
import { COLLATIONS_URL } from "./index";
import { getCookies } from "@libs/cookies";

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
      Authorization: "Bearer " + getCookies(),
    },
    method: "PUT",
  });

  if (!request.ok) {
    throw Error("failed to fetch collection-update");
  }

  return true;
}
