
import { http } from '@utils/http';

export const register = async (email: string, password: string, username = '') => {
    return await http.post('/users/register', { email, password, username });
};


export const login = async (email: string, password: string, username = '') => {
    http.login(email, password, username);
};