import React, { useState } from "react";

import { NavLink } from "react-router-dom";

export default function Nav() {
	const [open, setOpen] = useState(false);
	function handleClick() {
		setOpen(!open);
	}

	return (
		<div className="shadow-md  w-full top-0 left-0 z-[100] ">
			<div className="md:flex items-center justify-between mb-0 bg-white  dark:bg-slate-900 py-4 md:px-10 px-7">
				<div className="font-bold text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800  dark:text-white">
					Pixel
				</div>
				<div
					onClick={handleClick}
					className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden text-orange-600"
				>
					<i class={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
				</div>

				<ul
					className={`  md:flex md:items-center md:pb-0 pb-5  absolute md:static
                 bg-white md:z-auto z-30 left-0 w-full md:w-auto  font-[Poppins]
                 
                 md:pl-0 pl-9 transition-all duration-500 md:transition-none md:duration-[0] ease-in ${
										open ? "top-14 opacity-100" : "top-[-490px] "
									}md:opacity-100 
                 `}
				>
					<li className="md:ml-5 text-xl md:my-0 my-2">
						<NavLink to="/" className="">
							Home
						</NavLink>
					</li>
					<li className="md:ml-5 text-xl md:my-0 my-2">
						<NavLink to="/about" className="">
							About
						</NavLink>
					</li>
					<li className="md:ml-5 text-xl md:my-0 my-2">
						<NavLink to="/contact" className="">
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
}
