import axios from "axios";
import { User } from "../types/user";

const api = axios.create({
    baseURL: 'http://localhost:5247'
});

export const useApi = () => ({

    validateToken: async (token: string) => {

        //temp return
        return { id: 1, name: 'teste', email: 'hiro@gmail.com' } as {id:number, name: string, email: string};

        const response = await api.post('/validate', { token });
        return response.data;
    },

    signin: async (username: string, password: string) => {
        const response = await api.post('/api/auth/login', {username, password});
        return response.data;
    },

    signout: async () => {
        const response = await api.post('/logout');
        return response.data;
    }

});


