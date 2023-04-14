import { Link } from "react-router-dom"
import "../../styles/dashboard.css"

export const HomePage = () => {

    return (
        <>
            <h1>Home page</h1>
            <hr />
            <Link to={"/login"}> Login</Link>
        </>
    )

}
