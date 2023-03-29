import React from "react";
import ContactForm from "../components/contact/ContactForm";

import Footer from "../components/Footer/Footer";
import Nav from "../components/Navbar/Nav";

export default function Contact() {
	return (
		<>
			<Nav />
			<div
				id="image"
				className="-z-30
			"
			>
				<ContactForm />
			</div>
			<Footer />
		</>
	);
}
