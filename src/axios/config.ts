import axios from "axios";

export const projectFetch = axios.create({
    baseURL: 'https://localhost:7199/api',
    headers: { 
        'Content-Type': 'application/json'
    }
})