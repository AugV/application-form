import reducer, { setField } from "./application-form-slice";

test("default state is empty", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({});
});

test("sets field in store", () => {
  expect(
    reducer(undefined, setField({ key: "new-field", value: "new-field-value" }))
  ).toEqual({ "new-field": "new-field-value" });
});

test("updates field value", () => {
  expect(
    reducer(
      { "existing-field": "old-value" },
      setField({ key: "existing-field", value: "new-value" })
    )
  ).toEqual({ "existing-field": "new-value" });
});
