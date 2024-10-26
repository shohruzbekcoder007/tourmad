import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Drive,
  Error,
  ForgotPassword,
  Hotel,
  Main,
  Plan,
  Protected,
  Restaurant,
  SetPassword,
  SignIn,
  SignUp,
  Ticket,
  Verify,
  Welcome,
  UserAccount,
  UserHistory,
  HotelFilter,
  Favourites,
  HotelDetail,
  ReataurantDetail,
  ReataurantFilter,
  Users,
  DriveFilter,
  DriveDetail,
  Consulting,
  History,
  HistoryDetail,
  MyDriver,
  MyDriverDetail,
  MyTrip,
  TripDetail,
  ConsultingDetail,
  PlanDetail,
  PlanFilter,
  Daily,
  DailyFilter,
  LoginGoogle,
  Map,
} from "./pages";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiTheme } from "@mui/material/styles";
import { lightTheme } from "./theme/mui/light";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import 'leaflet/dist/leaflet.css';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <MuiTheme theme={lightTheme}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route index element={<Welcome />} />
              <Route path="consulting" element={<Consulting />} />
              <Route path="consulting-detail">
                <Route path=":id" element={<ConsultingDetail />} />
              </Route>
              <Route index element={<Welcome />} />
              <Route path="history" element={<History />} />
              <Route path="history-detail">
                <Route path=":id" element={<HistoryDetail />} />
              </Route>
              <Route path="public" element={<Welcome />} />
              <Route path="hotel-filter" element={<HotelFilter />} />
              <Route path="hotel-detail">
                <Route path=":id" element={<HotelDetail />} />
              </Route>
              <Route path="restaurant-filter" element={<ReataurantFilter />} />
              <Route path="restaurant-detail">
                <Route path=":id" element={<ReataurantDetail />} />
              </Route>
              <Route path="drive-filter" element={<DriveFilter />} />
              <Route path="drive-detail/:id" element={<DriveDetail />} />
              <Route path="history" element={<History />} />
              <Route path="history-detail" element={<HistoryDetail />} />
              <Route path="plan-detail">
                <Route path=":id" element={<PlanDetail />} />
              </Route>
              <Route path="plan-filter" element={<PlanFilter />} />
              <Route path="my-trip" element={<MyTrip />} />
              <Route path="trip-detail/:id" element={<TripDetail />} />
              <Route path="my-driver" element={<MyDriver />} />
              <Route path="driver-detail">
                <Route path=":id" element={<MyDriverDetail />} />
              </Route>
              <Route path="protected" element={<Protected />}>
                <Route index element={<Navigate to="hotel" />} />
                <Route path="daily" element={<Daily/>}/>
                <Route path="hotel" element={<Hotel />} />
                <Route path="ticket" element={<Ticket />} />
                <Route path="restaurant" element={<Restaurant />} />
                <Route path="drive" element={<Drive />} />
                <Route path="plan" element={<Plan />} />
                <Route path="favourites" element={<Favourites />} />
                <Route path="map" element={<Map/>}/>
              </Route>

              <Route path="daily-detail/:id" element={<HotelDetail/>}/>
              <Route path="daily-filter" element={<DailyFilter />} />
            </Route>
            <Route path="users" element={<Users />}>
              <Route index element={<UserAccount />} />
              <Route path="users-account" element={<UserAccount />} />
              <Route path="users-History" element={<UserHistory />} />
              <Route path="users-payment" element={<p>Users Payments</p>} />
            </Route>
            <Route path="oauth/callback" element={<LoginGoogle/>}/>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="set-password" element={<SetPassword />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="verify" element={<Verify />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </ThemeProvider>
      </MuiTheme>
    </I18nextProvider>
  );
};

export default App;
