import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
    // baseURL: 'https://techtest.youapp.ai',
    baseURL: 'http://localhost:3000/api',
    timeout: 10000
})

export default instance;