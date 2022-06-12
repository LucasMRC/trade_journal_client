interface UntypedObject {
    [key: string]: string;
}

type ParamsObject = UntypedObject;

const buildQuery = (params: ParamsObject): string => {
    if (!params.length) return '';
    const keys = Object.keys(params);
    let query = '?';
    for (const key in params) {
        if (!params[key]) throw new Error(`${key} is missing`);
        query += `${key}=${params[key]}`;
        if (key === keys[keys.length - 1]) query += '&';
    }
    return query;
};

export const http = {
    get: async (url: string, params: ParamsObject = {}) => {
        const query = buildQuery(params);
        const response = await fetch(url + query, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    },
    post: async (url: string, data: BodyInit | null) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }
};
