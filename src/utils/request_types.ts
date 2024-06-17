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
    start_time: null,
    end_time: null
}