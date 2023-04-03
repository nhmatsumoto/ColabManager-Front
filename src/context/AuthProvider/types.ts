export interface IUser {
    userId?: number;
    accessToken?: string,
    refreshToken?: string
}

export type ILoginRequest = {
    username: string,
    password: string
}

export interface IContext extends IUser {

    authenticate: (username: string, passwprd: string) => Promise<void>;
    logOut: () => void;

}

export interface IAuthProvider {
    children: JSX.Element;
}