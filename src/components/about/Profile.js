import React from "react";
import pixel from "../../images/logo.png";
import Fade from "react-reveal/Fade";

export default function Profile() {
	return (
		<>
			<div className="main items-center dark:bg-slate-900 bg-slate-300">
				<div
					className="pixel 
                 flex flex-col md:flex-row items-center justify-center
         "
				>
					<Fade left>
						<img
							src={pixel}
							alt=""
							className=" w-[60vw] h=[50vh] shadow-2xl rounded-2xl"
						/>
					</Fade>
					<Fade right>
						<div className="flex flex-col items-center px-11">
							<h1 className="text-3xl font-semibold font-[poppins] md:text-4xl py-5 dark:text-white">
								PIXEL
							</h1>
							<p className="dark:text-white ">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
								atque nostrum facilis laudantium iusto minima aspernatur illo
								sequi harum sint nisi, quam neque quibusdam itaque fugit?
								Dolorem, autem. Dolorem, maiores!
							</p>
							<p className="dark:text-white invisible lg:visible">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
								ipsa cupiditate amet provident incidunt quam et nisi, a quas
								officiis possimus soluta asperiores vero cumque pariatur natus
								dolorum voluptate veritatis? Lorem, ipsum dolor sit amet
								consectetur adipisicing elit. Error quisquam esse mollitia! Ut,
								natus labore! Iusto sed cum quos repudiandae quaerat corrupti
								quod, temporibus, aperiam commodi cumque quidem vitae
								praesentium?
							</p>
						</div>
					</Fade>
				</div>
				<div className="abt-c md:flex py-14">
					<Fade left>
						<div className="invisible h-0 md:h-[auto] md:visible md:w-[22rem] lg:w-[40rem] px-7 flex flex-col  overflow-hidden">
							<h1 className="text-3xl dark:text-white my-5">
								About The LeaderShip{" "}
							</h1>
							<p className="text-start  dark:text-white">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
								numquam animi eius sequi voluptates veritatis repellat suscipit.
								Consequuntur vitae obcaecati atque cupiditate dolor, numquam
								error possimus voluptates eligendi voluptatem amet! Lorem ipsum
								dolor sit amet consectetur adipisicing elit. Similique est cum
								corrupti nihil placeat, fugiat dolor. Iusto at perferendis
								natus, illum sint voluptatem amet ducimus, ab labore, suscipit
								nemo animi.
							</p>
						</div>
					</Fade>

					<div className="grid grid-cols-1 gap-14  lg:gap-x-40 md:grid-cols-2 ">
						<Fade bottom>
							<div className=" flex items-center md:p-2 lg:p-5 shadow-2xl rounded-3xl">
								<img
									src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt=""
									className="h-[12vh] w-[12vh] rounded-[100%] border-2 border-orange-500 object-cover"
								/>
								<div className=" px-7">
									<h1 className="text-3xl py-2 dark:text-white">
										Mr.Vivek Mittal
									</h1>
									<p className="text-gray-700 dark:text-gray-500">
										Chief Executive Officer
									</p>
								</div>
							</div>
						</Fade>

						<Fade bottom>
							<div className=" flex items-center md:p-2 lg:p-5 shadow-2xl rounded-3xl">
								<img
									src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt=""
									className="h-[12vh] w-[12vh] rounded-[100%] border-2 border-orange-500 object-cover"
								/>
								<div className=" px-7">
									<h1 className="text-3xl py-2 dark:text-white">Mr.Justin</h1>
									<p className="text-gray-700 dark:text-gray-500">
										Chief Financial Officer:
									</p>
								</div>
							</div>
						</Fade>
						<Fade bottom>
							<div className=" flex items-center md:p- lg:p-5 shadow-2xl rounded-3xl">
								<img
									src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600"
									alt=""
									className="h-[12vh] w-[12vh] rounded-[100%] border-2  border-orange-500 object-cover"
								/>
								<div className=" px-7">
									<h1 className="text-3xl py-2 dark:text-white">
										Mr.Peter jos
									</h1>
									<p className="text-gray-700 dark:text-gray-500">
										Chief Information Officer
									</p>
								</div>
							</div>
						</Fade>
						<Fade bottom>
							<div className=" flex items-center md:p-2 lg:p-5 shadow-2xl rounded-3xl">
								<img
									src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
									alt=""
									className="h-[12vh] w-[12vh] rounded-[100%] border-2 border-orange-500 object-cover"
								/>
								<div className=" px-7">
									<h1 className="text-3xl py-2 dark:text-white">
										Lucas Pezata
									</h1>
									<p className="text-gray-700 dark:text-gray-500">
										Chief Operations Officer
									</p>
								</div>
							</div>
						</Fade>
					</div>
				</div>
			</div>
		</>
	);
}
