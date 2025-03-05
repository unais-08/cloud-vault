import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/auth", // Backend URL
  withCredentials: true, // Important for cookies & sessions
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
