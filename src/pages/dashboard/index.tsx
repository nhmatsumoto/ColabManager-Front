import { useContext } from "react";
import "../../styles/dashboard.css"
import { AuthContext } from "../../contexts/auth/AuthContext";

const Dashboard = () => {

    const auth = useContext(AuthContext);

    return (
        <>
            <h1>Dashboard</h1>
            <h2>Private page</h2>
            Olá: {auth.user?.name}
        </>
    )

}

export default Dashboard;
