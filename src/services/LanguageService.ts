import { common_language } from "../utils/API_urls";
import { getRequest } from "../utils/request";

class LanguageService {
    static languageList = () => {
        return getRequest(common_language)
    }
}

export default LanguageService;