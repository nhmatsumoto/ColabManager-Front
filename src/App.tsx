

import { AuthProvider } from "./context/authProvider"
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ErrorPage from "./error-page";
import LoginPage from "./components/login";
import ProtectedLayout from "./components/protectedLayout";

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
