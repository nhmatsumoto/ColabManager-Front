
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ErrorPage from "./error-page";
import LoginPage from "./components/login";
import { AuthProvider } from "./contexts/auth/AuthProvider";
import { RequireAuth } from "./contexts/auth/RequireAuth";
import { HomePage } from "./pages/home/index";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/private",
      element: <RequireAuth><Dashboard /></RequireAuth>
    },
    // {
    //   path: "/home",
    //   element: <ProtectedLayout children={<Home />} />
    // },
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
