// Don't touch this file, it is the starting file for the project
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
	return (
		<Fragment>
			<Component {...pageProps} />
		</Fragment>
	);
}

export default MyApp;
