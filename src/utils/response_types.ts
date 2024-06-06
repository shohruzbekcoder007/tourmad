export type GalleryType = {
    id: number | null,
    image: string | null
}

export type RoomStyle = {
    id?: number | null,
    style: 'basic' | 'premium' | null,
    price: number | null
}

export type LocationType = {
    id: number | null,
    name: string | null,
    parent: number | null,
    photo: string | null,
    hotels: number | null
}

export type UserType = {
    birth_date: Date | null,
    email: string | null,
    first_name: string | null,
    gender: "male" | "female",
    last_name: string | null,
    middle_name: string | null,
    role: "user" | "admin"
}

export type RecommendationType = {
    id: number | null,
    location: LocationType | null,
    gallery: GalleryType[] | null,
    room_style: RoomStyle[] | null,
    banner: string | null,
    card: string | null,
    name: string | null,
    desc: string | null,
    body: string | null,
    longitude: number | null,
    latitude: number | null,
    rate: number | null,
    grade: number | null,
    price: number | null
}

