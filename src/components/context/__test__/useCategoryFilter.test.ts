import { describe, expect, it, vi } from "vitest";
import { renderHook, waitFor, act } from "@libs/reactTesting";
import useCategoryFilter from "@context/Category/useCategoryFilter";
// import FetchCreateCategory from "@fetch/collections/collection-create";

const MOCK_FIRST_DATA_COLLECTION = [
  {
    id: "ec8874da-d514-4a48-a1b4-1def81d6537f",
    is_active: true,
    name: "mock halloo apa kabar  loo gory one two three",
    updated_at: "2024-01-25T01:51:26.404Z",
    created_at: "2024-01-25T01:51:26.404Z",
  },
];

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

describe("testing useCategoryFilter hooks", () => {
  it("prevent multiple object ", async () => {
    const { result } = renderHook(() => useCategoryFilter());
    const NAME = "some name";
    act(() => {
      result.current.filterCategory(MOCK_FIRST_DATA_COLLECTION);
    });

    expect(result.current.category.length).toBe(1);
    act(() => {
      result.current.filterCategory(MOCK_FIRST_DATA_COLLECTION);
    });
    expect(result.current.category.length).toBe(1);
  });
});

it.todo("test mutate create category hooks");
