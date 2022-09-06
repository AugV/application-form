import { render, screen } from "@testing-library/react";
import React from "react";
import { TextField } from "./text-field";

const defaultProps = {
  label: "default-label",
};

const factory = (props?: React.ComponentProps<typeof TextField>) =>
  render(<TextField {...defaultProps} {...props} />);

/* A topic of disscussion if such tests are needed since it's just a wrapper for component from component library
    However if we do have such tests, 
    1) we can be more confident about our integration with the consumed components, especially during version bumps
    2) in case we'd need to switch out the library, we know we're not losing any functionality or introducing bugs.
*/

test("should render input element", () => {
  factory();

  expect(screen.getByRole("textbox")).toBeVisible();
});

test("should have label", () => {
  factory({ label: "test-label" });

  expect(screen.getByLabelText("test-label")).toBeVisible();
});
