export type GalleryType = {
    id: number | null,
    image: string | null
}

export type RoomStyle = {
    id?: number | null,
    style: 'basic' | 'premium' | null,
    price: number | null,
    card: string | null,
    title?: string | null
}

export type LocationType = {
    id: number | null,
    name: string | null,
    parent: number | null,
    photo: string | null,
    hotels?: number | null,
    restaurants?: number | null,
    drivers: number | null
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

export type UserDrivers = {
    birth_date: Date | null,
    email: string | null,
    first_name: string | null,
    gender: "male" | "female",
    last_name: string | null,
    middle_name: string | null,
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

export type CommonLocationType = {
    id: number,
    name: string,
    parent: number | null,
    photo: string
}

export type HistoryOrPlaceCategryType = {
    id: number | null,
    title: string | null,
    logo: string | null,
    count: number | null
}

export type HistoryType = {
    id: number | null,
    title: string | null,
    banner: string | null,
    card: string | null,
    category: HistoryOrPlaceCategryType | null,
    body: string | null,
    audio: string | null,
    location: LocationType | null,
    latitude: number | null,
    longitude: number | null
}

export type RestaurantType = {
    id: number | null,
    location: LocationType | null,
    gallery: GalleryType[] | null,
    banner: string | null,
    card: string | null,
    name: string | null,
    desc: string | null,
    body: string | null,
    longitude: number | null,
    latitude: number | null,
    rate: number | null,
    grade: number | null,
    price: number | null,
    reviews_count: number | null
}

export type TripType = {
    id: number | null,
    title: string | null,
    location: LocationType[] | null,
    start_time: Date | string | null,
    end_time: Date | string | null
}
export type Location = {
    id: number | null,
    name: string | null,
    parent: number | null,
    photo: string | null
}

export type AutoModel = {
    id: number | null,
    name: string | null,
    status: string | null,
}

export type Language = {
    id: number ,
    lang: string 
}

export type AutoNumber = {
    region: number,
    number: string | null,
    country: string | null
}

export type ReviewsType = {
    id: number | null,
    user: newUserType | null,
    rate: number | null,
    review: string | null,   
    created_at: string | null,
}

export type DriverType = {
    id: number,
    user: UserDrivers,
    avg_rate: number,
    location: Location,
    auto_model: AutoModel ,
    auto_number: AutoNumber ,
    auto_photo: string ,
    auto_doc1: string,
    auto_doc2: string ,
    languages: Language[] ,
    price: number,
    orders_count: number,
}

export type newUserType = {
    avatar: string | null,
    id: number | null,
    first_name: string | null,
    last_name: string | null,
    email: string | null,
    gender: string | null,
    phone_number: string | null,
}

export type gallery = {
    id: string | "",
    image: string | "",
}

export type DriveDetailType = {
    id: number | null,
    user: newUserType | null,
    banner: string | "",
    auto_model: AutoModel | null,
    auto_number: AutoNumber | null,
    auto_photo: string | null,
    auto_doc1: string | null,
    auto_doc2: string | null,
    languages: Language[] | null,
    price: number | null,
    orders_count: number | null,
    avg_rate: number | null,
    description: string | null,
    location: CommonLocationType | null,
    galleries: gallery [] | null
  }

  export type DriveClientReviewType = {
    rate: number | null,
    review: string | null
  }

  export type HomeBannerType = {
    banner: string | null,
    history: string | null,
    hotels: string | null,
  }

export type RestaurantDetailType = {
    id: number | null,
    location: LocationType | null,
    banner: string | null,
    card: string | null,
    name: string | null,
    desc: string | null,
    body: string | null,
    longitude: number | null,
    latitude: number | null,
    rate: number | null,
    grade: number | null,
    gallery: GalleryType[] | null,
    reviews_count: number | null,
}