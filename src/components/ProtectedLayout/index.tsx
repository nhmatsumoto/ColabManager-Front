import React from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";

const ProtectedLayout = ({ children } : { children : JSX.Element}) => {

    const auth = useAuth();

    if(!auth.accessToken) {
        return <h1>SEM ACESSO</h1>;
    }
}

export default ProtectedLayout;