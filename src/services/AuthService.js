import axios from 'axios';
import api, { API_URL } from 'http';

export default function AuthService() {
    return {
        async login(username, password) {
            return api.post('auth/login', { username, password })
        },

        async register(username, password) {
            return api.post('register', { username, password })
        },

        async logout() {
            return api.post('auth/logout')
        },

        async refreshToken() {
            const response = await axios.get(`${API_URL}/auth/refresh`, { withCredentials: true });
            localStorage.setItem('token', response.data.accessToken);

            return response;
        },

        async accessToken() {
            const response = await axios.get(`${API_URL}/auth/token`, { withCredentials: true });
            localStorage.setItem('token', response.data.accessToken);

            return response;
        }
    }
}