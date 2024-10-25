import { MyTripDailyDriversType, MyTripDailyHistoryOrPlacesType, MyTripDailyHotelsType, MyTripDailyLocationType, MyTripDailyRestaurantsType } from "./response_types"

export type TripCreateType = {
    id?: number | null,
    title: string | null,
    location: number | (number | null)[] | null,
    start_time: Date | string | null,
    end_time: Date | string | null
}

export type HotelToTripType = {
    id?: number | null
    trip: number,
    hotel: number,
    start_time: string,
    end_time: string
}

export type RestaurantToTripType = {
    id?: number | null
    trip: number,
    restaurant: number,
    time: string
}

export type SubscribeType = {
    email: string | ""
}
export type DailyPlanDataType = {
    date: string | null,
    daily_price: number | null,
    hotels: MyTripDailyHotelsType[] | null,
    restaurants: MyTripDailyRestaurantsType[] | null,
    drivers: MyTripDailyDriversType[] | null,
    history_or_places: MyTripDailyHistoryOrPlacesType[] | null
}

export type DailyPlanType = {
    id: number | null,
    title: string | null,
    location: MyTripDailyLocationType[],
    start_time: string | null,
    end_time: string | null,
    price: string | null,
    daily_plans: DailyPlanDataType[] | null
}