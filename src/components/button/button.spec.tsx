import { Button } from "./button";
import { render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";

const defaultProps = {
  children: "test-child",
  onClick: () => {},
};

const factory = (props?: Partial<React.ComponentProps<typeof Button>>) =>
  render(<Button {...defaultProps} {...props} />);

beforeEach(() => {
  jest.clearAllMocks();
});

test("renders button", () => {
  factory();

  expect(screen.getByRole("button")).toBeVisible();
});

test("renders button label", () => {
  factory({ children: "button label" });

  expect(screen.getByText("button label")).toBeVisible();
});

test("fires click even when clicked", async () => {
  const user = userEvent.setup();
  const mockOnClick = jest.fn();
  factory({ onClick: mockOnClick });

  const button = screen.getByRole("button");
  await user.click(button);

  expect(mockOnClick).toHaveBeenCalled();
});

test("is disabled", () => {
  factory({ disabled: true });

  expect(screen.getByRole("button")).toBeDisabled();
});
