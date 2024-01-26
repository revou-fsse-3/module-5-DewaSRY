import { describe, expect, it, vi } from "vitest";
import { renderHook, waitFor, act } from "@libs/reactTesting";
import Provider from "@query/Provider";
import useDeleteCategory from "@query/Collections/DeleteCategory";
import { oneCollectionPayload as categoryId } from "@libs/mock/collections/oneCollection";

const mock = vi.hoisted(() => {
  return {
    FetchDeleteCategoryMock: vi.fn(),
    callbackMock: vi.fn(),
  };
});
vi.mock("@fetch/collections/collection-del", () => {
  return {
    default: mock.FetchDeleteCategoryMock,
  };
});

describe("testing delete category hooks", () => {
  it("delete  category ", async () => {
    const { result } = renderHook(() => useDeleteCategory(mock.callbackMock), {
      wrapper: Provider,
    });
    act(() => {
      result.current.mutate(categoryId);
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });

    expect(mock.FetchDeleteCategoryMock).toHaveBeenCalledOnce();
    expect(mock.FetchDeleteCategoryMock).toHaveBeenCalledWith(categoryId);
    expect(mock.callbackMock).toHaveBeenCalledOnce();
  });
});
