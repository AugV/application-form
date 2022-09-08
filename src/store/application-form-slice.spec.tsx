import reducer, { createField, setField, Validation } from "./application-form-slice";

test("default state is empty", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({});
});

test("creates field in store", () => {
  expect(
    reducer(
      undefined,
      createField({
        form: "form-name",
        key: "new-field",
        value: "new-field-value",
      })
    )
  ).toEqual({ "form-name": { "new-field": { value: "new-field-value" } } });
});

test("updates field value", () => {
  expect(
    reducer(
      { "form-name": { "existing-field": { value: "old-value" } } },
      setField({ form: "form-name", key: "existing-field", value: "new-value" })
    )
  ).toEqual({ "form-name": { "existing-field": { value: "new-value" } } });
});

test("sets error message, when field doesn't pass REQUIRED validation", () => {
  expect(
    reducer(
      { "form-name": { "existing-field": { value: "old-value" } } },
      setField({ form: "form-name", key: "existing-field", value: "", validations: [Validation.REQUIRED] })
    )
  ).toEqual({ "form-name": { "existing-field": { value: "", errorMessage: "This field is required" } } });
});
