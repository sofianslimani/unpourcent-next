import '../styles/main.scss';
import Header from '../layouts/Header/Header.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
