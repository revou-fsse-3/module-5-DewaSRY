import { LogInPayload } from "./user.type";

const EMAIL_KEY = "email",
  PASSWORD_KEY = "password";

export function setUserEmailAndPassword(payload: LogInPayload) {
  localStorage.setItem(EMAIL_KEY, payload.email);
  localStorage.setItem(PASSWORD_KEY, payload.password);
}

export function getUserEmailAndPassword() {
  return {
    email: localStorage.getItem(EMAIL_KEY) ?? "",
    password: localStorage.getItem(PASSWORD_KEY) ?? "",
  };
}
