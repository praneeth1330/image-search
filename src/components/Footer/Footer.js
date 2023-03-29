import React from "react";

export default function Footer() {
	return (
		<div className="  ">
			<div className="  py-3  flex justify-between items-center dark:bg-slate-900 dark:text-white">
				<div className="px-6">
					<div className="font-bold text-lg cursor-pointer flex items-center font-[poppins] text-gray-800  dark:text-white">
						Pixel
					</div>
					<div className="dark:font-thin font-light text-sm cursor-pointer flex items-center font-[poppins] text-gray-800  dark:text-white">
						Giving Your Picture A Life
					</div>
				</div>
				<div className="social flex  items-center justify-between mx-9">
					<i class="fa-brands fa-instagram fa-2xl hover:text-gray-600 text-slate-800 dark:text-white dark:hover:text-orange-400 m-3"></i>
					<i class="fa-brands fa-facebook fa-2xl  hover:text-gray-600 text-slate-800 dark:text-white dark:hover:text-orange-400 mx-3"></i>
					<i class="fa-brands fa-twitter fa-2xl   hover:text-gray-600 text-slate-800 dark:text-white dark:hover:text-orange-400 mx-3"></i>
					<i class="fa-brands fa-linkedin fa-2xl  hover:text-gray-600 text-slate-800 dark:text-white dark:hover:text-orange-400 mx-3"></i>
				</div>
			</div>
			<div className=" py-10 dark:bg-slate-900  font-light  dark:text-white text-xs font-[Poppins] text-center">
				COPYRIGHT@Praneeth-2022
			</div>
		</div>
	);
}
