import AuthService from "services/AuthService";

const authService = AuthService();

export const createAuthSlice = (set) => ({

    isAuthorized: false,

    login: async (username, password) => {
        try {
            const response = await authService.login(username, password);
            localStorage.setItem('token', response.data.accessToken);
            set(() => ({isAuthorized: true}));
            return response;
        } catch (e) {
            console.log(e.response?.data?.message);
            if (e.response) throw e;
        }
    },

    register: async (username, password) => {
        try {
            const response = await authService.register(username, password);
            return response;
        } catch (e) {
            console.log(e.response?.data?.message);
            if (e.response) throw e;
        }
    },

    logout: async () => {
        try {
            await authService.logout();
            localStorage.removeItem('token');
            set(() => ({isAuthorized: false}));
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    },

    checkAuth: async () => {
        if (!localStorage.getItem('token')) {
            return;
        }

        try {
            await authService.refreshToken();
            set(() => ({isAuthorized: true}));
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
})
