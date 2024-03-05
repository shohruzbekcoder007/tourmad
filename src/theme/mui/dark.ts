import { ThemeOptions, createTheme } from '@mui/material/styles';

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#0f0',
      contrastText: 'rgba(0,0,0,0.87)',
    },
  },
};

export const darkTheme = createTheme(darkThemeOptions);
