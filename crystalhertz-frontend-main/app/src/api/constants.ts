export const API_URL: Readonly<string> = "http://localhost:3000";

export const API_URLS_SERVICES: Readonly<{ [key: string]: string }> = {
    USERS: `${API_URL}/users`,
    PROFILES: `${API_URL}/profiles`,
    AUTH: `${API_URL}/auth`,
};
