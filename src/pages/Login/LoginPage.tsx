import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useCookies } from "react-cookie";
import './LoginPage.css';

interface LoginFormData {
    username: string;
    password: string;
  }

const LoginSchema = Yup.object().shape({
    username: Yup.string().required("O campo usuário é obrigatório"),
    password: Yup.string().required("O campo Senha é obrigatória"),
  });

const LoginPage = () => {
    
    const initialValues: LoginFormData = { username: "", password: "" };
    const [cookies, setCookie] = useCookies(['token', 'refreshToken'])

    const payload = (values : LoginFormData) => ({
        username: values.username,
        password: values.password
    })

    const headers = { 'Content-Type': 'application/json', 'Origin': 'https://localhost:7199', 'Authorization': 'Bearer ' + cookies.token };

    const handleSubmit = async (values: LoginFormData) => {

        const playload = payload(values);

        if(playload){

            await axios.post("https://localhost:7199/api/auth/login", playload, { headers })
                .then(response => {

                    if(response){

                        let expires = new Date();
                        expires.setTime(expires.getTime() + (response.data.expires_in * 1000))
                        
                        if(response.data.value.token) {
                            setCookie('token', response.data.value.token, { path: '/',  expires})
                            setCookie('refreshToken', response.data.value.refreshToken, {path: '/', expires})
                        }

                        console.log("SUCESSO", response);
                    }

            }).catch(error => {
                console.log("ERRO", error);
            });
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

                                        <button className="btn btn-outline-light btn-lg px-5" type="submit"  disabled={isSubmitting} onClick={() => handleSubmit({username: values.username, password: values.password})}>Login</button>
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