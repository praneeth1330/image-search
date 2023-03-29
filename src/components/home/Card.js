import { useEffect, useState } from "react";
import axios from "axios";

function Card() {
	const [image, setImage] = useState([]);
	const [search, setSearch] = useState("");
	const [page, setPage] = useState("1");

	function handleSubmit(e) {
		e?.preventDefault();
		axios
			.get(
				`https://api.unsplash.com/search/photos?page=${page}&per_page=28&query=${search}&client_id=t2cO9jpQF5AAlF0mn2rcrCipkGDD9j9UjefRn-8GxBk`
			)
			.then((res) => setImage(res?.data?.results ?? []));
	}

	useEffect(() => {
		axios
			.get(
				"https://api.unsplash.com/search/photos?page=1&per_page=28&query=smile&client_id=t2cO9jpQF5AAlF0mn2rcrCipkGDD9j9UjefRn-8GxBk"
			)
			.then((res) => setImage(res?.data?.results ?? []));
	}, []);

	function Add() {
		if (page <= 4) {
			setPage((vari) => vari + 1);
		}
		handleSubmit();
	}
	function Sub() {
		if (page > 1) {
			setPage((vari) => vari - 1);
		}
		return handleSubmit();
	}

	return (
		<div className="flex flex-col items-center dark:bg-slate-900 transition-all duration-1000 delay-1000 ">
			<div className="m-auto my-10 flex items-center ">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="input"
						value={search}
						placeholder="Search Here"
						onChange={(e) => setSearch(e.target.value)}
						className=" w-28 md:w-96 h-10 border-2 rounded-lg bg-transparent text-xl dark:text-white placeholder:px-3 "
					/>
					<button
						type="submit"
						className=" w-20 h-10 mx-2 rounded-xl bg-slate-500 border-[1px] dark:text-white text-xl"
					>
						Search
					</button>
				</form>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-dense grid-rows-5 gap-5 px-5 transform-gpu">
				{image.map((value, index) => {
					return (
						<div key={index} className="w-auto lg:h-[22rem] object-cover ">
							<a
								href={value.urls.raw}
								download
								target="_blank"
								rel="noreferrer"
							>
								<img
									className="w-[97%] h-[97%]  object-cover rounded-xl cursor-pointer hover:w-[100%] hover:h-[100%] origin-center duration-1000"
									src={value.urls.small}
									alt="hello"
								/>
							</a>
						</div>
					);
				})}
			</div>
			<div className="m-auto my-12 flex ">
				<div
					onClick={Sub}
					className=" bg-slate-400 text-2xl mx-3 p-5 rounded-lg cursor-pointer transition-transform duration-1000"
				>
					<a href="#" className="transition-transform duration-1000">
						-
					</a>
				</div>
				<span className=" bg-slate-400 text-2xl mx-3 p-5 rounded-lg">
					{page}
				</span>
				<div
					onClick={Add}
					className=" bg-slate-400 text-2xl mx-3 p-5 rounded-lg cursor-pointer"
				>
					<a href="#"> + </a>
				</div>
			</div>
		</div>
	);
}

export default Card;
