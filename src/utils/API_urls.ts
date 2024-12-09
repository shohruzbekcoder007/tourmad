export const host: string = process.env.REACT_APP_API_URL as string;

export const login: string = "accounts/login/";
export const token_refresh: string = "accounts/TokenRefresh";
export const me: string = "accounts/me/";

export const trip_hotel: string = "trip/trip-hotel";
export const trip_hotel_oder: string = "trip/trip-hotel-oder";
export const location_hotel: string = "common/location-hotel";
export const recommendation_trip_hotel: string =
  "trip/recommendation-trip-hotel";

export const recommendation_trip_restaurant =
  "trip/recommendation-trip-restaurant";
export const recommendation_trip_drive = "/trip/recommendation-trip-drive";
export const common_location = "common/location";
export const history_trip_history = "history/trip-history";
export const consulting_list = "consulting/list";
export const consulting_category_list = "consulting/categories";

export const trip_restaurant = "trip/trip-restaurant";

export const trip_list = "/trip/trip-list";
export const trip_trip = "/trip/trip";

export const driver_list = "drive/drivers";
export const driver_detail = "/drive/driver/";
export const my_driver_review = "/drive/reviews/";
export const drive_client_review = "/drive/client-review/";
export const driver_order_create = "/drive/order-create/";

export const common_language = "common/language";

export const home_banner = "/home/images/";

export const trip_restaurant_oder = "trip/trip-restaurant-oder";

export const location_restaurant = "/common/location-restaurant";
export const location_drive = "common/location-drive";

export const recommendation_trip_palan = "trip/recommendation-trip-plan";
export const history_trip_category = "history/trip-category";
export const trip_history_or_place = "history/trip-history-or-place";

export const common_location_history = "common/location-history";
export const consulting_detail = "consulting/detail";

export const accounts_subscribe_create = "accounts/subscribe";

export const accounts_profile = "accounts/profile/";
export const with_google = "accounts/social_auth/google/";

export const trip_trip_drive = "trip/trip-drive/";
export const trip_trip_daily_plans = (id: string) =>
  `trip/trip/${id}/daily-plans`;
export const location_daily = "common/location-hotel";
export const recommendation_trip_daily = "trip/recommendation-trip-hotel";
// export const trip_daily = ""

export const my_wishlist = "trip/my-wishlist";
export const post_like = "drive/wishlist-driver";
export const post_like_r = "trip/wishlist-restaurant";
export const post_like_h = "history/wishlist";
export const post_like_ht = "trip/wishlist-hotel";
export const location_newTrip = "trip/recommendation-trip";
export const recommendation_trip_newTrip = "trip/default-trip-list/";
export const cheap_ticket_prices = "trip/ticket/cheap-prices/";
export const cities_ticket = "trip/ticket/cities/";
export const accounts_register = "accounts/register/";
