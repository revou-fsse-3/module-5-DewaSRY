import { describe, expect, vi, it, beforeAll, beforeEach } from "vitest";
import { render, fireEvent, screen, act, waitFor } from "@libs/reactTesting";
import "@testing-library/jest-dom";
import { prettyDOM } from "@testing-library/dom";
import { CreateCollectionsPayload as Payload } from "@utils/collections.type";
import App from "@container/SignUpForm";

const mocks = vi.hoisted(() => {
  return {
    handle: vi.fn(),
  };
});

describe("testing SignUpForm container", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    render(
      <App
        role="main"
        handleSubmit={mocks.handle}
        data={{ password: "", email: "", name: "" }}
      >
        <button role="button">Submit</button>
      </App>
    );
  });
  beforeAll(() => {
    // console.log("pretty DOM");
    // console.log(prettyDOM());
  });
  it("input in document", () => {
    const inputPassword = screen.getByRole("input-password");
    const inputEmail = screen.getByRole("input-email");
    const inputName = screen.getByRole("input-name");
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputName).toBeInTheDocument();
  });

  it("insert  submit  with password email and name", () => {
    const inputPassword = screen.getByRole("input-password");
    const inputEmail = screen.getByRole("input-email");
    const inputName = screen.getByRole("input-name");
    const button = screen.getByRole("button");
    const PASSWORD_VALUE = "some password";
    const EMAIL_VALUE = "some email";
    const NAME_VALUE = "some name";
    fireEvent.input(inputPassword, {
      target: {
        value: PASSWORD_VALUE,
      },
    });
    fireEvent.input(inputEmail, {
      target: {
        value: EMAIL_VALUE,
      },
    });
    fireEvent.input(inputName, {
      target: {
        value: NAME_VALUE,
      },
    });

    fireEvent.submit(button);
    waitFor(() => {
      expect(mocks.handle).toHaveBeenCalledOnce();
      expect(mocks.handle).toHaveBeenCalledWith({
        password: PASSWORD_VALUE,
        email: EMAIL_VALUE,
        name: NAME_VALUE,
      });
    });
  });
});
