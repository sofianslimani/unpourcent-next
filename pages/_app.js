import '../styles/main.scss';
import Header from '../layouts/Header/Header.js';
import Footer from '../layouts/Footer/Footer';
import Head from 'next/head';
import React, { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [seo, setSeo] = useState({
    description:
      "Avec Un Pour Cent, soutenez des projets qui font du bien. Chaques mois, découvrez et soutenez un nouveau projet et recevez des nouvelles de l'avancement du projet.",
  });

  return (
    <>
      <Head>
        <meta name="description" content={seo.description} />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
