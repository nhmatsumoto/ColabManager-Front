import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "bootstrap/dist/css/bootstrap.css";
import "./styles/global.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home";
import { ProjectForm } from "./pages/project/form/index";
import LoginPage from "./components/login";
import RegisterPage from "./pages/register";
import { ProjectList } from "./pages/project/list";

const router = createBrowserRouter([{
  element: <App />,
  children: [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/novo-projeto',
      element: <ProjectForm />
    },
    {
      path: '/listar-projetos',
      element: <ProjectList />
    },
    {
      path: '/novo-usuario',
      element: <RegisterPage />
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
