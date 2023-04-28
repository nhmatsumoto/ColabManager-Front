import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { projectFetch } from "../../../axios/config";

interface RegisterProjectFormData {
    projectName: string,
    projectDescription: string
}

const RegisterSchema = Yup.object().shape({
    projectName: Yup.string().required("O campo nome do projeto é obrigatório"),
    projectDescription: Yup.string().required("O campo descrição do projeto é obrigatório"),
});

export const ProjectForm = () => {

    const initialValues : RegisterProjectFormData = { 
        projectName: "",
        projectDescription: ""
    };

    const handleSubmit = async (values: RegisterProjectFormData) => {

        const request = {
            Name: values.projectName,
            Description: values.projectDescription
        };

        console.log("request:", request)

        try {
            const payload = await projectFetch.post('/project', request);
            return payload.data;

        }catch(ex){
            console.log(ex);
        }
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
                        <h2 className="fw-bold mb-2 text-uppercase">Cadastrar projeto</h2>
                        
                        <div className="form-outline form-white mb-4">
                            <label htmlFor="projectName">Nome do projeto</label>
                            <Field className="form-control" type="text" name="projectName" id="projectName" placeholder="Informe um nome para o projeto"/>
                            <ErrorMessage name="projectName" component="div" />
                        </div>
                        
                        
                        <div className="form-outline form-white mb-4">
                            <label htmlFor="projectDescription">Descrição do projeto</label>
                            <Field className="form-control" as="textarea" rows={3} name="projectDescription" id="projectDescription" placeholder="Informe uma descrição para o projeto"/>
                            <ErrorMessage name="projectDescription" component="div" />
                        </div>

                        <button className="btn btn-info px-3 text-white" type="submit" disabled={isSubmitting} >Cadastrar Projeto</button>
                    </Form>
                )}
            </Formik>
       </div>
    );
}