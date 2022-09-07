import { configureStore } from "@reduxjs/toolkit";
import applicationFormReducer from "./application-form-slice";

export const store = configureStore({
  reducer: {
    applicationForm: applicationFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
