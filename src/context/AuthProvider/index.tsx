import { createContext, useEffect, useState } from 'react';
import { IContext, IUser, IAuthProvider } from './types';
import { LoginRequest, getUserCookies, setUserCookies } from './utils';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children } : IAuthProvider) => {

    const [user, setUser] = useState<IUser | null>();


    useEffect(() => {
        const user = getUserCookies();

        if(user) {
            setUserCookies(user.accessToken, user.refreshToken);
        }

    }, []) 


    async function authenticate(username: string, password: string) {

        const response = await LoginRequest(username, password);
        const payload = {accessToken: response.accessToken, refreshToken: response.refreshToken, userId: response.userId }

        setUser(payload);

        setUserCookies(payload.value.accessToken, payload.value.refreshToken);
    }

    function logOut() {
        setUser(null);
        
        //Clean cookies;

    }

    return (
        <AuthContext.Provider value={{...user, authenticate, logOut}}>
            { children }
        </AuthContext.Provider>
    )
} 