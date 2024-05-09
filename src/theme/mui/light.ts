import { ThemeOptions, createTheme } from '@mui/material/styles';

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#8DD3BB',
      contrastText: '#112211',
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#112211"
    },
    success: {
      main: "#121",
      contrastText: "#ffffff"
    },
    error: {
      main: "#FF8682",
      contrastText: "#121"
    },
  },
  typography: {
    fontFamily:
      '"Montserrat"',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Montserrat"',
          textTransform: "inherit"
        }
      }
    }
  },
};

export const lightTheme = createTheme(lightThemeOptions);