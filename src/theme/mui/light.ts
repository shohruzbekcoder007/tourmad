import { ThemeOptions, createTheme } from '@mui/material/styles';

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#0f0'
    },
  },
  typography: {
    fontFamily:
      '"Montserrat"',
  }
};

export const lightTheme = createTheme(lightThemeOptions);