import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";
import { BACKEND_URL } from "../helper/baseUrl";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";



const client = new ApolloClient({
  uri: `${BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Air Tickets</title>

          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
            integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
            crossOrigin="anonymous"
          ></link>
        </div>
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
          integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <ApolloProvider client={client}>
      <NavBar />

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
                {/* <li className="p-1">
                  <Link href="/Ayurvedik">
                    <button
                      type="button"
                      style={{ width: "100%" }}
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Ayurveda
                    </button>
                  </Link>
                </li> */}

                {/* <li className="p-1">
                  <Link href="/contact">
                    <button
                      type="button"
                      style={{ width: "100%" }}
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                    >
                      Contact
                    </button>
                  </Link>
                </li> */}
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
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Component {...pageProps} />
      <Footer />
      </ApolloProvider>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
    </>
  );
}

export default MyApp;
