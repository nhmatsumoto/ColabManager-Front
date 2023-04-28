import axios from "axios";
import  { useEffect, useState } from "react";

interface Project {

  id: number,
  name: string,
  description: string,
  enable: boolean,
  createdAt: string,
  updatedAt: string

  // dailyTasks: null,
  // companyProject: null,
  // userProject: null,
}

export const ProjectList = () => {

  const [projects, setProjects] = useState<Project[]>([]);

  const getProjects = async () => {
    
    try {
      const payload = await axios.get('https://localhost:7199/api/project', {
        headers: { 
          'Content-Type': 'application/json'
        }
      })

      if(payload) 
      {
        setProjects(payload.data);
      }

    }catch(ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    getProjects();
  }, [])

  return (
    <>
      <h2>Lista de Projetos</h2>
      <table className="table">
          <thead>
          <tr>
              <th scope="col">Id</th>
              <th scope="col">Nome</th>
              <th scope="col">Descrição</th>
              <th scope="col">Ativo</th>
              <th scope="col">Dt. Criação</th>
              <th scope="col">Dt. Atualização</th>
          </tr>
          </thead>
          <tbody>
          {projects.map((project, index) => (
              <tr key={index}>
                  <td>{project.id}</td>
                  <td>{project.name}</td>
                  <td>{project.description}</td>
                  <td>{project.enable ? 'SIM' : 'NÃO'}</td>
                  <td>{project.createdAt}</td>
                  <td>{project.updatedAt}</td>
              </tr>
          ))}
          </tbody>
      </table>
    </>
  );
};

