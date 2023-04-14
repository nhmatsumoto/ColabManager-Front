import { useContext } from "react";
import "../../styles/dashboard.css"
import { AuthContext } from "../../contexts/auth/AuthContext";
import { useApi } from "../../hooks/useApi";

const Dashboard = async () => {

    const auth = useContext(AuthContext);
    const api = useApi();

    return (
        <>Dashboard page</>
    )
}

export default Dashboard;
