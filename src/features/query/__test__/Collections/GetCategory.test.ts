import { describe, expect, it, vi } from "vitest";
import { renderHook, waitFor, act } from "@libs/reactTesting";
import Provider from "@query/Provider";
import useGetCategory from "@query/Collections/GetCategory";
import category, {
  oneCollectionPayload as categoryId,
} from "@libs/mock/collections/oneCollection";
const mocks = vi.hoisted(() => {
  return {
    FetchCategoryMock: vi.fn(),
  };
});
vi.mock("@fetch/collections/collection-get-one", () => {
  return {
    default: mocks.FetchCategoryMock,
  };
});
describe("get  category hooks", () => {
  it("get category hooks will invoke the get category function  ", async () => {
    mocks.FetchCategoryMock.mockResolvedValue(category);
    const { result } = renderHook(() => useGetCategory(categoryId), {
      wrapper: Provider,
    });
    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });
    expect(result.current.data).toEqual(category);
    expect(mocks.FetchCategoryMock).toHaveBeenCalledOnce();
  });
});
