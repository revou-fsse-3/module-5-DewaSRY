import { describe, expect, it, vi } from "vitest";
import { renderHook, waitFor, act } from "@libs/reactTesting";
import Provider from "@query/Provider";
import useCreateCategory from "@query/Collections/CreateCategory";
// import FetchCreateCategory from "@fetch/collections/collection-create";

const mock = vi.hoisted(() => {
  return {
    FetchCreateCategoryMock: vi.fn(),
    callbackMock: vi.fn(),
  };
});
vi.mock("@fetch/collections/collection-create", () => {
  return {
    default: mock.FetchCreateCategoryMock,
  };
});

describe("testing create category hooks", () => {
  it("create category ", async () => {
    const { result } = renderHook(() => useCreateCategory(mock.callbackMock), {
      wrapper: Provider,
    });
    const NAME = "some name";
    act(() => {
      result.current.mutate({
        name: NAME,
      });
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    // expect(result.current.isSuccess).toBeTruthy();
    expect(mock.FetchCreateCategoryMock).toHaveBeenCalledOnce();
    expect(mock.FetchCreateCategoryMock).toHaveBeenCalledWith({
      name: NAME,
    });
    expect(mock.callbackMock).toHaveBeenCalledOnce();
  });
});

it.todo("test mutate create category hooks");
