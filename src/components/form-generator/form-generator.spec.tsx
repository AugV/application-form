// TODO: sort import, let's allow linter to help with this
import { render, screen } from "@testing-library/react";
import React from "react";
import { FieldType, FormGenerator } from "./form-generator";

/* Here is a little bit different way of structuring tests. Not personally a fan, because it can result in deep nesting, 
    but it has its benefits, e.g. description or setup re-usage 
*/

const factory = (props: React.ComponentProps<typeof FormGenerator>) =>
  render(<FormGenerator {...props} />);

describe("FormGenerator component", () => {
  describe("given parameter to render text field", () => {
    beforeEach(() => {
      // eslint-disable-next-line testing-library/no-render-in-setup
      factory({
        name: "test-form-name",
        formModel: [
          {
            id: "test-field-id",
            label: "Test text field",
            type: FieldType.TEXT_FIELD,
          },
        ],
      });
    });

    it("should render form element", () => {
      expect(screen.getByRole("form")).toBeVisible();
    });

    it("should render text field", () => {
      expect(screen.getByLabelText("Test text field")).toBeVisible();
    });
  });
});
