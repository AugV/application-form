import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.scss";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import { muiTheme } from "./theme/mui-theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={muiTheme}>
    <Provider store={store}>
      <App />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
