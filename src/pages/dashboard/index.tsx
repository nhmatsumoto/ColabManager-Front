import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import ProjectList from "./projectList";

const api = axios.create({
    baseURL: 'http://localhost:5247'
});

interface RegisterProjectFormData {
    projectName: string,
    projectDescription: string
}

const RegisterSchema = Yup.object().shape({
    projectName: Yup.string().required("O campo nome do projeto é obrigatório"),
    projectDescription: Yup.string().required("O campo descrição do projeto é obrigatória"),
});

export const ProjectPage = () => {

    const initialValues : RegisterProjectFormData = { 
        projectName: "",
        projectDescription: ""
    };

    const headers = {
        "Content-Type": "text/json", 
    };

    const handleSubmit = async (values: RegisterProjectFormData) => {

        const request = {
            projectName: values.projectName,
            projectDescription: values.projectDescription
        };

        const response = await api.post('/api/project', request, {
            headers: headers
        });
        return response.data;
    };
  
    return (
        <div className="container">
            <Formik
                initialValues={initialValues}
                validationSchema={RegisterSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, values }) => (
                    <Form>
                        <div className="card mt-5">
                            <div className="card-body">
                                <h2 className="fw-bold mb-2 text-uppercase">Cadastrar projeto</h2>

                                <div className="form-outline form-white mb-4">
                                    <Field className="form-control form-control-lg" type="text" name="projectName" id="projectName" placeholder="Nome completo"/>
                                    <ErrorMessage name="projectName" component="div" />
                                </div>


                                <div className="form-outline form-white mb-4">
                                    <Field className="form-control form-control-lg" type="text" name="projectDescription" id="projectDescription" placeholder="Descrição do projeto"/>
                                    <ErrorMessage name="projectDescription" component="div" />
                                </div>

                                <button className="btn btn-success px-5" type="submit" disabled={isSubmitting} >Cadastrar Projeto</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik> 

            <hr/>

            <ProjectList projects={[]} />
       </div>

    );
}