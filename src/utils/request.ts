import { AxiosResponse } from 'axios';
import axios from './baseUrl';

export type ApiResponse<T> = {
    data: T;
    status: number;
};

export const getRequest = (url: string): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export const postRequest = (url: string, data: any): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
        axios.post(
            url,
            data
        ).then((response) => {
            resolve(response)
        })
        .catch((error) => {
            console.log(error)
            reject(error)
        });
    });
}

export const putRequest = (url: string, data: any): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
        axios.put(
            url,
            data
        ).then((response) => {
            resolve(response)
        })
        .catch((error) => {
            console.log(error)
            reject(error)
        });
    });
}