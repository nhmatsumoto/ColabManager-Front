import { Link } from "react-router-dom"

export const Navbar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>Colab Manager</Link>
              
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to={'/novo/projeto'}>Novo Projeto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/novo/usuario"}>Novo Usuário</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/listar/projetos"}>Listar Projetos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/listar/tarefas"}>Listar Tarefas</Link>
                        </li>
                    </ul>

                    
                    {/* <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/login"}> Login</Link>
                        </li>
                    </ul> */}
                </div>
            </div>
        </nav>
    )
}