import { useCookies } from 'react-cookie'
import HomePage from './pages/Home'
import LoginPage from './pages/Login/LoginPage'
import './App.css'

function App() {

  const [cookies, setCookie] = useCookies(['token', 'refreshToken'])    

  if(cookies.token == null || cookies.token == "null") {
    return (
      <LoginPage />
    )
  }

  return (
    <div className="App container" >
      <HomePage />
    </div>
  )
}

export default App
