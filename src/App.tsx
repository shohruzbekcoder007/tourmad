import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main, Welcome } from './pages';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MuiTheme
} from "@mui/material/styles";
import { lightTheme } from './theme/mui/light';

const App: React.FC = () => {
  return (
    <MuiTheme theme={lightTheme}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Main/>}>
            <Route path="public" element={<Welcome/>}/>
          </Route>
          <Route path="users" element={<p>user</p>} />
          <Route path="signin" element={<p>login</p>} />
          <Route path="signup" element={<p>login</p>} />
        </Routes>
      </ThemeProvider>
    </MuiTheme>
  );
}

export default App;
