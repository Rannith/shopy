import axios from "axios";

const axiosInstance = axios.create({baseURL: "http://localhost:8000"})

axiosInstance.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem("token")
        request.headers["Authorization"] = token
        return request
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance