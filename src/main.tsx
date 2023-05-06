import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home";
import { ProjectForm } from "./pages/project/form/index";
import LoginPage from "./components/login";
import RegisterPage from "./pages/register";
import { ProjectList } from "./pages/project/list";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/global.css"
import ErrorPage from "./error-page";
import { DailyTask } from "./pages/dailytasks";

const router = createBrowserRouter([{
  element: <App />,
  errorElement: <ErrorPage />,
  children:   [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/novo/projeto',
      element: <ProjectForm />
    },
    {
      path: '/novo/usuario',
      element: <RegisterPage />
    },
    {
      path: '/listar/projetos',
      element: <ProjectList />
    },
    {
      path: '/listar/tarefas',
      element: <DailyTask />
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
