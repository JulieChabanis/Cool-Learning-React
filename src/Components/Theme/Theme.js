import { createTheme } from "@mui/material";

const colors = {
  primary: "#DCD7C9",
  secondary: "#A27B5C",
  accent: "#3F4E4F",
  background: "#2C3639",
}; 

const fonts = {
  primaryFont: "Arial, sans-serif",
  secondaryFont: "Georgia, serif",
  accentFont: "Verdana, sans-serif",
};

const theme = createTheme ({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary, 
    },
  },
  typography: {
    fontFamily: fonts.primaryFont,
    h1: {
      fontFamily: fonts.primaryFont,
    },
    h2: {
      fontFamily: fonts.secondaryFont,
    },
    h3: {
      fontFamily: fonts.accentFont,
    },
  },
});

export default theme; 