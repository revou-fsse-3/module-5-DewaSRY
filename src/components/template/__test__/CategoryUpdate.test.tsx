import { describe, expect, vi, it, beforeAll, beforeEach } from "vitest";
import { render, fireEvent, screen, act, waitFor } from "@libs/reactTesting";
import "@testing-library/jest-dom";
import UpdateCategory from "@template/UpdateCategory";

const mocks = vi.hoisted(() => {
  return {
    handle: vi.fn(),
  };
});

it("UpdateCategory match with snapshot ", () => {
  render(<UpdateCategory role="main" />);

  const main = screen.getAllByRole("main");
  expect(main).toMatchSnapshot();
});
