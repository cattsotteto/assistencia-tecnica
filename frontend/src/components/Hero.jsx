import hero from '../assets/hero.png'

function Hero() {

  return (

    <div>

      <section className="hero">

        <div className="overlay">

          <div className="container hero-content">

            <div className="row align-items-center">

              <div className="col-lg-6">

                <h1>
                  Assistência Técnica{" "}
                  <span>Rápida e Confiável</span>
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

export default Hero
   