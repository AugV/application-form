import React from "react";
import { renderWithProviders } from "../../utils/test-utils";
import { Field } from "./field";
import { screen } from "@testing-library/react";

const defaultProps = {
  formId: "form-id",
  fieldId: "field-id",
  inputProps: { label: "label" },
  component: () => <div></div>,
};

const factory = (props?: Partial<React.ComponentProps<typeof Field>>) =>
  renderWithProviders(<Field {...defaultProps} {...props} />);

test("renders provided compoenent", () => {
  factory({ component: () => <div>Mock field component</div> });

  expect(screen.getByText("Mock field component")).toBeVisible();
});
