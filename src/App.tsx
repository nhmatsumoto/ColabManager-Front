import { useCookies } from 'react-cookie'
import HomePage from './pages/Home'
import LoginPage from './pages/Login/LoginPage'
import './App.css'
import { AppRoutes } from './Routes'

function App() {

  const [cookies, setCookie] = useCookies(['token', 'refreshToken'])    

  if(cookies.token == null || cookies.token == "null" || cookies.refreshToken == null || cookies.refreshToken == "null") {
    return (
      <LoginPage />
    )
  }

  return (
    <div className="App">
      <AppRoutes/>
    </div>
  )
}

export default App
