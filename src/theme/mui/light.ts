import { ThemeOptions, createTheme } from '@mui/material/styles';

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1B1464',
      contrastText: '#ffffff',
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
    button: { // works
      color: '#112211' // doesn't work
    }
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