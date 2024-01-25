import { describe, expect, vi, it, beforeAll, beforeEach } from "vitest";
import { render, fireEvent, screen, act, waitFor } from "@libs/reactTesting";
import "@testing-library/jest-dom";
import App from "@container/TableCategory";
import collectionRespond from "@libs/mock/collections/AllCollections";

const mocks = vi.hoisted(() => {
  return {
    handle: vi.fn(),
  };
});

describe("testing Table Category container", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(<App data={collectionRespond.data} role="main" />);
  });

  it("table Category match with snapshot ", () => {
    const main = screen.getAllByRole("main");
    expect(main).toMatchSnapshot();
  });
});
