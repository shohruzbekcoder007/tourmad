import { DriverState } from "../redux/slices/driverSliser"
import { driver_list, recommendation_trip_drive } from "../utils/API_urls"
import { getRequest } from "../utils/request"

class DriverService {
    static recommendationDrive = () => {
        return getRequest(recommendation_trip_drive)
    }
    static drivers = (state: any) => {
        let driver: DriverState = state?.driver as DriverState;
        const {driverGrade, driverPriceTo, driverPriceFrom} = driver;
        return getRequest(`${driver_list}?grade=${driverGrade}&price_from=${driverPriceFrom}&price_to=${driverPriceTo}`);
    }
}

export default DriverService
