import { useContext } from "react";
import "../../styles/dashboard.css"
import { AuthContext } from "../../contexts/auth/AuthContext";
import { useApi } from "../../hooks/useApi";

const Dashboard = () => {

    const auth = useContext(AuthContext);
    const api = useApi();

    return (
        <>
        
        </>
    )
}

export default Dashboard;
