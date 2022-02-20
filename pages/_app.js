import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";
import { BACKEND_URL } from "../helper/baseUrl";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useEffect, useState } from "react";
import Login from "./Login";
import { Lines } from "react-preloaders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "react-use-cart";
import Whatsapp from "../components/Whatsapp";

const client = new ApolloClient({
  uri: `${BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  typeof window !== "undefined" && localStorage.getItem("jwt") ? (
    console.log("Welcome")
  ) : (
    <Login />
  );
  return (
    <>
      <Head>
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
      </Head>

      <ApolloProvider client={client}>
        {/* here whatsapp  */}
        <Whatsapp/>
        <CartProvider>
          <NavBar />
          <ToastContainer />

          <Component {...pageProps} />
          <Footer />
        </CartProvider>
      </ApolloProvider>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
    </>
  );
}

export default MyApp;
