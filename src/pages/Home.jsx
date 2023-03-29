import React from "react";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/home/Gallery";

import Nav from "../components/Navbar/Nav";

export default function Home() {
	return (
		<div>
			<div className="">
				<Nav />
			</div>
			<Gallery />
			<Footer />
		</div>
	);
}
