import { describe, expect, it, vi } from "vitest";
import { renderHook, waitFor, act } from "@libs/reactTesting";
import Provider from "@query/Provider";
import useUserRegister from "@query/user/UserRegister";

const mock = vi.hoisted(() => {
  return {
    FetchUserLoginMock: vi.fn(),
    callbackMock: vi.fn(),
  };
});
vi.mock("@fetch/user/user-sign-up", () => {
  return {
    default: mock.FetchUserLoginMock,
  };
});

describe("testing user sign up   hooks", () => {
  it(" user sign up    ", async () => {
    const { result } = renderHook(() => useUserRegister(mock.callbackMock), {
      wrapper: Provider,
    });

    const SOME_EMAIL = "someEmail@gmail.com",
      SOME_PASSWORD = "somePassword",
      SOME_NAME = "some name";
    act(() => {
      result.current.mutate({
        email: SOME_EMAIL,
        password: SOME_PASSWORD,
        name: SOME_NAME,
      });
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(mock.FetchUserLoginMock).toHaveBeenCalledOnce();
    expect(mock.FetchUserLoginMock).toHaveBeenCalledWith({
      email: SOME_EMAIL,
      password: SOME_PASSWORD,
      name: SOME_NAME,
    });
    expect(mock.callbackMock).toHaveBeenCalledOnce();
  });
});
