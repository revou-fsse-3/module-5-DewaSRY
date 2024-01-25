import { describe, expect, vi, it, beforeAll, beforeEach } from "vitest";
import { render, fireEvent, screen, act, waitFor } from "@libs/reactTesting";
import "@testing-library/jest-dom";
import Button from "@common/Button";

const mocks = vi.hoisted(() => {
  return {
    handle: vi.fn(),
  };
});

describe("testing Table Category container", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(<Button role="main"> Button </Button>);
  });

  it("table Category match with snapshot ", () => {
    const main = screen.getAllByRole("main");
    expect(main).toMatchSnapshot();
  });
});
