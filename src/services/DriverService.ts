import { DriverState } from "../redux/slices/driverSliser"
import { drive_client_review, driver_detail, driver_list, location_drive, my_driver_review, recommendation_trip_drive } from "../utils/API_urls"
import { getRequest, putRequest } from "../utils/request"
import { DriveClientReviewType } from "../utils/response_types"

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

    static getMyDriverReviews = (id: string, state: any) => {
        let driver: DriverState = state.driver as DriverState;
        const { reviewCurrentPage } = driver.driveReview
        return getRequest(`${my_driver_review}${id}/?page=${reviewCurrentPage}`);
    }

    static getDriverClientReview = (id: string, review: DriveClientReviewType) => {
        return putRequest(`${drive_client_review}${id}/`, review)
    }

    static locationDrivers = () => {
        return getRequest(location_drive)
    }
}

export default DriverService
