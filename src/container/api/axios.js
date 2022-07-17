import axios from "axios"


// const axiosInstance = axios.create({ baseURL: "http://localhost:8000" })

const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_BASEURL })

axiosInstance.interceptors.request.use(
    (request) => {
        if (localStorage.getItem("token")) {
            const token = localStorage.getItem("token")
            request.headers["Authorization"] = token
        }
        return request
    },
    (error) => {
        return error
    }
)

export default axiosInstance