import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ApplicationFormState = {
  [key: string]: string;
};

const initialState: ApplicationFormState = {};

export const applicationFormSlice = createSlice({
  name: "application-form-slice",
  initialState,
  reducers: {
    // TODO: separate setField and createField, to add guard if there are duplicating field names
    setField: (
      state,
      action: PayloadAction<{ key: string; value: string }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { setField } = applicationFormSlice.actions;

export default applicationFormSlice.reducer;
