import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import LoginPage from "../../components/login";

export const RequireAuth = ({ children }: {children: JSX.Element}) => {

    const auth = useContext(AuthContext);

    //Não existe usuário salvo no context
    if(!auth.user) {
        return <LoginPage />
    }

    return children;
}