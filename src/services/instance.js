import axios from "axios";

const baseURL = "https://freelance-marketplace-back-end.onrender.com/api/v1";

const instance = axios.create({
  baseURL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  withCredentials: false, // No need for cookies
});

export default instance;
