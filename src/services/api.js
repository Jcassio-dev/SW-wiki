import axios from "axios";

export const api = axios.create({
    baseURL: 'https://simpleloginapi.onrender.com'
})