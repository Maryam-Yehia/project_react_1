import { Link } from 'react-router'

export default function Navbar() {
  return (
    <>


    <nav className="navbar navbar-expand-lg px-3 mb-5 fixed-top text-white" id="navbar-example2">
  <div className="container text-uppercase ">
    <Link className="navbar-brand logo text-white" to="/">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto gap-3 ">
        <li className="nav-item links">
          <Link className="nav-link active text-white" aria-current="page" to="/about">ABOUT </Link>
        </li>
        <li className="nav-item links">
          <Link className="nav-link text-white" to="/portfolio">PORTFOLIO</Link>
        </li>
        <li className="nav-item links">
          <Link className="nav-link text-white" to="/contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  

  
    </>
  )
}
