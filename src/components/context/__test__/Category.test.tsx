import { describe, expect, vi, it } from "vitest";
import { render } from "@libs/reactTesting";
import "@testing-library/jest-dom";
import { withWrapper } from "@context/Category";

import AllCategory from "@libs/mock/collections/AllCollections";
const mock = vi.hoisted(() => {
  return {
    filterCategoryMock: vi.fn(),
  };
});
vi.mock("@context/Category/useCategoryFilter", () => {
  return {
    default: vi.fn().mockReturnValue({
      filterCategory: mock.filterCategoryMock,
    }),
  };
});

const ComponentContext = withWrapper(() => {
  return <div role="main">this is some text</div>;
});

describe("Category context testing ", () => {
  it("Context will filter the data by the category filter hooks filter hooks ", () => {
    render(<ComponentContext data={AllCategory.data} />);
    expect(mock.filterCategoryMock).toHaveBeenCalledOnce();
    expect(mock.filterCategoryMock).toHaveBeenCalledWith(AllCategory.data);
  });
});
