import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useCookies } from "react-cookie";

interface RegisterFormData {
    fullName: string,
    email: string,
    phone: string,
    document: string,
    username: string;
    password: string;
    confirmPassword: string;
  }


const RegisterSchema = Yup.object().shape({
    fullName: Yup.string().required("O campo usuário é obrigatório"),
    email: Yup.string().required("O campo Senha é obrigatória"),
    phone: Yup.string().required("O campo Senha é obrigatória"),
    document: Yup.string().required("O campo Senha é obrigatória"),
    username: Yup.string().required("O campo Senha é obrigatória"),
    password: Yup.string().required("O campo Senha é obrigatória"),
    confirmPassword: Yup.string().required("O campo Senha é obrigatória")
  });

const RegisterPage = () => {
    
    const initialValues : RegisterFormData = { 
        fullName: "",
        email: "",
        phone: "",
        document: "",
        username: "",
        password: "",
        confirmPassword: ""
     };
    const [cookies, setCookie] = useCookies(['token', 'refreshToken'])

    const payload = (values : RegisterFormData) => ({
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        username: values.username,
        password: values.password,
        confirmPassword: values.confirmPassword,
    })

    const headers = { 'Content-Type': 'application/json', 'Origin': 'https://localhost:7199' };

    const handleSubmit = async (values: RegisterFormData) => {

        const playload = payload(values);

        if(playload){
            await axios.post("https://localhost:7199/api/auth/register", playload, { headers })
                .then(response => {
                    if(response){
                        console.log(response.data);
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
                                    validationSchema={RegisterSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ isSubmitting, values }) => (
                                    <Form> 

                                        <h2 className="fw-bold mb-2 text-uppercase">Cadastre-se</h2>
                                        <p className="text-white-50 mb-5">Insira suas informações para efetuar o cadastro</p>

                                        <div className="form-outline form-white mb-4">
                                            <Field className="form-control form-control-lg" type="text" name="fullName" id="fullName" placeholder="Nome completo"/>
                                            <ErrorMessage name="fullName" component="div" />
                                        </div>


                                        <div className="form-outline form-white mb-4">
                                            <Field className="form-control form-control-lg" type="email" name="email" id="email" placeholder="Email"/>
                                            <ErrorMessage name="email" component="div" />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <Field className="form-control form-control-lg" type="text" name="phone" id="phone" placeholder="Telefone"/>
                                            <ErrorMessage name="phone" component="div" />
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <Field className="form-control form-control-lg" type="text" name="document" id="document" placeholder="Documento"/>
                                            <ErrorMessage name="document" component="div" />
                                        </div>

                                        <div className="form-group">
                                            <Field className="form-control form-control-lg" type="password" name="password" id="password" placeholder="Senha"/>
                                            <ErrorMessage name="password" component="div" />
                                        </div>

                                        <div className="form-group">
                                            <Field className="form-control form-control-lg" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirme a senha"/>
                                            <ErrorMessage name="confirmPassword" component="div" />
                                        </div>

                                        <button className="btn btn-outline-light btn-lg px-5" type="submit" disabled={isSubmitting}>Login</button>
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

export default RegisterPage;