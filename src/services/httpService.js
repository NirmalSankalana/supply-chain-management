import axios from "axios";
import { api } from "../config.js";

// function getToken() {
//   console.log("ASDFGHJKLQWERTYU")
//   return localStorage.getItem("token")
// }
let token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: api.apiUrl,
  headers: {Authorization: `Bearer ${token}`},
});

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
  patch: axiosInstance.patch,
};
