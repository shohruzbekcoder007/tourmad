import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Drive, Error, ForgotPassword, Hotel, Main, Plan, Protected, Restaurant, SetPassword, SignIn, SignUp, Ticket, Verify, Welcome, UserAccount, UserHistory, HotelFilter, Favourites, HotelDetail, ReataurantDetail, ReataurantFilter, Users, DriveFilter, History, HistoryDetail } from './pages';
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
            <Route index element={<Welcome/>}/>
            <Route path="public" element={<Welcome/>}/>
            <Route path='hotel-filter' element={<HotelFilter />} />
            <Route path='hotel-detail' element={<HotelDetail />} />
            <Route path='restaurant-filter' element={<ReataurantFilter />} />
            <Route path='restaurant-detail' element={<ReataurantDetail />} />
            <Route path='drive-filter' element={<DriveFilter />} />
            <Route path='history' element={<History />} />
            <Route path='history-detail' element={<HistoryDetail />} />
            <Route path="protected" element={<Protected/>}>
              <Route index element={<Navigate to="hotel"/>}/>
              <Route path="hotel" element={<Hotel/>} />
              <Route path="ticket" element={<Ticket/>}/>
              <Route path="restaurant" element={<Restaurant/>}/>
              <Route path="drive" element={<Drive/>}/>
              <Route path="plan" element={<Plan/>}/>
              <Route path='favourites' element={<Favourites/>}/>
            </Route>
          </Route>
          <Route path="users" element={<Users />}>
            <Route index element={<UserAccount />}/>
            <Route path='users-account' element={<UserAccount />}/>
            <Route path='users-history' element={<UserHistory />}/>
            <Route path='users-payment' element={<p>Users Payments</p>}/>
          </Route>
          <Route path="sign-in" element={<SignIn />}/>
          <Route path="sign-up" element={<SignUp />}/>
          <Route path="set-password" element={<SetPassword/>}/>
          <Route path="forgot-password" element={<ForgotPassword/>}/>
          <Route path="verify" element={<Verify/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </ThemeProvider>
    </MuiTheme>
  );
}

export default App;
