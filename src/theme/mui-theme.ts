import { createTheme } from "@mui/material";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#2B64F5",
    },
    secondary: {
      main: "#F5F5F5",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});
