import Image from "next/image";
import ServicesBtn from "./_component/services";
import ProductTab from "./_component/produk";
import CekMerk from "./_component/cek";
import Footer from "./_component/footer";
import ProductRightTab from "./_component/product_r";
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
								<span className="uppercase mont text-[1.2vw] text-white tracking-wider">
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
									<span className="text-right uppercase text-[2vw] text-black font-semibold mont tracking-wider">
										Perkenalkan Kami
									</span>
									<h2 className="font-semibold text-[4.2vw] text-primary">
										NUSANTARA PATENT
									</h2>
									<p className="text-black text-[1.2vw] leading-[6vh] mt-[1vh] mb-[8vh] pl-[22vw]">
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
										className="uppercase px-[4vw] py-[3vh] border border-primary text-[1vw] tracking-wider hover:bg-primary hover:text-white transition-all mont"
									>
										Lebih Lanjut
									</a>
								</div>
							</div>
						</div>
						<div className="bg-[url('/sect2-h.webp')] bg-contain bg-no-repeat bg-left absolute w-full h-full mb-[-4vw]"></div>
						<div className="bg-[url('/below2.png')]  bg-no-repeat bg-[center_bottom_-3vw] bg-[length:115vw] absolute w-full h-full"></div>
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
								desc="Pengalihan Hak (jual/beli, habis, waris, wakaf, wasiat)"
								url="/"
								image="/ip-assign.png"
							/>

							<ServicesBtn
								name="Renewal"
								desc="Perpanjangan Merek"
								url="/"
								image="/ip-renew.png"
							/>

							<ServicesBtn
								name="Monitoring"
								desc="Pengawasan dan Perlindungan HKI"
								url="/"
								image="/ip-mon.png"
							/>

							<ServicesBtn
								name="Licensing"
								desc="Pencatatan Lisensi HKI"
								url="/"
								image="/ip-lic.png"
							/>

							<ServicesBtn
								name="Search"
								desc="Penelusuran & Analisis peluang pendaftaran HKI"
								url="/"
								image="/ip-search.png"
							/>

							<ServicesBtn
								name="Enforcement"
								desc="Gugatan perdata, pidana, somasi, mediasi"
								url="/"
								image="/ip-enfc.png"
							/>

							<ServicesBtn
								name="Audit"
								desc="Complete strategic review terhadap HKI yang dimiliki"
								url="/"
								image="/ip-audit.png"
							/>

							<a href="" className="w-[23vw]">
								<div className="flex justify-between items-center">
									<p className="text-black text-[1.5vw] italic hover:text-primary transition-all">
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

					<div className="bg-[url('/wayang.png')] bg-no-repeat bg-right w-full h-full bg-contain absolute bg-opacity-5 z-0"></div>
				</section>

				<section className=" relative w-full h-screen items-center ">
					<CekMerk />
				</section>

				<section className="bg-[#EBEEF5]">
					<div className="grid grid-cols-2">
						<div className="pl-[10vw] bg-[url('/gradien.png')] w-[50vw] py-[6vh] bg-cover ">
							<h2 className="text-black text-[4vw]">
								<span className="font-bold">Produk</span> HKI
							</h2>
							<p className="text-[1.2vw] text-black">
								Ragam jenis hak kekayaan intelektual.
							</p>
						</div>

						<div className="flex justify-between items-center pr-[14vw]">
							<div className="p-[1vw] border border-[#3D82C4] hover:bg-[#172E4E] hover:border-[#172E4E] transition-all">
								<Image
								src='/merk.png'
								width={1000}
								height={1000}
								alt="Produk Nusantara Patent" 
								className="w-[2vw]"
								/>
							</div>

							<div className="p-[1vw] border border-[#3D82C4] hover:bg-[#172E4E] hover:border-[#172E4E] transition-all">
								<Image
								src='/paten.png'
								width={1000}
								height={1000}
								alt="Produk Nusantara Patent" 
								className="w-[2vw]"
								/>
							</div>

							<div className="p-[1vw] border border-[#3D82C4] hover:bg-[#172E4E] hover:border-[#172E4E] transition-all">
								<Image
								src='/industri.png'
								width={1000}
								height={1000}
								alt="Produk Nusantara Patent" 
								className="w-[2vw]"
								/>
							</div>

							<div className="p-[1vw] border border-[#3D82C4] hover:bg-[#172E4E] hover:border-[#172E4E] transition-all">
								<Image
								src='/merk.png'
								width={1000}
								height={1000}
								alt="Produk Nusantara Patent" 
								className="w-[2vw]"
								/>
							</div>

							<div className="p-[1vw] border border-[#3D82C4] hover:bg-[#172E4E] hover:border-[#172E4E] transition-all">
								<Image
								src='/dagang.png'
								width={1000}
								height={1000}
								alt="Produk Nusantara Patent" 
								className="w-[1.7vw]"
								/>
							</div>

							<div className="p-[1vw] border border-[#3D82C4] hover:bg-[#172E4E] hover:border-[#172E4E] transition-all">
								<Image
								src='/dtlst.png'
								width={1000}
								height={1000}
								alt="Produk Nusantara Patent" 
								className="w-[2vw]"
								/>
							</div>
						</div>
					</div>
					<div className="w-full px-[10vw]">
					
							<div>
								<ProductTab />
							</div>


					
							<div>
								<ProductRightTab/>
							</div>


						
						<div className="border-t-2 border-t-primary py-[3vh] px-[3vw] flex justify-between items-center mx-auto">
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
								<h3 className="text-[2.4vw] font-[500]">Desain Industri</h3>
							</div>
							<div className="text-[2.4vw] text-[#D9DEEB]">+</div>
						</div>

						<div className="border-t-2 border-t-primary py-[3vh] px-[3vw] flex justify-between items-center mx-auto">
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
								<h3 className="text-[2.4vw] font-[500]">Hak Cipta</h3>
							</div>
							<div className="text-[2.4vw] text-[#D9DEEB]">+</div>
						</div>

						<div className="border-t-2 border-t-primary py-[3vh] px-[3vw] flex justify-between items-center mx-auto">
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
								<h3 className="text-[2.4vw] font-[500]">Rahasia Dagang</h3>
							</div>
							<div className="text-[2.4vw] text-[#D9DEEB]">+</div>
						</div>

						<div className="border-t-2 border-t-primary py-[3vh] px-[3vw] flex justify-between items-center mx-auto">
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
								<h3 className="text-[2.4vw] font-[500]">DTLST</h3>
							</div>
							<div className="text-[2.4vw] text-[#D9DEEB]">+</div>
						</div>
					</div>
				</section>

				<section className="h-screen">
					<div className="px-[10vw] h-screen absolute w-full">
						<div className=" w-[50vw] py-[6vh] bg-cover ">
							<h2 className="text-black text-[4vw]">
								<span className="font-bold">Perluas </span> HKI Anda
							</h2>
							<p className="text-[1.2vw] text-black">
								Mulai dari Local menuju Nasional hingga Internasional.
							</p>
						</div>
						<div className="flex mt-[15vh] mx-auto">
							<div className="border-x-[0.2vw] border-x-primary h-[45vh] pl-[2vh] pr-[6vh] text-primary flex items-center">
								<p className="[writing-mode:vertical-lr] m-auto text-[1.4vw] "><span className="font-bold">Lokal </span> ke <span className="font-bold"> Nasional</span></p>

								<Image
								src='/peta.png'
								width={740}
								height={271}
								alt="HKI Local ke Nasional"
								className="w-[50vw] ml-[4vw]"
								/>
							</div>
							<div className="border-r-[0.2vw] px-[4vh] border-r-[#D1D1D1] h-[45vh] text-[#D1D1D1] flex items-center">
								<p className="[writing-mode:vertical-lr] m-auto text-[1.4vw] "><span className="font-bold">Nasional </span> ke <span className="font-bold"> Internasional</span></p>

								{/* <Image
								src='/peta.png'
								width={740}
								height={271}
								alt="HKI Local ke Nasional"
								className="w-[50vw] ml-[4vw]"
								/> */}
							</div>
							<div className="border-r-[0.2vw] px-[4vh] border-r-[#D1D1D1] h-[45vh] text-[#D1D1D1] flex items-center">
								<p className="[writing-mode:vertical-lr] m-auto text-[1.4vw] "><span className="font-bold">Internasional </span> ke <span className="font-bold"> Nasional</span></p>

								{/* <Image
								src='/peta.png'
								width={740}
								height={271}
								alt="HKI Local ke Nasional"
								className="w-[50vw] ml-[4vw]"
								/> */}
							</div>
						</div>
					</div>
					<div>
						<Image
							src="/awan2.png"
							width={1000}
							height={30}
							alt="AWan"
							className="w-full h-auto "
						/>
					</div>
				</section>

				<section className="bg-[#EEF1F7] w-full py-[7vh] px-[10vw]">
					<div className=" flex items-center justify-between">
						<div>
							<h2 className="text-black text-[3vw]">
								<span className="font-bold">Anggota </span> dari
							</h2>
						</div>
						<div className="flex items-center justify-between w-[45vw]">
							<Image
								src="/inta.png"
								width={1000}
								height={30}
								alt="AWan"
								className="w-[12vw] h-auto "
							/>

							<Image
								src="/akhki.png"
								width={1000}
								height={30}
								alt="AWan"
								className="w-[12vw] h-auto "
							/>

							<Image
								src="/aippi.png"
								width={1000}
								height={30}
								alt="AWan"
								className="w-[12vw] h-auto "
							/>
						</div>
					</div>
				</section>

				<section className="w-full px-[24vw] py-[8.3vh] text-center bg-[url('/bgcta.png')] bg-cover">
					<h2 className="text-[4vw] text-[#5DBDEB] font-semibold mont">
						Kekayaan Intelektual
					</h2>
					<p className="text-[1.8vw] text-white mt-[2vh] font-light mont">
						merupakan aset yang sangatlah penting, namun sering diabaikan dan
						diremehkan.
					</p>
					<p className="text-white text-[1.4vw] mt-[2vh] font-light mont">
						Konsultasikan kekayaan intelektual Anda!
					</p>
					<a
						href=""
						className="flex gap-[1vw] mt-[4vh] w-fit m-auto bg-[#D9D9D9] px-[2vw] py-[2vh] bg-opacity-40 border hover:bg-opacity-60 transition-all  border-white"
					>
						<Image
							src="/wa.png"
							width={20}
							height={20}
							alt="WA IP Attorney di Indonesia"
							className="w-[1.3vw] h-auto object-contain"
						/>

						<span className="uppercase mont text-[1.2vw] text-white tracking-wider">
							+6282 2622 63636
						</span>
					</a>
				</section>

				<Footer/>
			</div>
		</>
	);
}
