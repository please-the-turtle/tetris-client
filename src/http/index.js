import axios from 'axios';
import AuthService from '../services/AuthService';

export const API_URL = `http://192.168.1.45:8080/api`

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    console.log(error.response.status);
    if (error.response.status === 403 && error.config && !error.config._isRetry) {
        try {
            originalRequest._isRetry = true;
            await AuthService().refreshToken();
            return api.request(originalRequest);
        }
        catch (e) {
            console.log('Not authorized.');
        }
    };
    throw error;
})

export default api;