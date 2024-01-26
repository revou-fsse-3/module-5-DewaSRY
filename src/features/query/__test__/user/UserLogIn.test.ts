import { describe, expect, it, vi } from "vitest";
import { renderHook, waitFor, act } from "@libs/reactTesting";
import Provider from "@query/Provider";
import useUserLogIn from "@query/user/UserLogIn";

const mock = vi.hoisted(() => {
  return {
    FetchUserLoginMock: vi.fn(),
    callbackMock: vi.fn(),
  };
});
vi.mock("@fetch/user/user-login", () => {
  return {
    default: mock.FetchUserLoginMock,
  };
});

describe("testing user log in   hooks", () => {
  it(" user log in   category ", async () => {
    const { result } = renderHook(() => useUserLogIn(mock.callbackMock), {
      wrapper: Provider,
    });

    const SOME_EMAIL = "someEmail@gmail.com",
      SOME_PASSWORD = "somePassword";
    act(() => {
      result.current.mutate({
        email: SOME_EMAIL,
        password: SOME_PASSWORD,
      });
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(mock.FetchUserLoginMock).toHaveBeenCalledOnce();
    expect(mock.FetchUserLoginMock).toHaveBeenCalledWith({
      email: SOME_EMAIL,
      password: SOME_PASSWORD,
    });
    expect(mock.callbackMock).toHaveBeenCalledOnce();
  });
});
