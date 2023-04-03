import axios from "axios";


export const Api = axios.create({
    baseURL: "http://localhost:5247/api"
});


