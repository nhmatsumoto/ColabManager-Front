import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../../types/user"
import { useApi } from "../../hooks/useApi";
import { getCookie, removeCookie, setCookie } from "typescript-cookie";

export const AuthProvider = ({children} : { children:JSX.Element}) => {

    const [user, setUser] = useState<User | null>(null);
    const api = useApi();


    useEffect(() => {

        const validateToken = async () => {

            const cookieData = getCookie('jwt-access-token');

            if(cookieData){
                
                //vai até a api validar token
                //retorna dados do usuário
                const data = await api.validateToken(cookieData);
                
                if(data.user) {
                    setUser(data.user);
                }
            }
        }

        validateToken();
    }, [api])

    const signin = async (username: string, password: string) => {

        const data = await api.signin(username, password);

        if(data.value.user && data.value.accessToken)
        {
            setUser(data.user);

            const expiresDate = new Date(Date.now() + 60 * 60 * 1000); //1 hr
            setCookie('jwt-access-token',  data.value.accessToken, { expires: expiresDate, sameSite: 'none', secure: true, path: '/' });
            setCookie('jwt-refresh-token', data.value.refreshToken, { expires: expiresDate, sameSite: 'none', secure: true, path: '/' });

            return true;
        }

        return false;
    }

    const signout = async () => {

        removeCookie('jwt-access-token');
        removeCookie('jwt-refresh-token');

        //avisa o backend
        await api.signout();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
}