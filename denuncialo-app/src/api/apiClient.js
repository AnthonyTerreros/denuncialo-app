import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_URL_BACKEND,
  timeout: 10000,
});

export default apiClient;
