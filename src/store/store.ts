import { configureStore } from "@reduxjs/toolkit";
import applicationFormReducer from "./application-form-slice";

export const store = configureStore({
  reducer: {
    applicationForm: applicationFormReducer,
  },
});

const setupStore = () => store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>