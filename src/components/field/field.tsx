import React, { ChangeEvent } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setField } from "../../store/application-form-slice";
import { RootState } from "../../store/store";

type FieldProps = {
  formId: string;
  fieldId: string;
  inputProps: Record<string, unknown>;
  // TODO: narrower type
  component: (props: any) => JSX.Element;
};

export const Field = ({
  formId,
  fieldId,
  inputProps,
  component: InputComponent,
}: FieldProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setField({
        form: formId,
        key: fieldId,
        // TODO: here to set initial value
        value: "test",
      })
    );
  }, []);

  const value = useSelector(
    (state: RootState) => state.applicationForm?.[formId]?.[fieldId]
  ) || "";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setField({
        form: formId,
        key: fieldId,
        value: event.currentTarget.value,
      })
    );
  };

  return (
    <>
      <InputComponent {...inputProps} value={value} onChange={handleChange}/>
    </>
  );
};
