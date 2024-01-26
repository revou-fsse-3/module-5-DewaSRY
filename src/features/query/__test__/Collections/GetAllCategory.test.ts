import { describe, expect, it, vi } from "vitest";
import { renderHook, waitFor, act } from "@libs/reactTesting";
import AllCategory from "@libs/mock/collections/AllCollections";
import Provider from "@query/Provider";
import useGetAllCategory from "@query/Collections/GetAllCategory";
const mocks = vi.hoisted(() => {
  return {
    FetchAllCategoryMock: vi.fn(),
  };
});
vi.mock("@fetch/collections/collection-get-all", () => {
  return {
    default: mocks.FetchAllCategoryMock,
  };
});

describe("testing get all category  category hooks", () => {
  it("get all category hooks will call the fetch all category function ", async () => {
    mocks.FetchAllCategoryMock.mockResolvedValue(AllCategory);
    const { result } = renderHook(() => useGetAllCategory(), {
      wrapper: Provider,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.isSuccess).toBeTruthy();
    expect(result.current.data.data.length).toBe(7);
    expect(mocks.FetchAllCategoryMock).toHaveBeenCalledOnce();

    vi.clearAllMocks();
  });
});
