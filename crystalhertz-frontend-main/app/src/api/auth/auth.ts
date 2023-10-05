import ky from "ky";
import { API_URLS_SERVICES } from "../constants.ts";

export const authSubmit = async (data: {
  login: string;
  password: string;
}): Promise<string> => {
  return await ky
    .post(`${API_URLS_SERVICES.AUTH}/signin`, { json: data })
    .json();
};

export const regSubmit = async (data: {
  email: string;
  login: string;
  password: string;
}): Promise<string> => {
  return await ky
    .post(`${API_URLS_SERVICES.AUTH}/signup`, { json: data })
    .json();
};
