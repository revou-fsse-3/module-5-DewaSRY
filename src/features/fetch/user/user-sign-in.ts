import { USER_URL } from "./index";
import { getCookies } from "@libs/cookies";
export default async function userSignIn(): Promise<unknown> {
  const currentToken = getCookies();
  if (!currentToken) {
    throw Error("failed sign-in ");
  }
  const request = await fetch(USER_URL + "/profile", {
    headers: {
      Authorization: "Bearer" + currentToken,
      Accept: "application/json",
    },
    method: "GET",
  });
  if (!request.ok) {
    throw Error("failed to fetch user-sign-in");
  }
  const response = (await request.json()) as unknown;
  return response;
}
