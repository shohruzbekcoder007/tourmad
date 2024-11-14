import axios, { AxiosInstance } from "axios";
import { host } from "./API_urls";
import { getStorage, getStorageR, removeStorage, setStorage, setStorageR } from "./storage" 
import { token_refresh } from "./API_urls"
import i18n from '../i18n';
const instance: AxiosInstance = axios.create({
    baseURL: host + '/api/v1/',
});


instance.interceptors.request.use( 
  (config) => { 
    const token = getStorage(); 
    if (token) { 
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["Accept-Language"] = i18n.language;
    } 
    return config; 
  }, 
  (error) => Promise.reject(error) 
);


instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refresh = getStorageR();
        const response = await axios.post(token_refresh, { refresh });
        const { access: accessToken, refresh: newRefreshToken } = response.data;
        setStorage(accessToken)
        setStorageR(newRefreshToken)
        instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        return instance(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        removeStorage();
        window.location.href = '/sign-in';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);


export default instance;