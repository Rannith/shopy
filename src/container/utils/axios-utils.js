import axios from "axios";

const axiosInscance = axios.create({baseURL: "http://localhost:8000"})

axiosInscance.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem("token")
        request.headers["Authorization"] = token
        return request
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInscance