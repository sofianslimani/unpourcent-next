import '../styles/main.scss';
import Header from '../layouts/Header/Header.js';
import Footer from "../layouts/Footer/Footer";

function MyApp({Component, pageProps}) {
	return (<>
			<Header/>
			<Component {...pageProps} />
			<Footer/>
		</>);
}

export default MyApp;
