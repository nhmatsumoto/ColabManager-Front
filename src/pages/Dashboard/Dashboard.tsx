import { Cookies, useCookies } from "react-cookie";

const Dashboard = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['jwt-access-token', 'jwt-refresh-token']);

    return (
        <>
            <h1>DASHBOARD</h1>
        </>
    )

}

export default Dashboard;
