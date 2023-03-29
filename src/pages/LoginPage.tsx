import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

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

    const handleSubmit = async (values: LoginFormData) => {
        if(values){
            const response = await axios.post("https://localhost:7199/api/auth/login", values);

            let expires = new Date()
            expires.setTime(expires.getTime() + (response.data.expires_in * 1000))

            console.log('response',response);
            
            if(response.data.value.token) {
              setCookie('token', response.data.value.token, { path: '/',  expires})
              setCookie('refreshToken', response.data.value.refreshToken, {path: '/', expires})
            }
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
                <div className="input-group">
                <label htmlFor="username">Usuário</label>
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