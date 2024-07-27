"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useEffect, useRef } from "react";

export default function ProductRightTab() {
	const descTab = useRef<HTMLDivElement | null>(null);
	const titleTab = useRef<HTMLDivElement | null>(null);
	const [isActive, setActive] = useState(false);

	useEffect(() => {
		const DescElement = descTab.current;
		const TitleElement = titleTab.current;

        // const disable = () => {
        //     DescElement?.classList.remove("animate-tab-active");
        //     DescElement?.classList.add("animate-tab-disable");
        // }

        const active = () => {
            DescElement?.classList.toggle("animate-tab-disable");
			DescElement?.classList.toggle("animate-tab-active");
        }

		if (TitleElement) {
            // if (DescElement?.classList.contains("animate-tab-active")) {
            //         TitleElement.addEventListener('click', disable)
            // }
			TitleElement.addEventListener("click", () => {
				setActive(!isActive)
				if(isActive) {
					DescElement?.classList.toggle("animate-tab-disable");
					DescElement?.classList.toggle("animate-tab-active");
				}
				
			});
		}
	});

	return (
		<div className="" >
			<div
				className="flex justify-between items-center cursor-pointer"
				ref={titleTab}
			>
				<div className="">
					<Image
						src="/merk.png"
						width={48}
						height={49}
						alt="Merk"
						className="w-[2.4vw]"
					/>
				</div>
				<div>
					<h3 className="text-[2.4vw]">Merk</h3>
				</div>
				<div className={`text-[2.4vw] ${isActive ? "text-primary" : "text-[#D9DEEB]"}`}>{!isActive ? "+" : "-"}</div>
			</div>
			<div className={`h-0 opacity-0 ${isActive ? "animate-tab-active" : "animate-tab-disable"}`} ref={descTab} data-aos='fade-in'>
				<div className="grid grid-cols-2 py-[6vh] ">
					<div className="">
						<p className="text-[1.2vw] leading-[5vh]">
							<span className="font-bold">Sebuah tanda</span> yang mampu
							membedakan barang atau jasa suatu perusahaan dengan perusahaan
							lain.
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
								<p className="text-[1vw]">Simbol, gambar, dan logo</p>
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
								<p className="text-[1vw]">12 - 18 Bulan</p>
							</div>
						</div>
					</div>

                    <div>
						<Image
							src="/wi.png"
							width={600}
							height={221}
							alt="IP Attorney"
							className="w-[33vw]"
						/>
					</div>
				</div>
				<div className="mx-auto text-center mb-[5vh]">
					<a
						href=""
						className="border-primary border text-black mont text-[1vw] px-[1.5vw] py-[2vh] text-center hover:bg-primary transition-all hover:text-white"
					>
						READ MORE
					</a>
				</div>
			</div>
		</div>
	);
}
