import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "bootstrap/dist/css/bootstrap.css";
import "./styles/global.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home";
import { ProjectPage } from "./pages/dashboard";
import LoginPage from "./components/login";

const router = createBrowserRouter([{
  element: <App />,
  children: [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/novo-projeto',
      element: <ProjectPage />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
  ]  
}]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
