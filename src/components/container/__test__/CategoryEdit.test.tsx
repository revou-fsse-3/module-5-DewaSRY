import { describe, expect, vi, it, beforeAll, beforeEach } from "vitest";
import { render, fireEvent, screen, act, waitFor } from "@libs/reactTesting";
import "@testing-library/jest-dom";
import { prettyDOM } from "@testing-library/dom";
import { CreateCollectionsPayload as Payload } from "@utils/collections.type";
import App from "@container/CategoryEdit";

const mocks = vi.hoisted(() => {
  return {
    handle: vi.fn(),
  };
});

describe("testing CategoryEdit container", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(
      <App
        role="main"
        handleSubmit={mocks.handle}
        data={{ name: "", id: "test", is_active: true }}
      >
        <button role="button">Submit</button>
      </App>
    );
  });

  it("input in document", () => {
    const input = screen.getByRole("input-name");
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it(" submit with name is_active ", () => {
    const inputName = screen.getByRole("input-name");
    const inputIsActive = screen.getByRole("input-is_active");
    const button = screen.getByRole("button");
    const NAME_VALUE = "some name";
    const IS_ACTIVE_VALUE = false;
    fireEvent.input(inputName, {
      target: {
        value: NAME_VALUE,
      },
    });
    fireEvent.input(inputIsActive, {
      target: {
        value: IS_ACTIVE_VALUE,
      },
    });

    fireEvent.submit(button);
    waitFor(() => {
      expect(mocks.handle).toHaveBeenCalledOnce();
      expect(mocks.handle).toHaveBeenCalledWith({
        name: NAME_VALUE,
        id: "test",
        is_active: IS_ACTIVE_VALUE,
      });
    });
  });
});
