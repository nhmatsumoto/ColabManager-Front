
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

function App() {

    return (
      <div className="App">
        <Navbar />
    
        <div className="container bg-light mt-5">
          <Outlet />
        </div>

        <Footer />
      </div>
    )
}

export default App
