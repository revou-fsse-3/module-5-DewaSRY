import { getCookies } from "@libs/cookies";

const COLLATIONS_URL = "https://mock-api.arikmpt.com/api/category";
const AUTHORIZATION = {
  Authorization: "Bearer" + getCookies(),
};
export { COLLATIONS_URL, AUTHORIZATION };
