import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import LoginPage from './pages/Login/LoginPage'
import RegisterPage from "./pages/Register/RegisterPage"

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
            </Routes>
        </Router>
    )
}