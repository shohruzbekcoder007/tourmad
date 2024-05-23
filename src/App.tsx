import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Drive, Error, ForgotPassword, Hotel, HotelFilter, Main, Plan, Protected, Restaurant, SetPassword, SignIn, SignUp, Ticket, Verify, Welcome } from './pages';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MuiTheme
} from "@mui/material/styles";
import { lightTheme } from './theme/mui/light';
import Users from './pages/Users';

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
              <Route index element={<Navigate to="hotel"/>}/>
              <Route path="hotel" element={<Hotel/>}/>
              <Route path="hotel-filter" element={<HotelFilter/>}/>
              <Route path="ticket" element={<Ticket/>}/>
              <Route path="restaurant" element={<Restaurant/>}/>
              <Route path="drive" element={<Drive/>}/>
              <Route path="plan" element={<Plan/>}/>
            </Route>
          </Route>
          <Route path="users" element={<Users />}> 
            <Route index element={<p>User Account</p>} />
            <Route path='users-account' element={<p>User Account</p>} />
            <Route path='users-history' element={<p>User History</p>} />
            <Route path='users-payment' element={<p>Users Payments</p>} />
          </Route>
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
