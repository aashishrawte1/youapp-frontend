import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: 'https://techtest.youapp.ai',
    timeout: 10000
})

export default instance;