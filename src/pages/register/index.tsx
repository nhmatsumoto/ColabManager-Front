import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

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
        <Formik
            initialValues={initialValues}
            validationSchema={RegisterSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, values }) => (
                <Form> 

                    <h2 className="fw-bold mb-2 text-uppercase">Cadastrar usuário</h2>

                    <div className="form-outline form-white mb-4">
                        <label htmlFor="fullName">Nome completo</label>
                        <Field className="form-control" type="text" name="fullName" id="fullName" placeholder="Nome completo"/>
                        <ErrorMessage name="fullName" component="div" />
                    </div>


                    <div className="form-outline form-white mb-4">
                        <label htmlFor="email">Email</label>
                        <Field className="form-control" type="email" name="email" id="email" placeholder="Email"/>
                        <ErrorMessage name="email" component="div" />
                    </div>

                    <div className="form-outline form-white mb-4">
                        <label htmlFor="phone">Telefone</label>
                        <Field className="form-control" type="text" name="phone" id="phone" placeholder="Telefone"/>
                        <ErrorMessage name="phone" component="div" />
                    </div>

                    <div className="form-outline form-white mb-4">
                        <label htmlFor="document">Documento</label>
                        <Field className="form-control" type="text" name="document" id="document" placeholder="Documento"/>
                        <ErrorMessage name="document" component="div" />
                    </div>

                    <div className="form-group form-white mb-4">
                        <label htmlFor="password">Senha</label>
                        <Field className="form-control" type="password" name="password" id="password" placeholder="Senha"/>
                        <ErrorMessage name="password" component="div" />
                    </div>

                    <div className="form-group form-white mb-4">
                        <label htmlFor="confirmPassword">Confirme sua senha</label>
                        <Field className="form-control" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirme a senha"/>
                        <ErrorMessage name="confirmPassword" component="div" />
                    </div>

                    <div className="mt-5">
                        <button className="btn btn-info text-white" type="submit" disabled={isSubmitting}>Cadastrar</button>
                    </div>
                    
                </Form>
            )}
        </Formik>
    );
}

export default RegisterPage;