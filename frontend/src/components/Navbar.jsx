function Navbar() {

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-5">

      <a className="navbar-brand logo" href="/">
        TechFix
      </a>

      <button
        className="navbar-toggler"
        type="button"
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

  )
}

export default Navbar