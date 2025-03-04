import axios from "axios"

const BASE_URL = "http://192.168.29.15:5000"

const service = axios.create({
    baseURL: BASE_URL, 
    timeout: 30000,
})

service.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Erro no requisição", error);
        return Promise.reject(error);
    }
);

export default service;




