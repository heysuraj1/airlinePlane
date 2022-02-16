import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";

const NavBar = () => {
  const router = useRouter();
  const [show, setShow] = useState(null);

  function isActive(route) {
    if (route == router.pathname) {
      return "active";
    } else return "";
  }
  useEffect(()=>{
    setShow(false);

    if (window !== "undefined" && localStorage.getItem("jwt")) {
      setShow(true)
    } else {
      setShow(false);
    }

  },[])




    // typeof window !== "undefined" && localStorage.getItem("jwt")
    //   ? setShow(true)
    //   : setShow(false);
  

  return (
    <div className="tm-top-bar">
      {/* Top Navbar */}
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg narbar-light">
            <Link href="/">
              <a className="navbar-brand mr-auto">
                <img
                  width={130}
                  className="img-fluid"
                  src="img/logo.png"
                  alt="Site logo"
                />
                Air Service
              </a>
            </Link>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="navbar-toggler collapsed"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link href="/">
                    <a className={`nav-link  ${isActive("/")}`}>Home </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/Flights">
                    <a className={`nav-link  ${isActive("/Flights")}`}>
                      Flights
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/BookTickets">
                    <a className={`nav-link  ${isActive("/BookTickets")}`}>
                      Book Tickets
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/Contact">
                    <a className={`nav-link  ${isActive("/Contact")}`}>
                      Contact Us
                    </a>
                  </Link>
                </li>
                {typeof window !== "undefined" && localStorage.getItem("jwt") ? (
                  <>
                  <li className="nav-item">
                    <Link href="/MyTickets">
                      <a className={`nav-link  ${isActive("/MyTickets")}`}>
                        My Tickets
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/Login">
                      <a onClick={()=>{localStorage.clear("jwt")} } className={`nav-link  ${isActive("/Login")}`}>
                        LogOut
                      </a>
                    </Link>
                  </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link href="/Login">
                        <a className={`nav-link  ${isActive("/Login")}`}>
                          Login
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/Signup">
                        <a className={`nav-link  ${isActive("/Signup")}`}>
                          Signup
                        </a>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* for mobile  */}

      <div
        className="modal"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ marginTop: "130px" }}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ borderRadius: "50px" }}
        >
          <div className="modal-content">
            <div className="container-fluid">
              <ul className="list-group mt-3 mb-3">
                <li className="p-1">
                  <Link href="/">
                    <button
                      type="button"
                      style={{ width: "100%" }}
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      <i
                        style={{ fontSize: "20px", cursor: "pointer" }}
                        className="shopicon bi bi-house-fill "
                      >
                        {" "}
                      </i>
                      HOME
                    </button>
                  </Link>
                </li>
                <li className="p-1">
                  <Link href="/Flights">
                    <button
                      type="button"
                      style={{ width: "100%" }}
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Flights
                    </button>
                  </Link>
                </li>
                <li className="p-1">
                  <Link href="/BookTickets">
                    <button
                      type="button"
                      style={{ width: "100%" }}
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Book Tickets
                    </button>
                  </Link>
                </li>
                <li className="p-1">
                  <Link href="/Contact">
                    <button
                      type="button"
                      style={{ width: "100%" }}
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Contact Us
                    </button>
                  </Link>
                </li>

                {show ? (
                  <li className="p-1">
                    <Link href="/Login">
                      <div className="text-center mt-2">
                        <button
                          type="button"
                          style={{ width: "70%", borderRadius: "100px" }}
                          className="btn btn-danger"
                          data-bs-dismiss="modal"
                          onClick={()=>{localStorage.clear}}
                        >
                          LOGOUT
                        </button>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className="p-1">
                    <Link href="/Login">
                      <div className="text-center mt-2">
                        <button
                          type="button"
                          style={{ width: "70%", borderRadius: "100px" }}
                          className="btn btn-info"
                          data-bs-dismiss="modal"
                        >
                          LOGIN
                        </button>
                      </div>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
