import * as Yup from "yup";
import { useCookies } from "react-cookie";

const HomePage = () => {
    
    const [{}, {}, removeCookie] = useCookies(['token', 'refreshToken'])
  
    return (
      <>
        <h1>
          HOME PAGE
        </h1>
        
        <button onClick={() => {
          removeCookie('token',{path:'/'});
        }}> Sair</button>
      </>
    );
}

export default HomePage;