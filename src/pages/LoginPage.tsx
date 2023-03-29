import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

interface LoginFormData {
    username: string;
    password: string;
  }

const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("O campo usuário é obrigatório"),
    password: Yup.string().required("O campo Senha é obrigatória"),
  });

const LoginPage = () => {
    
    const initialValues: LoginFormData = { username: "", password: "" };
    const[result, setResult] = useState<any>();

    const handleSubmit = async (values: LoginFormData) => {
        if(values){
            const response = await axios.post("https://localhost:7199/api/auth/login", values);
            setResult(response.data);
            console.log(response.data)
        }
    };
  
    return (
        <>
        <code>{JSON.stringify(result)}</code>
        
        <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, values }) => (
            <Form>
                <div className="input-group">
                <label htmlFor="username">Email</label>
                <Field className="form-control" type="text" name="username" id="username" />
                <ErrorMessage name="username" component="div" />
                </div>
                <div>
                <label htmlFor="password">Senha</label>
                <Field className="form-control" type="password" name="password" id="password" />
                <ErrorMessage name="password" component="div" />
                </div>
                <button type="submit" disabled={isSubmitting} onClick={() => handleSubmit({username: values.username, password: values.password})}>
                Entrar
                </button>
            </Form>
            )}
        </Formik>
      </>
    );
}

export default LoginPage;