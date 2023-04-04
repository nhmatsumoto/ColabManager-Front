

import { AuthProvider } from "./context/AuthProvider"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import ErrorPage from "./error-page";
import LoginPage from "./components/Login";
import ProtectedLayout from "./components/ProtectedLayout";
import "./App.css";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/dashboard",
      element: <ProtectedLayout children={<Dashboard />} />
    },
  ]);
  
    return (
      <div className="App">
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>      
      </div>
    )
}

export default App
