import { expect, it, describe, vi, afterEach, afterAll } from "vitest";
import { faker } from "@faker-js/faker";
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

import UserUserSingUp from "@fetch/user/user-sign-up";
import UserUserLogIn from "@fetch/user/user-login";

describe.skip("testing user end point ", () => {
  const USER_NAME = faker.person.fullName(),
    USER_EMAIL = faker.internet.email(),
    USER_PASSWORD = USER_NAME + USER_EMAIL;

  afterAll(() => {
    vi.restoreAllMocks();
  });
  it("register user testing ", async () => {
    const actual = await UserUserSingUp({
      name: USER_NAME,
      email: USER_EMAIL,
      password: USER_PASSWORD,
    });

    expect(mocks.setUserEmailAndPasswordMock).toBeCalledWith({
      email: USER_EMAIL,
      password: USER_PASSWORD,
    });

    expect(actual).toBe(true);
  });

  it("user log in with email and password already register", async () => {
    vi.mock("@fetch/user/user-sign-in", () => {
      return {
        default: mocks.UserUserSingInMock,
      };
    });

    const actual = await UserUserLogIn({
      email: USER_EMAIL,
      password: USER_PASSWORD,
    });
    expect(mocks.UserUserSingInMock).toHaveBeenCalled();
    expect(mocks.setCookiesMock).toHaveBeenCalledWith(actual.data.token);
  });
});
