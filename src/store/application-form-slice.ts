import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ApplicationFormState = {
  [form: string]: {
    [key: string]: string;
  };
};

const initialState: ApplicationFormState = {};

export const applicationFormSlice = createSlice({
  name: "application-form-slice",
  initialState,
  reducers: {
    createField: (
      state,
      action: PayloadAction<{ form: string; key: string; value: string }>
    ) => {
      const formState = state[action.payload.form];
      if (!formState) {
        state[action.payload.form] = {};
      }
      
      const fieldState = state[action.payload.form][action.payload.key];
      if (!fieldState) {
        state[action.payload.form][action.payload.key] = action.payload.value;
      }
    },
    setField: (
      state,
      action: PayloadAction<{ form: string; key: string; value: string }>
    ) => {
      state[action.payload.form][action.payload.key] = action.payload.value;
    },
  },
});

export const { setField, createField } = applicationFormSlice.actions;

export default applicationFormSlice.reducer;
