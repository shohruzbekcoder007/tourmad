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