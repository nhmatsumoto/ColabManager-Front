import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios, { AxiosResponse } from "axios";
import './LoginPage.css';
import jwt from 'jwt-decode';
import { useState } from "react";
import Loader from "../../components/Loader";
import { Cookies, useCookies } from "react-cookie";
import { Link } from "react-router-dom";

interface LoginFormData {
    username: string;
    password: string;
}

interface LoginResponseData {
    userId: number,    
    accessToken: string,
    refreshToken: string
}

const LoginSchema = Yup.object().shape({
    username: Yup.string().required("O campo usuário é obrigatório"),
    password: Yup.string().required("O campo Senha é obrigatória"),
});

const LoginPage = () => {
    
    const [cookies, setCookie] = useCookies(['jwt-access-token', 'jwt-refresh-token']);
    const initialValues: LoginFormData = { username: "", password: "" };
    const [user, setUser] = useState(0);
    const [loader, setLoader] = useState(false);

    const handleLogout = () => {
        setUser(0);
        // cookies.remove("jwt-access-token");
    }

    const payload = (values : LoginFormData) => ({
        username: values.username,
        password: values.password
    })

    const handleSubmit = async (values: LoginFormData) => {

        setLoader(true);

        const request = payload(values);

        if(request){

            try {
                const response = await axios.post<LoginResponseData, AxiosResponse<LoginResponseData, any>>('https://localhost:7199/api/auth/login', request);
    
                console.log("Sucesso", response.data.value.accessToken)   
                //1 hora.
                const expiresDate = new Date(Date.now() + 60 * 60 * 1000);

                setCookie('jwt-access-token',  response.data.value.accessToken, { expires: expiresDate, sameSite: 'none', secure: true, path: '/' });
                setCookie('jwt-refresh-token', response.data.value.refreshToken, { expires: expiresDate, sameSite: 'none', secure: true, path: '/' });
                setUser(response.data.userId);
                setLoader(false);

            } catch(error) {

                setLoader(false);
            }
        }
    };
  
   

    return (
       <>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white">
                                <div className="card-body p-5 text-center">
                                    <div className="mb-md-5 mt-md-4 pb-5">

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
                                    </div>

                                    <div>
                                        <p className="mb-0">
                                            Ainda não tem uma conta?
                                            <a href="#!" className="text-white-50 fw-bold">Cadastre-se</a>
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </>
    );
}

export default LoginPage;