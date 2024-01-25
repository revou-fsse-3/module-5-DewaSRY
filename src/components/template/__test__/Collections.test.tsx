import { describe, expect, vi, it, beforeAll, beforeEach } from "vitest";
import { render, fireEvent, screen, act, waitFor } from "@libs/reactTesting";
import "@testing-library/jest-dom";
import Collections from "@template/Collections";

it("Collections match with snapshot ", () => {
  render(<Collections role="main" />);
  const main = screen.getAllByRole("main");
  expect(main).toMatchSnapshot();
});
