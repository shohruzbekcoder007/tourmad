import { RestaurantStateI } from "../redux/slices/restaurantSlice"
import { recommendation_trip_restaurant, trip_restaurant } from "../utils/API_urls"
import { getRequest } from "../utils/request"

class RestaurantService {
    static recommendationRestaurant = () => {
        return getRequest(recommendation_trip_restaurant)
    }

    static restaurantList = (state: any) => {
        let restaurant: RestaurantStateI = state?.restaurant as RestaurantStateI

        const { restaurantListPageSize,  restaurantListCurrentPage, searchLocation, searchText } = restaurant

        return getRequest(`${trip_restaurant}?size=${restaurantListPageSize}&page=${restaurantListCurrentPage}&location=${searchLocation || ""}&search=${searchText}`)

    }

    static getRestaurantDetail = (id: string) => {
        return getRequest(`${trip_restaurant}/${id}`)
    }
}

export default RestaurantService