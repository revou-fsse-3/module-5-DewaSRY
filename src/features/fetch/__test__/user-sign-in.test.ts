import UserUserSingIn from "@fetch/user/user-sign-in";
import userSignInResponse from "@libs/mock/user/userSignIn";
import { expect, it, describe, vi, beforeAll } from "vitest";
const mocks = vi.hoisted(() => {
  return {
    getCookiesMock: vi.fn(),

    fetchMock: vi.fn(),
  };
});
vi.mock("@libs/cookies", () => {
  return {
    getCookies: mocks.getCookiesMock,
  };
});
function createFetchResponse<T>(data: T) {
  return {
    ok: true,
    json: () => new Promise((resolve) => resolve(data)),
  };
}

/**
 * this testing suit for testing api end pint you need to comment the
 * setup test on the vite.config to hit the real end pint
 *
 *
 * i was make some set up to mock the server so if the set up not be remove
 * the test might not being works
 *
 */

describe.skip("user sign in test", () => {
  beforeAll(() => {
    mocks.getCookiesMock.mockReturnValue("some token ");
    vi.stubGlobal("fetch", mocks.fetchMock);
    mocks.fetchMock.mockResolvedValue(createFetchResponse(userSignInResponse));
  });
  it("user sign in with token on cookie ", async () => {
    const actual = await UserUserSingIn();
    expect(mocks.fetchMock).toHaveBeenCalled();
    expect(mocks.getCookiesMock).toHaveBeenCalled();
    expect(actual).toEqual(userSignInResponse);
    console.log(actual);
  });
});
