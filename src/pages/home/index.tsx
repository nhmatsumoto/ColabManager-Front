import { Link } from "react-router-dom"
import './style.css'

export const HomePage = () => {

    return (
        <>
           
            <section className="intro-banner">
                <div className="container">
                    <h1 className="title">Bem-vindo à Calab Manager!</h1>
                    <p className="subtitle">
                        Simplifique o gerenciamento da sua empresa PJ com nossa plataforma exclusiva! 
                        Tenha acesso a recursos intuitivos para organizar suas tarefas administrativas, financeiras, fiscais e de gestão de clientes em um único lugar. 
                        Tomada de decisões informadas e análises detalhadas para impulsionar seu negócio. Experimente agora e faça seu negócio prosperar!
                    </p>
                    <a href="#" className="cta-button">Saiba Mais</a>
                </div>
            </section>

            <section className="bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Recurso 1</h2>
                            <p>Uma breve descrição do recurso 1, destacando seus benefícios e vantagens.</p>
                        </div>
                        <div className="col-md-4">
                            <h2>Recurso 2</h2>
                            <p>Uma breve descrição do recurso 2, destacando seus benefícios e vantagens.</p>
                        </div>
                        <div className="col-md-4">
                            <h2>Recurso 3</h2>
                            <p>Uma breve descrição do recurso 3, destacando seus benefícios e vantagens.</p>
                        </div>
                    </div>
                </div>
            </section>            
        </>
    )

}
