import { DriverState } from "../redux/slices/driverSliser"
import { driver_detail, driver_list, my_driver_review, recommendation_trip_drive } from "../utils/API_urls"
import { getRequest } from "../utils/request"

class DriverService {
    static recommendationDrive = () => {
        return getRequest(recommendation_trip_drive)
    }

    static drivers = (state: any) => {
        let driver: DriverState = state?.driver as DriverState;
        const {driverGrade, driverPriceTo, driverPriceFrom, searchLanguage, searchLocation, driverCurrentPage, driversStyle} = driver;
        return getRequest(`${driver_list}?grade=${driverGrade}&page=${driverCurrentPage}&status=${driversStyle === 'all' ? "" : driversStyle}&price_from=${driverPriceFrom}&price_to=${driverPriceTo}${searchLocation ? `&location=${searchLocation}`: ""}${searchLanguage ? `&languages=${searchLanguage}`: ""}`);
    }

    static getDriveDtail = (id: string) => {
        return getRequest(`${driver_detail}${id}/`);
    }
    
    static getMyDriverReviews = (id: string) => {
        return getRequest(`${my_driver_review}${id}/`);
    }
}

export default DriverService
