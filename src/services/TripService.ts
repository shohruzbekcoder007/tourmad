import {
  trip_hotel_oder,
  trip_list,
  trip_restaurant_oder,
  trip_trip,
  trip_trip_daily_plans,
  trip_trip_drive,
} from "../utils/API_urls";
import { deleteRequest, getRequest, postRequest } from "../utils/request";
import {
  HotelToTripType,
  RestaurantToTripType,
  TripCreateType,
} from "../utils/request_types";

class TripService {
  static createTrip = (trip: TripCreateType) => {
    return postRequest(trip_list, trip);
  };

  static getTripList = () => {
    return getRequest(trip_list);
  };

  static addHotelToTrip = (dto: HotelToTripType) => {
    return postRequest(trip_hotel_oder, dto);
  };

  static addRestaurant = (dto: RestaurantToTripType) => {
    return postRequest(trip_restaurant_oder, dto);
  };

  static deleteTrip = (trip_id: number) => {
    return deleteRequest(`${trip_trip}/${trip_id}`);
  };

  static getTripDriveDetail = (id: string) => {
    return getRequest(`${trip_trip_drive}${id}`);
  };

  static getTripDailyPlanDetail = (id: string, query?: string) => {
    if(query) {
      return getRequest(`${trip_trip_daily_plans(id)}?trip_type=${query}`)
    } else {
      return getRequest(`${trip_trip_daily_plans(id)}`)
    }
  }
}

export default TripService;
