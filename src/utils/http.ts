interface UntypedObject {
    [key: string]: string;
}

type ParamsObject = UntypedObject;

// const buildQuery = (params: ParamsObject): string => {
//     if (!params.length) return '';
//     const keys = Object.keys(params);
//     let query = '?';
//     for (const key in params) {
//         if (!params[key]) throw new Error(`${key} is missing`);
//         query += `${key}=${params[key]}`;
//         if (key === keys[keys.length - 1]) query += '&';
//     }
//     return query;
// };

export const http = {
    baseUrl: 'http://localhost:5000',
    get: async function(url: string, params: ParamsObject = {}) {
        const token = '';
        return await fetch(this.baseUrl + url, {
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
        const token = '';
        return await fetch(this.baseUrl + url, {
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
            })
            .catch(err => {
                throw err;
            });
    },
    login: async function(email: string, password: string, username: string) {
        const token = '';
        const response = await fetch(this.baseUrl + '/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password, username }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });
        const hola = response.headers.get('Authorization');
        console.log({ response, hola });
    }
};
