import React from "react";
import { Fade } from "react-reveal";
import Card from "./Card";
import "./gallery.css";

export default function Gallery() {
	return (
		<>
			<Fade>
				<Card />
			</Fade>
		</>
	);
}
