import { describe, expect, it, vi } from "vitest";
import { renderHook, waitFor, act } from "@libs/reactTesting";
import Provider from "@query/Provider";
import useGetCategory from "@query/Collections/GetCategory";
import category, {
  oneCollectionPayload as categoryId,
} from "@libs/mock/collections/oneCollection";

describe("get  category hooks", () => {
  it("get   category ", async () => {
    const { result } = renderHook(() => useGetCategory(categoryId), {
      wrapper: Provider,
    });
    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });
    expect(result.current.data).toEqual(category);
  });
});
