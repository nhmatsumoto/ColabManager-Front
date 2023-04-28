import React, { useEffect } from "react";

interface Project {
  name: string;
  description: string;
}

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2>Lista de Projetos</h2>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">Descrição</th>
                <th scope="col">Ações</th>
            </tr>
            </thead>
            <tbody>
            {projects.map((project, index) => (
                <tr key={index}>
                    <td>{project.name}</td>
                    <td>{project.description}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectList;
