import axios from "axios";

const BASE_URL = "https://64b4c8450efb99d862694609.mockapi.io/";

export const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.response.use((response) => {
  return response;
});
