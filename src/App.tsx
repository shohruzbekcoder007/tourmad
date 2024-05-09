import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main, Protected, TravelFilters, Welcome } from './pages';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MuiTheme
} from "@mui/material/styles";
import { lightTheme } from './theme/mui/light';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Verify from './pages/Verify';
import ForgotPassword from './pages/ForgotPassword';
import SetPassword from './pages/SetPassword';
import Error from './pages/Error';
import FlightDetail from './pages/FlightDetail';

const App: React.FC = () => {
  return (
    <MuiTheme theme={lightTheme}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Main/>}>
            <Route index element={<Welcome/>}/>
            <Route path="public" element={<Welcome/>}/>
            <Route path="protected" element={<Protected/>}>
              <Route index element={<TravelFilters/>}/>
              <Route path='flight-detail' element={<FlightDetail/>}/>
            </Route>
          </Route>
          <Route path="users" element={<p>user</p>} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="set-password" element={<SetPassword />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="verify" element={<Verify />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </ThemeProvider>
    </MuiTheme>
  );
}

export default App;
