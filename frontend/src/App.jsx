import './App.css'
import hero from './assets/hero.png'

function App() {

  return (

    <div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black px-5">

        <a className="navbar-brand logo" href="/">
          TechFix
        </a>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                Serviços
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                Contato
              </a>
            </li>

          </ul>

          <button className="btn btn-purple ms-4">
            Agendar
          </button>

        </div>

      </nav>

      {/* HERO */}

      <section className="hero">

        <div className="overlay">

          <div className="container hero-content">

            <div className="row align-items-center">

              <div className="col-lg-6">

                <h1>
                  Assistência Técnica{""}
                  <span> Rápida e Confiável</span>
                </h1>

                <p>
                  Conserto especializado para smartphones.
                </p>

                <button className="btn btn-purple">
                  Agendar Conserto
                </button>

              </div>

              <div className="col-lg-6 text-center">

                <img
                  src={hero}
                  alt="Celular"
                  className="hero-image"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>

  )
}

export default App