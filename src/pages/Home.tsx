import * as Yup from "yup";
import { useCookies } from "react-cookie";

interface LoginFormData {
    username: string;
    password: string;
  }

const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("O campo usuário é obrigatório"),
    password: Yup.string().required("O campo Senha é obrigatória"),
  });

const HomePage = () => {
    
    const [{}, {}, removeCookie] = useCookies(['token', 'refreshToken'])
  
    return (
      <>
        <hr/>
        <h1>Home Page</h1>
        <br/>
        <button onClick={() => {
          removeCookie('token',{path:'/'});
        }}> Sair</button>
      </>
    );
}

export default HomePage;