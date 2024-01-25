import { USER_URL } from "./index";
import type { LogInPayload } from "@features/utils/user.type";
import { setCookies } from "@libs/cookies";
import UserSignIn from "./user-sign-in";
interface loginResponse {
  data: {
    token: string;
  };
}

export default async function userLogin(
  payload: LogInPayload
): Promise<loginResponse> {
  const request = await fetch(USER_URL + "/login", {
    body: JSON.stringify(payload),
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const response = (await request.json()) as unknown as loginResponse;

  if (!request.ok) {
    throw Error("failed to fetch user-login");
  } else {
    setCookies(response.data.token);
    await UserSignIn();
  }

  return response;
}
