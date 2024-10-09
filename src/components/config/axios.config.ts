import axios from "axios";

export const AXIOS = axios.create({
    baseURL: 'https://api.iransweb.com/products', 
    timeout: 2000  
})