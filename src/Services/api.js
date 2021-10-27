import axios from "axios";

const api = axios.create({
  baseURL: "https://docs.forza-api.tk",
});

export default api;