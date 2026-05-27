import '../styles/Services.css'

import tela from '../assets/tela_celular.jpg'
import bateria from '../assets/problemas-com-bateria.jpg'
import sistema from '../assets/sistema_update.jpg'

function Services() {

    return (

        <section className="services">

            <div className="container">

                <h2 className="services-title">
                    Nossos Serviços
                </h2>

                <div className="services-grid">

                    <div className="service-card">

                        <img
                            src={tela}
                            alt="Troca de tela"
                        />

                        <h3>Troca de Tela</h3>

                        <p>
                            Substituição de telas quebradas.
                        </p>

                        <button>
                            Saiba Mais
                        </button>

                    </div>

                    <div className="service-card">

                        <img
                            src={bateria}
                            alt="Bateria"
                        />

                        <h3>Troca de Bateria</h3>

                        <p>
                            Baterias novas com garantia.
                        </p>

                        <button>
                            Saiba Mais
                        </button>

                    </div>

                    <div className="service-card">

                        <img
                            src={sistema}
                            alt="Software"
                        />

                        <h3>Atualização</h3>

                        <p>
                            Correção e atualização de sistema.
                        </p>

                        <button>
                            Saiba Mais
                        </button>

                    </div>

                </div>

            </div>

        </section>

    )

}

export default Services