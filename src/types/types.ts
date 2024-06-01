export type PaginationQueryType = {
    current_page: number,
    page_size: number,
}

export type HotelQueryType = {
    query?: PaginationQueryType
}