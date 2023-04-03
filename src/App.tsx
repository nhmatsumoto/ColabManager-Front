import { useCookies } from 'react-cookie'
import './App.css'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import { AppRoute } from './Route';
import ErrorPage from './error-page';
import LoginPage from './components/Login';
import ProtectedLayout from './components/ProtectedLayout';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppRoute />,
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
