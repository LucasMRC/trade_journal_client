export interface UserModel {
    username: string;
    token: string;
    subscription: string;
}

export interface LoginAction {
    readonly type: 'ON_LOGIN';
    payload: null;
}

export interface ErrorAction {
    readonly type: 'ON_ERROR';
    payload: null;
}

export type UserAction = LoginAction | ErrorAction;