import React from "react";
import Email from "./Email";
import "./email.css";

export default function ContactForm() {
	return (
		<div id="hello" className="bg-gradient-to-r from-[#5a7081] to-[#769198] ">
			<div className="dark:bg-gradient-to-l from-[#2c3e50] to-[#303149]">
				<Email />
			</div>
		</div>
	);
}
