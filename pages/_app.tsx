import React from "react";
import Router from "next/router";
import withGA from "next-ga";
import dynamic from "next/dynamic";

import Layout from "../components/Layout";

const CookieConsent = dynamic(() => import("../components/CookieConsent"), {
  ssr: false
});

import "../styles/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <CookieConsent />
    </Layout>
  );
}

export default withGA("UA-72962798-5", Router)(MyApp);
