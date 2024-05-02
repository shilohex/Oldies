import axios from "axios";

const api = axios.create({
  baseURL: "https://oldies.onrender.com/",
});

export default api;

// http://localhost:5001/
