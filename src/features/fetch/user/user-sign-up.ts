import { USER_URL } from "./index";

import type { RegisterPayload } from "@features/utils/user.type";
import { setUserEmailAndPassword as SaveEmailAndPassword } from "@utils/user.utils";
import userLogin from "./user-login";
export default async function userSignUp(
  payload: RegisterPayload
): Promise<boolean> {
  const request = await fetch(USER_URL + "/register", {
    body: JSON.stringify(payload),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  // const response = await request.json();

  if (!request.ok) {
    throw Error("failed to fetch user-sign-up");
  } else {
    SaveEmailAndPassword({
      email: payload.email,
      password: payload.password,
    });
    await userLogin({
      email: payload.email,
      password: payload.password,
    });
  }

  return true;
}
