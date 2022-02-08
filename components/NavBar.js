import { useRouter } from "next/router";
import Link from 'next/link'

const NavBar = () => {
  const router = useRouter();



  function isActive(route) {
    if (route == router.pathname) {
      return "active";
    } else return "";
  }






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
          <button type="button" data-bs-toggle="modal"
          data-bs-target="#exampleModal" className="navbar-toggler collapsed" >
            <span className="navbar-toggler-icon" />
          </button>
          <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href='/' >
                <a className={`nav-link  ${isActive("/")}`} >Home </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/Flights' >
                <a className={`nav-link  ${isActive("/Flights")}`} >Flights</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/BookTickets' >
                <a className={`nav-link  ${isActive("/BookTickets")}`} >Book Tickets</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/Contact' >
                <a className={`nav-link  ${isActive("/Contact")}`}>Contact Us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/Login' >
                <a className={`nav-link  ${isActive("/Login")}`}>Login</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/Signup' >
                <a className={`nav-link  ${isActive("/Signup")}`}>Signup</a>
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