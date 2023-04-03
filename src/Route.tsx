import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import LoginPage from './components/Login'
import RegisterPage from "./pages/register/RegisterPage"

export function AppRoute(){
   // navbar
   
    return (<LoginPage />)
}