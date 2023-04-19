import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  //baseURL: "10.0.0.57:0000"
});

export default api;