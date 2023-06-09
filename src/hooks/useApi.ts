import axios from "axios";
import { User } from "../types/user";

const api = axios.create({
    baseURL: 'http://localhost:5247'
});

export const useApi = () => ({

    validateToken: async (token: string) => {
        const response = await api.post('api/auth/validate?token='+token);
        return response.data;
    },

    signin: async (username: string, password: string) => {

        const request = {
            username: username,
            password: password
        };

        const response = await api.post('/api/auth/login', request);
        return response.data;
    },

    signout: async () => {
        const response = await api.post('/logout');
        return response.data;
    }

});


