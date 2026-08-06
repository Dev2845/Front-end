import axios from "axios"

const api = axios.create({
    baseURL:"https://smartmall-backend-98z6.onrender.com/api",
    withCredentials: false,
})

export default api;

api.interceptors.request.use((config) => {

    const token = localStorage.getItem("adminToken");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});