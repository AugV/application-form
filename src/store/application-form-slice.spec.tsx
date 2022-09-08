import reducer, { setField } from "./application-form-slice";

test("default state is empty", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({});
});

test("sets field in store", () => {
  expect(
    reducer(
      undefined,
      setField({
        form: "form-name",
        key: "new-field",
        value: "new-field-value",
      })
    )
  ).toEqual({ "form-name": { "new-field": "new-field-value" } });
});

test("updates field value", () => {
  expect(
    reducer(
      { "form-name": { "existing-field": "old-value" } },
      setField({ form: "form-name", key: "existing-field", value: "new-value" })
    )
  ).toEqual({ "form-name": { "existing-field": "new-value" } });
});
