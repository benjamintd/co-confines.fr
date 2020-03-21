import React from "react";
import Head from "next/head";

export default () => (
  <Head>
    <title>CoConfinés</title>
    <link rel="shortcut icon" href="/favicon.png" />
    <meta property="og:title" content="Coconfinés" />
    <meta
      property="og:description"
      content="Collection de ressources pour mieux vivre le confinement."
    />
    <meta property="og:image" content="https://co-confines.fr/og-image.png" />
    <meta property="og:url" content="https://co-confines.fr" />
    <meta name="twitter:title" content="Coconfinés" />
    <meta
      name="twitter:description"
      content="Collection de ressources pour mieux vivre le confinement."
    />
    <meta name="twitter:image" content="https://co-confines.fr/og-image.png" />
    <meta name="twitter:card" content="summary_large_image"></meta>
  </Head>
);
