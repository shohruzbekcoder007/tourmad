import { ConsultingState } from '../redux/slices/consultingSlice'
import { consulting_category_list, consulting_detail, consulting_list } from '../utils/API_urls'
import { getRequest } from '../utils/request'

class ConsultingService {
    static tripConsulting = (state: any) => {
        let consulting: ConsultingState = state?.consulting as ConsultingState
        const {consultingListPageSize, consultingListCurrentPage, consulting_category, consulting_search} = consulting
        return getRequest(`${consulting_list}?size=${consultingListPageSize}&page=${consultingListCurrentPage}&category=${consulting_category}&search=${consulting_search}`)
    }

    static tripConsultingCategory = () => {
        return getRequest(consulting_category_list)
    }

    static getConsultingDetail = (id: string) => {
        return getRequest(`${consulting_detail}/${id}`)
    }
}

export default ConsultingService