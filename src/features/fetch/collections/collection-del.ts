import { getCookies } from "@libs/cookies";
import { COLLATIONS_URL } from "./index";

export default async function collectionDel(
  id: string,
  signal?: AbortSignal
): Promise<boolean> {
  const request = await fetch(COLLATIONS_URL + "/" + id, {
    method: "DELETE",
    signal,
    headers: {
      Authorization: "Bearer " + getCookies(),
    },
  });
  if (!request.ok) {
    throw Error("failed to fetch collection-del");
  }
  return true;
}
