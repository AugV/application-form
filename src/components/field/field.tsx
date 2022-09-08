import React, { ChangeEvent } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createField,
  setField,
  Validation,
} from "../../store/application-form-slice";
import { RootState } from "../../store/store";

type FieldProps = {
  formId: string;
  fieldId: string;
  inputProps: Record<string, unknown>;
  validations?: [typeof Validation[keyof typeof Validation]];
  // TODO: narrower type
  component: (props: any) => JSX.Element;
};

// This layer is for connecting UI to Redux
export const Field = ({
  formId,
  fieldId,
  validations,
  inputProps,
  component: InputComponent,
}: FieldProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      createField({
        form: formId,
        key: fieldId,
        // TODO: here to set initial value
        value: "",
        validations,
      })
    );
  }, [dispatch, formId, fieldId, validations]);

  const { value, errorMessage } = useSelector(
    (state: RootState) => state.applicationForm?.[formId]?.[fieldId]
  ) || { value: "" };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setField({
        form: formId,
        key: fieldId,
        value: event.currentTarget.value,
        validations,
      })
    );
  };

  return (
    <>
      <InputComponent
        {...inputProps}
        value={value}
        onChange={handleChange}
        errorMessage={errorMessage}
      />
    </>
  );
};
