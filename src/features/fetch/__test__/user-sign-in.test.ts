import UserUserSingIn from "@fetch/user/user-sign-in";

import { expect, it, describe, vi, afterEach, afterAll } from "vitest";
const mocks = vi.hoisted(() => {
  return {
    setUserEmailAndPasswordMock: vi.fn(),
    getCookiesMock: vi.fn(),
    setCookiesMock: vi.fn(),
    UserUserSingInMock: vi.fn(),
    fetchMock: vi.fn(),
  };
});

vi.mock("@utils/user.utils", () => ({
  setUserEmailAndPassword: mocks.setUserEmailAndPasswordMock,
}));
vi.mock("@libs/cookies", () => {
  return {
    getCookies: mocks.getCookiesMock,
    setCookies: mocks.setCookiesMock,
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
  it("user sign in with token on cookie", async () => {
    // mocks.UserUserSingInMock.caller();
    mocks.getCookiesMock.mockReturnValue("some token");
    vi.stubGlobal("fetch", mocks.fetchMock);
    const mockResult = "some result";
    mocks.fetchMock.mockResolvedValue(createFetchResponse(mockResult));
    const actual = await UserUserSingIn();
    expect(mocks.fetchMock).toHaveBeenCalled();
    expect(mocks.getCookiesMock).toHaveBeenCalled();
    expect(actual).toEqual(mockResult);
  });
});
