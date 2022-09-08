import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// TODO: extract validation out of here
export const Validation = { REQUIRED: "required" } as const;

const isValid = {
  [Validation.REQUIRED]: (value: string) => !!value,
};

const validationMessages = {
  [Validation.REQUIRED]: "This field is required",
};

type ApplicationFormState = {
  [form: string]: {
    [key: string]: {
      value: string;
      errorMessage?: string;
      isInvalid?: boolean;
    };
  };
};

type FieldMutationAction = {
  form: string;
  key: string;
  value: string;
  validations?: [typeof Validation[keyof typeof Validation]];
};

const initialState: ApplicationFormState = {};

export const applicationFormSlice = createSlice({
  name: "application-form-slice",
  initialState,
  reducers: {
    createField: (state, action: PayloadAction<FieldMutationAction>) => {
      const isInvalid = action.payload.validations?.find((validationKey) => {
        return !isValid[validationKey](action.payload.value);
      });

      const formState = state[action.payload.form];
      if (!formState) {
        state[action.payload.form] = {};
      }

      const fieldState = state[action.payload.form][action.payload.key];
      if (!fieldState) {
        state[action.payload.form][action.payload.key] = {
          value: action.payload.value,
          isInvalid: !!isInvalid,
        };
      }
    },
    setField: (state, action: PayloadAction<FieldMutationAction>) => {
      const failedValidationKey = action.payload.validations?.find(
        (validationKey) => {
          return !isValid[validationKey](action.payload.value);
        }
      );
      const errorMessage =
        failedValidationKey && validationMessages[failedValidationKey];

      state[action.payload.form][action.payload.key] = {
        value: action.payload.value,
        errorMessage,
        isInvalid: !!failedValidationKey,
      };
    },
  },
});

export const { setField, createField } = applicationFormSlice.actions;

export default applicationFormSlice.reducer;
