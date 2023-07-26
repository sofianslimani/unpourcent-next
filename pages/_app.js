import "../styles/main.scss";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../layouts/Header/Header.js";
import Footer from "../layouts/Footer/Footer";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          content="width=device-width,initial-scale=1,viewport-fit=cover"
          name="viewport"
        />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </Head>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          key={router.route}
          transition={{ duration: 0.4 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default MyApp;
