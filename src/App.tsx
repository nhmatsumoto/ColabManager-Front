import { useCookies } from 'react-cookie'
import HomePage from './pages/Home'
import LoginPage from './pages/Login/LoginPage'
import './App.css'
import { Link } from 'react-router-dom'

function App() {

  const [cookies, setCookie] = useCookies(['token', 'refreshToken'])    

  if(!cookies.token) {
    return (
      <div className="App">
        <Link to='/login' />
      </div>
    )
  }

  return (
    <div className="App">
      
    </div>
  )
}

export default App
