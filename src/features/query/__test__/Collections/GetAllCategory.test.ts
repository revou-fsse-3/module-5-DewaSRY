import { describe, expect, it, vi } from "vitest";
import { renderHook, waitFor, act } from "@libs/reactTesting";
import Provider from "@query/Provider";
import useGetAllCategory from "@query/Collections/GetAllCategory";

describe("testing get all category  category hooks", () => {
  it("first test", async () => {
    const { result } = renderHook(() => useGetAllCategory(), {
      wrapper: Provider,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.isSuccess).toBeTruthy();
    expect(result.current.data.data.length).toBe(7);
    // expect(FetchCreateCategory).toHaveBeenCalledOnce();
  });
});
