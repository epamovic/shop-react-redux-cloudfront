import { createTheme, type ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#ce62c1",
    },
    secondary: {
      main: "#f50057",
    },
  },
};

export const theme = createTheme(themeOptions);
