import Image from "next/image";
import ServicesBtn from "./(frontend)/_component/services";
import ProductTab from "./(frontend)/_component/produk";
// import React, { useEffect } from "react";

export default function HalamanHome() {
	return (
		<>
			<div className="relative">
				<section className="relative">
					<div className="absolute z-10 flex w-full h-screen">
						<div className="m-auto text-center">
							<h1
								className="text-[4vw] font-semibold text-black leading-[16vh]"
								data-aos="zoom-out"
							>
								LINDUNGI KEAMANAN <br />{" "}
								<span className="text-[8vw] text-primary font-bold">
									MERK DAGANG
								</span>
							</h1>
							<p
								className="text-white text-[2.5vw] mb-[2.8vh]"
								data-aos="fade-in"
							>
								Keahlian kami siap membantu Anda!
							</p>
							<a
								data-aos="fade-in"
								href=""
								className="flex gap-[1vw] w-fit m-auto bg-[#D9D9D9] px-[2vw] py-[2vh] bg-opacity-40 border hover:bg-opacity-60 transition-all  border-white"
							>
								<span className="uppercase mont text-[1.2vw] text-white">
									Layanan Kami
								</span>
							</a>
						</div>
					</div>
					<div className="flex items-center absolute justify-between w-full">
						<Image
							src="/cloud-l.png"
							width={330}
							height={240}
							alt="Awan Jawa"
							className="mt-[-10vh] ml-[-4.5vw] w-[24vw] animate-float-l  "
						/>

						<Image
							src="/cloud-r.png"
							width={400}
							height={240}
							alt="Awan Jawa"
							className="mt-[-5vh] mr-[-7vw] w-[30vw] animate-float-r"
						/>
					</div>
					<div className='bg-[url("/banner-en.webp")] bg-cover w-full h-screen bg-center'></div>
				</section>

				<section className=" relative w-full h-screen items-center ">
					<div className="w-full h-full">
						<div className=" absolute z-20 grid grid-cols-3 h-4/5">
							<div></div>
							<div className="m-auto pr-[10vw] text-right col-span-2">
								<div className="">
									<span
										className="text-right uppercase text-[2vw] text-black font-semibold mont"
										data-aos="zoom-in"
									>
										Perkenalkan Kami
									</span>
									<h2
										className="font-semibold text-[4.2vw] text-primary"
										data-aos="fade-left"
									>
										NUSANTARA PATENT
									</h2>
									<p
										className="text-black text-[1.2vw] leading-[6vh] mt-[1vh] mb-[6vh] pl-[22vw]"
										data-aos="fade-left"
									>
										Nusantara Patent memberikan pelayanan hukum berupa
										pendaftaran, perpanjangan, pengalihan hak, perjanjian
										lisensi, seminar, training terkait Hak Kekayaan Intelektual;
										<br />
										<span className="font-bold">
											merek, paten, hak cipta, dan desain industri.
										</span>
									</p>
									<a
										href=""
										className="uppercase px-[4vw] py-[3vh] border border-primary text-[1.2vw]"
										data-aos="fade-left"
									>
										Read More
									</a>
								</div>
							</div>
						</div>
						<div className="bg-[url('/sect2-h.webp')] bg-contain bg-no-repeat bg-left absolute w-full h-full mb-[-4vw]"></div>
						<div
							className="bg-[url('/below2.png')]  bg-no-repeat bg-[center_bottom_-3vw] bg-[length:115vw] absolute w-full h-full"
							data-aos="fade-in"
						></div>
					</div>
				</section>

				<section className="bg-lightBlue w-full h-screen relative">
					<div className="absolute z-10 w-full">
						<div className="pl-[10vw] bg-[url('/gradien.png')] w-[50vw] py-[6vh] bg-cover ">
							<h2 className="text-black text-[3vw]">
								<span className="font-bold">Layanan</span> Kami
							</h2>
							<p className="text-[1.2vw] ">
								Biarkan kami memandu Anda dengan bantuan keahlian profesional
								kami.
							</p>
						</div>
						<div className="w-full gap-y-[6vh] px-[10vw] py-[4vh] grid grid-cols-3 items-center justify-between">
							<ServicesBtn
								name="Registration"
								desc="Pendaftaran HKI dari permohonan hingga sertifikat"
								url="/"
								image="/ip-regis.png"
							/>

							<ServicesBtn
								name="Assignment"
								desc="Pendaftaran HKI dari permohonan hingga sertifikat"
								url="/"
								image="/ip-assign.png"
							/>

							<ServicesBtn
								name="Renewal"
								desc="Pendaftaran HKI dari permohonan hingga sertifikat"
								url="/"
								image="/ip-renew.png"
							/>

							<ServicesBtn
								name="Monitoring"
								desc="Pendaftaran HKI dari permohonan hingga sertifikat"
								url="/"
								image="/ip-mon.png"
							/>

							<ServicesBtn
								name="Licensing"
								desc="Pendaftaran HKI dari permohonan hingga sertifikat"
								url="/"
								image="/ip-lic.png"
							/>

							<ServicesBtn
								name="Search"
								desc="Pendaftaran HKI dari permohonan hingga sertifikat"
								url="/"
								image="/ip-search.png"
							/>

							<ServicesBtn
								name="Enforcement"
								desc="Pendaftaran HKI dari permohonan hingga sertifikat"
								url="/"
								image="/ip-enfc.png"
							/>

							<ServicesBtn
								name="Audit"
								desc="Pendaftaran HKI dari permohonan hingga sertifikat"
								url="/"
								image="/ip-audit.png"
							/>

							<a href="" className="w-[23vw]" data-aos="zoom-in">
								<div className="flex justify-between items-center">
									<p className="text-black text-[1.5vw] italic">
										“Let us <span className="font-bold"> do the work.</span>”
									</p>
									<Image
										src="/arrow.png"
										width={26}
										height={20}
										alt="IP Attorney in Indonesia"
										className="w-[1.3vw] h-auto object-contain"
									/>
								</div>
							</a>
						</div>
					</div>

					<div
						className="bg-[url('/wayang.png')] bg-no-repeat bg-right w-full h-full bg-contain absolute z-0"
						data-aos="fade-left"
					></div>
				</section>

				<section className=" relative w-full h-screen items-center ">
					<div className="w-full h-[20vh] px-[10vw]">
						<div className="w-full flex justify-center items-center mx-auto ">
							<button className="w-[50vw] px-[12vw] py-[6vh] border-b-[0.2vw] border-b-gray hover:border-b-primary transition-all mont text-[1.3vw] font-semibold opacity-70">
								CEK MERK
							</button>
							{/* <button className="border-b-gray">Icon</button> */}
							<button className=" w-[50vw] px-[12vw] py-[6vh] border-b-[0.2vw] border-b-gray hover:border-b-primary transition-all mont text-[1.3vw] font-semibold opacity-70">
								CEK KELAS MERK
							</button>
						</div>
					</div>
					<div className="w-full h-[70vh]">
						<div className="bg-[url('/cekmerk.png')] bg-contain bg-no-repeat bg-[center_right_-16vw] absolute w-full h-[80vh] mb-[-4vw]"></div>
						<div className=" absolute flex z-20 w-[50vw] h-[80vh] pl-[10vw] pr-[2vw]">
							<div className="m-auto pr-[7vw] ">
								<div className="">
									<h2 className=" text-[3vw] leading-[8.5vh] text-black">
										<span className="text-primary font-bold">
											Cek Ketersediaan {""}
										</span>
										Merk Anda
									</h2>
									<p className="text-black text-[1.2vw] leading-[4.5vh] mt-[3vh] mb-[3vh]">
										Membantu Anda melakukan cek merek dengan mudah, sehingga
										Anda dapat terhindar dari penolakan pendaftaran merek
									</p>
									<div className="flex justify-between items-center">
										<input
											type="text"
											name="merk"
											id="merk"
											className="w-[80%] border border-b-2 border-primary py-[2vh] px-[2vw] text-[1vw]"
											placeholder="Search your brand"
										/>
										<button className="py-[1.7vh] px-[1.2vw] bg-primary">
											<Image
												src="/search.png"
												width={25}
												height={25}
												alt="Search Your Brand Name"
												className="w-[1.7vw]"
											/>
										</button>
									</div>
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</section>

				<section className="bg-[#EBEEF5]">
					<div className="grid grid-cols-2">
						<div className="pl-[10vw] bg-[url('/gradien.png')] w-[50vw] py-[6vh] bg-cover ">
							<h2 className="text-black text-[4vw]">
								<span className="font-bold">Produk</span> HKI
							</h2>
							<p className="text-[1.2vw] text-black">
								Ragam  jenis hak kekayaan intelektual.
							</p>
						</div>
					</div>
					<div className="w-full px-[10vw]">
						<div className="border-t-2 border-t-primary py-[3vh]   mx-auto ">
							<div>
								<ProductTab/>
							</div>
						</div>

						<div className="border-t-2 border-t-primary py-[3vh] flex justify-between items-center mx-auto">
							<div>
								<Image
									src="/paten.png"
									width={48}
									height={49}
									alt="Merk"
									className="w-[2.4vw]"
								/>
							</div>
							<div>
								<h3 className="text-[2.4vw]">Paten</h3>
							</div>
							<div className="text-[2.4vw] text-[#D9DEEB]">+</div>
						</div>

						<div className="border-t-2 border-t-primary py-[3vh] flex justify-between items-center mx-auto">
							<div>
								<Image
									src="/industri.png"
									width={48}
									height={49}
									alt="Pendaftaran HAKI Desain Industri"
									className="w-[2.4vw]"
								/>
							</div>
							<div>
								<h3 className="text-[2.4vw]">Desain Industri</h3>
							</div>
							<div className="text-[2.4vw] text-[#D9DEEB]">+</div>
						</div>

						<div className="border-t-2 border-t-primary py-[3vh] flex justify-between items-center mx-auto">
							<div>
								<Image
									src="/cipta.png"
									width={48}
									height={49}
									alt="Pendaftaran Hak Cipta"
									className="w-[2.4vw]"
								/>
							</div>
							<div>
								<h3 className="text-[2.4vw]">Hak Cipta</h3>
							</div>
							<div className="text-[2.4vw] text-[#D9DEEB]">+</div>
						</div>

						<div className="border-t-2 border-t-primary py-[3vh] flex justify-between items-center mx-auto">
							<div>
								<Image
									src="/dagang.png"
									width={48}
									height={49}
									alt="Merk"
									className="w-[2.4vw]"
								/>
							</div>
							<div>
								<h3 className="text-[2.4vw]">Rahasia Dagang</h3>
							</div>
							<div className="text-[2.4vw] text-[#D9DEEB]">+</div>
						</div>

						<div className="border-t-2 border-t-primary py-[3vh] flex justify-between items-center mx-auto">
							<div>
								<Image
									src="/dtlst.png"
									width={48}
									height={49}
									alt="Merk"
									className="w-[2.4vw]"
								/>
							</div>
							<div>
								<h3 className="text-[2.4vw]">DTLST</h3>
							</div>
							<div className="text-[2.4vw] text-[#D9DEEB]">+</div>
						</div>
					</div>
				</section>

				<section>
					<div className="px-[10vw] h-screen">
						<div className=" w-[50vw] py-[6vh] bg-cover ">
							<h2 className="text-black text-[4vw]">
								<span className="font-bold">Perluas </span> HKI Anda
							</h2>
							<p className="text-[1.2vw] text-black">
							Mulai dari Local menuju Nasional hingga Internasional.
							</p>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
