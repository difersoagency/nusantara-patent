"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useEffect, useRef } from "react";

export default function ProductRightTab() {
	const descTabR = useRef<HTMLDivElement | null>(null);
	const titleTabR = useRef<HTMLDivElement | null>(null);
	const [isActive, setActive] = useState(false);

	useEffect(() => {
		const DescElementR = descTabR.current;
		const TitleElementR = titleTabR.current;

		// const disable = () => {
		//     DescElementR?.classList.remove("animate-tab-active");
		//     DescElementR?.classList.add("animate-tab-disable");
		// }

		const active = () => {
			DescElementR?.classList.toggle("animate-tab-disable");
			DescElementR?.classList.toggle("animate-tab-active");
		};

		if (TitleElementR) {
			// if (DescElementR?.classList.contains("animate-tab-active")) {
			//         TitleElementR.addEventListener('click', disable)
			// }
			TitleElementR.addEventListener("click", () => {
				setActive(!isActive);
				if (isActive) {
					DescElementR?.classList.toggle("animate-tab-disable");
					DescElementR?.classList.toggle("animate-tab-active");
				}
			});
		}
	});

	return (
		<div
			className={`border-t-2 border-t-primary   mx-auto relative z-20 `}
		>
			<div className="">
				<div
					className="flex hover:bg-[#1D3B66] py-[3vh]  px-[3vw] transition-all hover:text-white justify-between items-center cursor-pointer"
					ref={titleTabR}
				>
					<div className="">
						<Image
							src="/paten.png"
							width={48}
							height={49}
							alt="Merk"
							className="w-[2.4vw]"
						/>
					</div>
					<div>
						<h3 className="text-[2.4vw] font-[500]">Paten</h3>
					</div>
					<div
						className={`text-[2.4vw] ${
							isActive ? "text-primary" : "text-[#D9DEEB]"
						}`}
					>
						{!isActive ? "+" : "-"}
					</div>
				</div>
				<div
					className={`h-0 opacity-0 ${
						isActive ? "animate-tab-active" : "animate-tab-disable"
					}`}
					ref={descTabR}
					data-aos="fade-in"
				>
					<div className="grid grid-cols-2 py-[6vh] ">
						<div className="">
							<p className="text-[1.2vw] leading-[5vh] pr-[3vw]">
								<span className="font-bold">Hak eksklusif</span> yang diberikan
								atas suatu penemuan, yaitu produk atau proses cara baru dalam
								melakukan sesuatu, atau menawarkan solusi teknis baru terhadap
								suatu masalah.
							</p>

							<div className=" grid grid-cols-5 mt-[4vh] justify-between w-[30vw]">
								<div className="flex gap-[1.4vw] col-span-2">
									<Image
										src="/scoop.png"
										width={25}
										height={25}
										alt="Simbol, Gambar"
										className="object-contain"
									/>
									<p className="text-[1vw]">Pesawat R80 Oleh BJ Habibie</p>
								</div>
								<div>
									<div className="w-[0.2vw] h-full bg-gray mx-auto"></div>
								</div>
								<div className="flex gap-[1.4vw] items-center col-span-2">
									<Image
										src="/time.png"
										width={25}
										height={25}
										alt="Simbol, Gambar"
										className="object-contain"
									/>
									<p className="text-[1vw]">6 - 24 Bulan</p>
								</div>
							</div>
						</div>

						<div>
							<Image
								src="/plane.png"
								width={600}
								height={221}
								alt="IP Attorney"
								className="w-[33vw] ml-auto"
							/>
						</div>

						<div className="col-span-2 mt-[5vh]">
								<div className="mx-auto text-center mt-[3vh] mb-[5vh]">
								<a
									href=""
									className="border-primary border text-black mont text-[1vw] px-[1.5vw] py-[2vh] text-center hover:bg-primary transition-all hover:text-white tracking-wider"
								>
									READ MORE
								</a>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	);
}
