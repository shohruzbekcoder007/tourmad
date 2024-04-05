import { ThemeOptions, createTheme } from '@mui/material/styles';

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#8DD3BB',
      contrastText: '#112211',
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
        }
      }
    }
  },
};

export const lightTheme = createTheme(lightThemeOptions);