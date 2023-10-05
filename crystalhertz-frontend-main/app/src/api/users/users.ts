import ky from "ky";
import { API_URLS_SERVICES } from "api/constants";

export const getUserData = async () => {
    return await ky.get(`${API_URLS_SERVICES.USERS}/user?token=${localStorage.getItem('token')}`).json();
}