import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import LoginPage from "../../components/login";
import { log } from "console";
import { getCookie, removeCookie, setCookie } from "typescript-cookie";


export const RequireAuth = ({ children }: {children: JSX.Element}) => {

    const auth = useContext(AuthContext);

    var token = getCookie('jwt-access-token');

    //Não existe usuário salvo no context
    if(!token) {
        return <LoginPage />
    }

    return children;
}