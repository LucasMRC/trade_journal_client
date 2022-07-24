import * as SecureStore from 'expo-secure-store';
import { CONSTANTS } from '@config/app_constants';

const { base_url } = CONSTANTS;

interface UntypedObject {
    [key: string]: string;
}

type ParamsObject = UntypedObject;

async function saveToken(value: string) {
    await SecureStore.setItemAsync('access_token', value);
    // cookies.set('access_token', value);
}

async function getToken() {
    const token = await SecureStore.getItemAsync('access_token');
    if (!token) {
        throw new Error('Token not found');
    }
    return token;
}

export const http = {
    get: async function(url: string, params: ParamsObject = {}) {
        const token = await getToken();
        return await fetch(base_url + url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: new URLSearchParams(params)
        })
            .then((response: Response) => {
                if (!response.ok || response.status !== 200) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .catch(err => {
                throw err;
            });
    },
    post: async function(url: string, data: unknown | null) {
        const token = await getToken();
        return await fetch(base_url + url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(data)
        })
            .then((response: Response) => {
                if (!response.ok ||  response.status !== 200) {
                    throw new Error(response.statusText);
                }
                return response.json();
            });
    },
    login: async function(email: string, password: string, username: string) {
        await fetch(base_url + '/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password, username }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response: Response) => {
            if (!response.ok ||  response.status !== 200) {
                throw new Error(response.statusText);
            }
            const token = response.headers.get('Authorization');
            if (!token) throw new Error('Unauthorized');
            saveToken(token);
        });
    },
    register: async function(username: string, email: string, password: string) {
        await fetch(base_url + '/users/register', {
            method: 'POST',
            body: JSON.stringify({ email, password, username }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response: Response) => {
            if (!response.ok ||  response.status !== 200) {
                throw new Error(response.statusText);
            }
        }).catch(err => {
            throw err;
        });
    }
};
