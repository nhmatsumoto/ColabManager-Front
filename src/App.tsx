
import { createBrowserRouter, RouterProvider, Link, NavLink } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ErrorPage from "./error-page";
import LoginPage from "./components/login";
import { AuthProvider } from "./contexts/auth/AuthProvider";
import { RequireAuth } from "./contexts/auth/RequireAuth";
import { HomePage } from "./pages/home/index";
import { useContext } from "react";
import { AuthContext } from "./contexts/auth/AuthContext";

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
      errorElement: <ErrorPage />
    },
    {
      path: "/private",
      element: (
        <RequireAuth>
          <>
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
          </>
        </RequireAuth>
      ),
      errorElement: <ErrorPage />,
    },
  ]);
  
    return (
      <div className="App">
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                      <div className="card bg-dark text-white">
                          <div className="card-body p-5 text-center">
                              <div className="mb-md-5 mt-md-4 pb-5"></div>
                                <AuthProvider>
                                  <RouterProvider router={router} />
                                </AuthProvider>  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>    
      </div>
    )
}

export default App
