import { USER_URL } from "./index";

import { RegisterPayload } from "@features/utils/user.type";
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
  if (!request.ok) {
    throw Error("failed to fetch user-sign-up");
  } else {
    SaveEmailAndPassword(payload);
    await userLogin(payload);
  }

  return true;
}
