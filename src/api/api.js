import { api } from "../config/axiosConfig";

export const getAccardionItems = async () => {
  const response =  await api.get("/tree/items");

  return response
};
