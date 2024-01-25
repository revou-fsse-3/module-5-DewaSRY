import { describe, expect, vi, it, beforeAll, beforeEach } from "vitest";
import { render, fireEvent, screen, act, waitFor } from "@libs/reactTesting";
import "@testing-library/jest-dom";
import Authentications from "@layout/Authentications";
it("testing Authentications sign-in  match with snapshot", () => {
  render(
    <Authentications role="main" page={undefined}>
      some children
    </Authentications>
  );
  const main = screen.getAllByRole("main");
  expect(main).toMatchSnapshot();
});
