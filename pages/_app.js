import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Level HTML Template</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          />
          <link
            rel="stylesheet"
            href="font-awesome-4.7.0/css/font-awesome.min.css"
          />
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" type="text/css" href="/slick/slick.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="/slick/slick-theme.css"
          />
          <link rel="stylesheet" type="text/css" href="/css/datepicker.css" />
          <link rel="stylesheet" href="/css/tooplate-style.css" />
        </div>
      </Head>
      <NavBar/>

      <Component {...pageProps} />
      <Footer/>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
    </>
  );
}

export default MyApp;
