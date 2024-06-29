
import { PlantStateI } from "../redux/slices/planSliser"
import { history_trip_category, recommendation_trip_palan, trip_history_or_place } from "../utils/API_urls"
import { getRequest } from "../utils/request"

class PlanService {
    static recommendationPlan = () => {
        return getRequest(recommendation_trip_palan)
    }

    static getPlanCategory = () => {
        return getRequest(history_trip_category)
    }

    static plantList = (state: any) => {
        let plan: PlantStateI = state?.plan as PlantStateI

        const { planListPageSize,  planListCurrentPage, searchLocation, searchText, categoryID } = plan

        return getRequest(`${trip_history_or_place}?size=${planListPageSize || ""}&page=${planListCurrentPage || ""}&location=${searchLocation || ""}&search=${searchText}&category=${categoryID || ""}`)

    }

    // static getPlanDetail = (id: string) => {
    //     return getRequest(`${trip_restaurant}/${id}`)
    // }
}

export default PlanService