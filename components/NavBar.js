import Link from 'next/link'

const NavBar = () => {
    return (
        <div className="tm-top-bar" >
    {/* Top Navbar */}
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-expand-lg narbar-light">
          <Link href='/'>
          <a className="navbar-brand mr-auto" >
            <img width={130} className="img-fluid" src="img/logo.png" alt="Site logo" />
            Air Service

          </a>
          </Link>
          <button type="button" id="nav-toggle" className="navbar-toggler collapsed" >
            <span className="navbar-toggler-icon" />
          </button>
          <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href='/' >
                <a className="nav-link active " >Home </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/' >
                <a className="nav-link" >Flights</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/' >
                <a className="nav-link" >Book Tickets</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/' >
                <a className="nav-link">Contact Us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/Login' >
                <a className="nav-link">Login</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/Signup' >
                <a className="nav-link">Signup</a>
                </Link>
              </li>
            </ul>
          </div>                            
        </nav>            
      </div>
    </div>
  </div>
    );
}

export default NavBar;