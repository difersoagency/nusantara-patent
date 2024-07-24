"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

export default function CekMerk() {

    const merkTab = useRef<HTMLButtonElement | null>(null);
	const kelasTab = useRef<HTMLButtonElement | null>(null);
    const [isKelas, setKelas] = useState(false);

    useEffect(() => {
        const Merk = merkTab.current;
		const Kelas = kelasTab.current;

        Kelas?.addEventListener('click', () => {
            setKelas(true);
        })

        Merk?.addEventListener('click', () => {
            setKelas(false);
        })
    })

  return (
    <div>
        <div className="w-full h-[20vh] px-[10vw]">
						<div className="w-full flex justify-center items-center mx-auto " data-aos="fade-in">
							<button className={`w-[50vw] px-[12vw] py-[6vh] border-b-[0.2vw] ${!isKelas ? 'border-b-primary text-primary' : 'border-b-gray text-black'} hover:border-b-primary transition-all mont text-[1.3vw] font-semibold`} ref={merkTab}>
								CEK MERK
							</button>
							{/* <button className="border-b-gray">Icon</button> */}
							<button className={`w-[50vw] px-[12vw] py-[6vh] border-b-[0.2vw] ${isKelas ? 'border-b-primary text-primary' : 'border-b-gray text-black'} hover:border-b-primary transition-all mont text-[1.3vw] font-semibold`} ref={kelasTab}>
								CEK KELAS MERK
							</button>
						</div>
					</div>
					<div className="w-full h-[70vh]" data-aos="fade-in">
						<div className={`${isKelas ? 'bg-[url("/cekkelas.png")] bg-[center_left]' : 'bg-[url("/cekmerk.png")] bg-[center_right_-16vw]'} bg-contain bg-no-repeat  absolute w-full h-[80vh] mb-[-4vw]`}></div>
						<div className={` absolute flex z-20 w-[50vw] h-[80vh] pl-[10vw] pr-[2vw] ${isKelas ? 'right-0' : 'left-0'}`}>
							<div className="m-auto pr-[7vw] ">
								<div className="">
									<h2 className=" text-[3vw] leading-[8.5vh] text-black">
										<span className="text-primary font-bold">
											{isKelas ? 'Cari Klasifikasi ' : 'Cek Ketersediaan '}
										</span>
										{isKelas ? 'Untuk Merk Anda ' : 'Merk Anda '}
									</h2>
									<p className="text-black text-[1.2vw] leading-[4.5vh] mt-[3vh] mb-[3vh] font-light">

                                        {isKelas ? 'Temukan pilihan kelas, jenis barang/jasa yang sesuai dengan model bisnis Anda.' : 'Membantu Anda melakukan cek merek dengan mudah, sehingga Anda dapat terhindar dari penolakan pendaftaran merek '}
										
									</p>
									<div className="flex justify-between items-center">
										<input
											type="text"
											name="merk"
											id="merk"
											className="w-[80%] border border-b-2 border-primary py-[2vh] px-[2vw] text-[1vw]"
											placeholder={`${isKelas ? 'Masukan Kata Kunci Usaha Anda' : 'Tulis Nama Merek Anda'}`}
										/>
										<button className="py-[1.7vh] px-[1vw] bg-primary">
											<Image
												src="/search.png"
												width={200}
												height={200}
												alt="Search Your Brand Name"
												className="w-[1.5vw] h-[1.7vw] object-contain"
											/>
										</button>
									</div>
								</div>
							</div>
							{/* <div className={`${!isKelas ? 'hidden' : 'block'}`}></div> */}
						</div>
					</div>
    </div>
  )
}
