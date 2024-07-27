"use client";

import Image from "next/image";
import React from "react";
import { useEffect, useRef } from "react";

interface ServiceProps {
	name: string | null;
	desc: string | null;
	url: string | null;
	image: string | null;
}

export default function ServicesBtn({
	name = null,
	desc = null,
	url = null,
	image = null,
}: ServiceProps) {

    const buttonRef = useRef<HTMLButtonElement | null>(null)
    const ipName = useRef<HTMLDivElement | null>(null)
    const ipDesc = useRef<HTMLParagraphElement | null>(null)


    useEffect(() => {

        const ButtonElement = buttonRef.current;
        const NameElement = ipName.current;
        const DescElement = ipDesc.current;


        const handleOver = () => {
            if(NameElement) {
                // DescElement?.classList.toggle('h-[7vh]');
                DescElement?.classList.remove('animate-service-size-down');
                DescElement?.classList.add('animate-service-size');

            }
        }
        const handleLeave = () => {
            if(NameElement) {
                DescElement?.classList.add('animate-service-size-down');
                DescElement?.classList.remove('animate-service-size');

            }
        }

        if (ButtonElement) {
            ButtonElement.addEventListener('mouseover', handleOver);
            ButtonElement.addEventListener('mouseout', handleLeave);

        }

    })    
	return (
		<button ref={buttonRef} className="w-fit" >
			<div className="w-[23vw]">
				<div className="grid grid-cols-3 border-b-[0.4vh] border-b-gray hover:border-b-primary transition-all items-center pb-[4vh]">
					<div className="">
						<Image
							src={`${image}`}
							width={70}
							height={70}
							alt="IP Registration at Nusantara Patent"
                            className="h-[10vh] w-auto"
						/>
					</div>
					<div className="col-span-2 transition-all" id="ipname" ref={ipName}>
						<h3 className="text-[1.4vw] text-left">
							IP <span className="font-bold">{name}</span>
						</h3>
						<p className="text-[1vw] mont text-left transition-all opacity-0 h-[0vh]" ref={ipDesc}>{desc}</p>
					</div>
				</div>
			</div>
		</button>
	);
}
