import axios from "axios";
import authHeader from "./use-token";

const API_BASE_URL = "https://localhost:7078/api";

const getAccessor = () => {
  return axios.get(API_BASE_URL + "/Accounts", { headers: authHeader() });
};

export default {
  getAccessor
};