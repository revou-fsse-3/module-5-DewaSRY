import { describe, expect, it, vi } from "vitest";
import { renderHook, waitFor, act } from "@libs/reactTesting";
import Provider from "@query/Provider";
import useUpdateCategory from "@query/Collections/UpdateCategory";

const mock = vi.hoisted(() => {
  return {
    FetchUpdateCategoryMock: vi.fn(),
    callbackMock: vi.fn(),
  };
});
vi.mock("@fetch/collections/collection-update", () => {
  return {
    default: mock.FetchUpdateCategoryMock,
  };
});

describe("testing update category hooks", () => {
  it("Update  category ", async () => {
    const { result } = renderHook(() => useUpdateCategory(mock.callbackMock), {
      wrapper: Provider,
    });

    const SOME_NAME = "some name",
      SOME_ID = "some id",
      SOME_STATUS = true;
    act(() => {
      result.current.mutate({
        id: SOME_ID,
        name: SOME_NAME,
        is_active: SOME_STATUS,
      });
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(mock.FetchUpdateCategoryMock).toHaveBeenCalledOnce();
    expect(mock.FetchUpdateCategoryMock).toHaveBeenCalledWith({
      id: SOME_ID,
      name: SOME_NAME,
      is_active: SOME_STATUS,
    });
    expect(mock.callbackMock).toHaveBeenCalledOnce();
  });
});
