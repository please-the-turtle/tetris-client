import { observable, action, makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";

export default function Store() {
    const authService = AuthService();
    const authorized = observable({ value: false });

    function isAuthorized() {
        return authorized.value;
    };

    const setAutorized = action(bool => {
        authorized.value = bool;
    });

    async function login(username, password) {
        const response = await authService.login(username, password);
        localStorage.setItem('token', response.data.accessToken);
        setAutorized(true);
        return response;
    };

    async function register(username, password) {
        const response = await authService.register(username, password);
        return response;
    };

    async function logout() {
        try {
            await authService.logout();
            localStorage.removeItem('token');
            setAutorized(false);
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    };

    async function checkAuth() {
        if (!localStorage.getItem('token')) {
            return;
        }

        try {
            await authService.refreshToken();
            setAutorized(true);
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    };

    return makeAutoObservable({
        isAuthorized,
        register,
        login,
        checkAuth,
        logout
    });
}
