import axios from "axios";
import { api } from "../config.js";

let bearer_token = localStorage.getItem("access_token");

const axiosInstance = axios.create({
  baseURL: api.apiUrl,
  headers: { Authorization: `Bearer ${bearer_token}` },
});

export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
  patch: axiosInstance.patch,
};
