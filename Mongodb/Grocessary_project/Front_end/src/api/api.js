import axios from "axios";

const api = axios.create({
  baseURL: "https://smartmall-backend-98z6.onrender.com/api",
  timeout: 120000,
});

api.interceptors.request.use((config) => {

  const token = localStorage.getItem("userToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;