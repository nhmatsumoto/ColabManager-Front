import { useEffect, useState } from "react";
import { colabManagerFetch } from "../../axios/config";

interface DailyTask {
  id: number,
  date: string,
  description: string,
  projectId: number,
  userId: number,
  enable: boolean,
  createdAt: string,
  updatedAt: string
}

export const DailyTask = () => {

  const [dailyTasks, setDailyTask] = useState<DailyTask[]>([]);
  
  const getProjects = async () => {
    
    try {
      
      const payload = await colabManagerFetch.get('/GetTarefas');

      if(payload) 
      {
        setDailyTask(payload.data);
      }

    }catch(ex) {
      console.log(ex)
    }
  }

  const editDailyTask = (id:number) => {

  }

  useEffect(() => {
    getProjects();
  }, [])

  return (
    <>

      <h2>Lista de Tarefas</h2>
      <table className="table table-dark table-striped">
          <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Descrição</th>
                <th scope="col">Data</th>
                <th scope="col">Ativo</th>
                <th scope="col">Projeto</th>
                <th scope="col">Usuario</th>
                <th scope="col">Dt. Criação</th>
                <th scope="col">Dt. Atualização</th>
                <th scope="col">Opções</th>
            </tr>
          </thead>
          <tbody>

          {
              dailyTasks?.map((dailyTask, index) => (
                  <tr key={index}>
                      <td>{dailyTask.id}</td>
                      <td>{dailyTask.description}</td>
                      <td>{dailyTask.date}</td>
                      <td>{dailyTask.enable ? 'SIM' : 'NÃO'}</td>
                      <td>{dailyTask.createdAt}</td>
                      <td>{dailyTask.updatedAt}</td>  
                  </tr>
              ))}

          </tbody>
      </table>
    </>
  );
};

