import { describe, expect, vi, it, beforeAll, beforeEach } from "vitest";
import { render, fireEvent, screen, act, waitFor } from "@libs/reactTesting";
import "@testing-library/jest-dom";
import CreateForm from "@container/CategoryCreate";
const mocks = vi.hoisted(() => {
  return {
    handle: vi.fn(),
  };
});

describe("testing Create Category container", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(
      <CreateForm role="main" handleCreate={mocks.handle} data={{ name: "" }}>
        <button role="button">Submit</button>
      </CreateForm>
    );
  });

  it("element button adn input  in document", () => {
    const button = screen.getByRole("button");
    const input = screen.getByRole("input-name");
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("insert the name then fire the submit", () => {
    const input = screen.getByRole("input-name");
    const button = screen.getByRole("button");
    const NAME_VALUE = "some name";
    fireEvent.input(input, {
      target: {
        value: NAME_VALUE,
      },
    });
    fireEvent.submit(button);
    waitFor(() => {
      expect(mocks.handle).toHaveBeenCalledOnce();
      expect(mocks.handle).toHaveBeenCalledWith({
        name: NAME_VALUE,
      });
    });
  });
});
