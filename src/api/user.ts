
import { http } from '@config/http';

export const register = async (username: string, email: string, password: string) => {
    return await http.register(username, email, password);
};


export const login = async (email: string, password: string, username = '') => {
    return http.login(email, password, username);
};