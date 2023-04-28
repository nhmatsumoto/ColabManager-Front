
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar";

function App() {

    return (
      <div className="App">
        <Navbar />
    
        <div className="container bg-light mt-5">
          <Outlet />
        </div>

      </div>
    )
}

export default App
