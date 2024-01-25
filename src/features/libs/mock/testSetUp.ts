import { afterAll, afterEach, beforeAll } from "vitest";
import { setupServer } from "msw/node";
import { HttpResponse, graphql, http } from "msw";

import AllCollections from "./collections/AllCollections";
import createCollection from "./collections/createCollection";
import oneCollection, {
  oneCollectionPayload as collectionID,
} from "./collections/oneCollection";
import userLogIn from "./user/userLogIn";
import userSignIn from "./user/userSignIn";
import userRegister from "./user/userRegister";

const COLLECTION_URL = "https://mock-api.arikmpt.com/api/category";
const USER_URL = "https://mock-api.arikmpt.com/api/user";

export const restHandlers = [
  http.get(COLLECTION_URL + "?page=1", () => {
    return HttpResponse.json(AllCollections);
  }),

  http.get(COLLECTION_URL + "/" + collectionID, () => {
    return HttpResponse.json(oneCollection);
  }),
  http.get(COLLECTION_URL + "/" + collectionID, () => {
    return HttpResponse.json(oneCollection);
  }),
  http.delete(COLLECTION_URL + "/" + collectionID, () => {
    return;
  }),
  http.put(COLLECTION_URL + "/update", () => {
    return;
  }),
  http.post(COLLECTION_URL + "/create", () => {
    return HttpResponse.json(createCollection);
  }),
  http.post(USER_URL + "/register", () => {
    return HttpResponse.json(userRegister);
  }),
  http.post(USER_URL + "/login", () => {
    return HttpResponse.json(userLogIn);
  }),
  http.get(USER_URL + "/profile", () => {
    return HttpResponse.json(userSignIn);
  }),
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
