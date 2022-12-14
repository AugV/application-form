import { screen } from "@testing-library/react";
import React from "react";
import { TextField } from "./text-field";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/test-utils";

const defaultProps = {
  label: "default-label",
  onChange: () => ({ payload: { key: "", value: "" }, type: "" }),
  value: "",
};

const factory = (props?: Partial<React.ComponentProps<typeof TextField>>) =>
  renderWithProviders(<TextField {...defaultProps} {...props} />);

/* A topic of disscussion if such tests are needed since it's just a wrapper for component from component library.
    However if we do have such tests, 
    1) we can be more confident about our integration with the consumed components, especially during version bumps
    2) in case we'd need to switch out the library, we know we're not losing any functionality or introducing bugs.
*/

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders input element", () => {
  factory();

  expect(screen.getByRole("textbox")).toBeVisible();
});

test("renders provided text value", () => {
  factory({ value: "test-value" });

  expect(screen.getByDisplayValue("test-value")).toBeVisible();
});

test("has label", () => {
  factory({ label: "test-label" });

  expect(screen.getByLabelText("test-label")).toBeVisible();
});

test("fires change callback when value is edited", async () => {
  const user = userEvent.setup();
  const mockCallback = jest.fn(() => ({ payload: { key: "", value: "" }, type: "" }));
  factory({ label: "test-label", onChange: mockCallback });

  const inputField = screen.getByLabelText("test-label");
  await user.type(inputField, "new-test-value");

  expect(mockCallback).toHaveBeenCalled();
});

test("renders error message", () => {
  factory({ errorMessage: "error message" });

  expect(screen.getByText("error message")).toBeVisible()
})
