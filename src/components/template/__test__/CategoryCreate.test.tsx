import { describe, expect, it } from "vitest";
import { render, screen } from "@libs/reactTesting";
import "@testing-library/jest-dom";
import CreateCategory from "@template/CreateCategory";

it("CreateCategory match with snapshot ", () => {
  render(<CreateCategory role="main" />);
  const main = screen.getAllByRole("main");
  expect(main).toMatchSnapshot();
});
