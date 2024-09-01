// http://localhost:3000
// Home page for the app

import { Fragment } from "react";
import Head from "next/head";
import "../styles.css";
function HomePage() {
	return (
		<Fragment>
			<Head>
				{/* This line of code describe the Header of the page */}
				<title>Governator dApp</title>
				<meta name="description" content="created by @TEAM_E" />
				<html darktheme="dark" />
			</Head>

			{/* Write Your code Here for the Home Page */}
			<h1>Welcome to Governator dApp</h1>
		</Fragment>
	);
}

export default HomePage;
