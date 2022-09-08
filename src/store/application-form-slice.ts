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
    setField: (
      state,
      action: PayloadAction<{ form: string; key: string; value: string }>
    ) => {
      if (!state[action.payload.form]) {
        state[action.payload.form] = {};
      }
      state[action.payload.form][action.payload.key] = action.payload.value;
    },
  },
});

export const { setField } = applicationFormSlice.actions;

export default applicationFormSlice.reducer;
