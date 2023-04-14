import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import Loader from "../loader";
import { AuthContext } from "../../contexts/auth/AuthContext";
import { useNavigate, useLocation, } from "react-router-dom";


const LoginSchema = Yup.object().shape({
    username: Yup.string().required("O campo usuário é obrigatório"),
    password: Yup.string().required("O campo Senha é obrigatória"),
});

const LoginPage = () => {

    const auth = useContext(AuthContext);

    const initialValues = { username: "", password: "" };
    const [loader, setLoader] = useState(false);
    
    const handleSubmit = async (values : { username: string, password: string }) => {

        try {
            setLoader(true);

            const isLogged = await auth.signin(values.username, values.password);
            
            if(isLogged)
            {
                setLoader(false);
            }
            else {

                //usuário não logado
                setLoader(false);
                window.alert('Login não deu certo');
            }
        }catch (error) {
            console.error(error);
            setLoader(false);
        }
    };

    return (
       <>
            <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, values }) => (
                <Form> 

                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Entre com usuário e senha</p>

                    <div className="form-outline form-white mb-4">
                        <Field className="form-control form-control-lg" type="text" name="username" id="username" placeholder="Usuário"/>
                        <ErrorMessage name="username" component="div" />
                    </div>


                    <div className="form-group">
                    
                        <Field className="form-control form-control-lg" type="password" name="password" id="password" placeholder="Senha"/>
                        <ErrorMessage name="password" component="div" />
                    </div>

                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Esqueceu a senha?</a></p>

                    {
                        loader && (
                            <Loader />
                        )
                    }
                    
                    <button className="btn btn-outline-light btn-lg px-5" type="submit"  disabled={isSubmitting}>Login</button>
                </Form>
                )}
            </Formik>

            <div>
                <p className="mb-0">
                    Ainda não tem uma conta?
                    <a href="#!" className="text-white-50 fw-bold">Cadastre-se</a>
                </p>
            </div>
       </>
    );
}

export default LoginPage;