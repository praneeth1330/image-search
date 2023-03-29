import React, { useEffect, useState } from "react";

export default function Navbar() {
	const [theme, setTheme] = useState(true);

	function handleClick() {
		setTheme((t) => !t);
		document.body.className = theme ? "" : "dark";
	}

	return (
		<div className="pl-3 bg-slate-200 dark:bg-slate-800">
			<nav className="flex items-center">
				<div className="w-[30px] h-4 border-2    border-white absolute flex items-center right-2 rounded-xl  transition-[.8s ] bg-slate-400 dark:bg-[#0a0a0a]">
					<button
						onClick={handleClick}
						className="p-[5px] rounded-[50%] bg-orange-500 transition-all absolute  right-4 dark:right-0"
					></button>
				</div>
			</nav>
		</div>
	);
}
