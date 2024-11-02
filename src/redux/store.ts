import { configureStore } from "@reduxjs/toolkit";
import langSlice from "./slices/langSlice";
import userSlice from "./slices/userSlice";
import hotelSlice from "./slices/hotelSlice";
import restaurantSlice from "./slices/restaurantSlice";
import driverSlice from "./slices/driverSliser";
import commonLocationSlice from "./slices/commonLocationSlicer";
import historySlice from "./slices/historySlice";
import consultingSlice from "./slices/consultingSlice";
import tripSlice from "./slices/tripSlice";
import commonLanguageSlice from "./slices/commonLanguage";
import planSlice from "./slices/planSliser";
import homeSlice from "./slices/homeSlice";
import accountSlice from "./slices/accountSlice";
import dailySlice from "./slices/dailySlice";
import wishListSlice from "./slices/wishListSlice";

const store = configureStore({
  reducer: {
    language: langSlice,
    user: userSlice,
    hotel: hotelSlice,
    daily: dailySlice,
    restaurant: restaurantSlice,
    driver: driverSlice,
    commonLocation: commonLocationSlice,
    history: historySlice,
    consulting: consultingSlice,
    trip: tripSlice,
    commonlanguage: commonLanguageSlice,
    home: homeSlice,
    plan: planSlice,
    account: accountSlice,
    wishList: wishListSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
