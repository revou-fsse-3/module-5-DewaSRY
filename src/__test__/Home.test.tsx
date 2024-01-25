import { describe, expect, it } from "vitest";
import { render } from "@utils/ReactTestingLib";
import HomePage from "@pages/index";

describe("first testing ", () => {
  const { container } = render(<HomePage />);

  it("home testing ", () => {
    expect(container).toBeDefined();
  });
});
