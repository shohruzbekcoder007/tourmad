import axios, { AxiosInstance } from "axios";
import { host } from "./API_urls";

const instance: AxiosInstance = axios.create({
    baseURL: host + '/api/v1/',
});

export default instance;