import React, { useEffect, useState } from "react";
import "./email.css";
import { useForm } from "react-hook-form";

export default function Email() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		formState,
		formState: { isSubmitSuccessful },
	} = useForm({
		defaultValues: {
			fullname: "",
			email: "",
			contact: "",
			age: "",
			gender: "",
		},
	});

	const getData = (data) => console.log(data);

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset({
				fullname: "",
				email: "",
				contact: "",
				age: "",
				gender: "",
			});
		}
	}, [getData]);

	return (
		<>
			<div className="py-12">
				<div className="trans py-5 m-auto w-[55vw] md:w-[45vw]  lg:w-[30vw] ">
					<form onSubmit={handleSubmit(getData)} className="">
						<div className="box">
							<label htmlFor="fullname" className="box-label">
								Fullname :
							</label>
							<input
								type="text"
								{...register("fullname", {
									required: "FullName Required",
								})}
								className="box-input"
							/>
							<span className="text-red-600 text-sm">
								{errors.fullname?.message}
							</span>
						</div>
						<div className="box">
							<label htmlFor="email" className="box-label">
								Email :
							</label>
							<input
								type="email"
								{...register("email", {
									required: true,
									pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
								})}
								className="box-input"
							/>
							<span className="text-red-600 text-sm">
								{errors.email && "Enter valid mail address"}
							</span>
						</div>
						<div className="box">
							<label htmlFor="contact" className="box-label">
								Contact :
							</label>
							<input
								type="number"
								{...register("contact", {
									required: "Num Required",
									minLength: {
										value: 10,
										message: "contact should be 10 digits",
									},
									maxLength: {
										value: 10,

										message: "contact should be 10 digits",
									},
								})}
								className="box-input"
							/>
							<span className="text-red-600 text-sm">
								{errors.contact?.message}
							</span>
						</div>
						<div className="box">
							<label htmlFor="age" className="box-label">
								Age :
							</label>
							<input
								type="number"
								{...register("age", {
									required: "Age is Required",
									max: {
										value: 60,
										message: "max age is 60 ",
									},
									min: {
										value: 18,
										message: "min age is 18",
									},
									valueAsNumber: true,
								})}
								className="box-input"
							/>
							<span className="text-red-600 text-sm">
								{errors.age?.message}
							</span>
						</div>
						<div className="flex">
							<div className="flex gap-2 items-center my-5 mx-4">
								<input
									type="radio"
									{...register("gender", { required: true })}
									className="w-[15px] h-[15px]"
									value="male"
								/>
								<label htmlFor="" className="">
									<i className="fa-solid fa-mars-stroke fa-2xl  "></i>
								</label>
							</div>
							<div className="flex gap-2 items-center my-5 mx-4">
								<input
									type="radio"
									{...register("gender", { required: true })}
									value="female"
									className="w-[15px] h-[15px]"
								/>
								<label htmlFor="" className="">
									<i class="fa-solid fa-venus fa-2xl"></i>
								</label>
							</div>
							<div className="flex gap-2 items-center my-5 mx-4">
								<input
									type="radio"
									{...register("gender", { required: true })}
									className="w-[15px] h-[15px]"
									value="other"
								/>
								<label htmlFor="" className="">
									<i class="fa-solid fa-transgender fa-2xl"></i>
								</label>
							</div>
						</div>
						<div className="px-10 py-5">
							<button
								type="submit"
								className=" bg-orange-500 text-2xl rounded-xl  p-2 dark:text-white dark:bg-gray-700 w-full "
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
