import Image from "next/image";
import React from "react";

export default function Footer() {
	return (
		<>
			<footer className="w-full bg-[#DDE2EA] bg-[url('/footer-bg.png')] bg-contain bg-no-repeat pt-[5vh] bg-[center_bottom_-5vw]">
				<div className=" bg-[url('/running.png')] w-full h-[8vh] bg-cover pl-[10vw] bg-repeat animate-running whitespace-nowrap overflow-visible"></div>
				<div className="px-[10vw] py-[16vh] grid grid-cols-4 text-center">
					<div className="">
						<Image
							src="/logo-footer.png"
							width={280}
							height={151}
							alt="Logo Nusantara Patent IP Attorney"
							className="mx-auto"
						/>
						<p className="mt-[4vh] text-[1vw] text-center">
							Aryaduta Tower, City of Tomorrow Mall, <br /> Jl. Ahmad Yani No.
							288 - Surabaya
						</p>
						<div className="flex justify-between items-center">
							<div className="t"></div>
						</div>
					</div>
					<div className="col-span-3 pl-[10vw] grid grid-cols-3 justify-between items-start w-full">
						<div>
							<p className="uppercase tracking-widest text-[1.4vw] font-light text-left mb-[3vh]">
								TAUTAN
							</p>
							<hr className="bg-[#B9C1D9] h-[0.5vh] w-[12vw]" />
							<div className="flex flex-col text-left mt-[3vh] justify-between h-[30vh]">
								<a
									href=""
									className="text-[1vw] text-[#3C3C3C] hover:text-primary transition-all "
								>
									Beranda
								</a>
								<a
									href=""
									className="text-[1vw] text-[#3C3C3C] hover:text-primary transition-all "
								>
									Tentang
								</a>
								<a
									href=""
									className="text-[1vw] text-[#3C3C3C] hover:text-primary transition-all "
								>
									Layanan
								</a>
								<a
									href=""
									className="text-[1vw] text-[#3C3C3C] hover:text-primary transition-all "
								>
									Pencarian
								</a>
								<a
									href=""
									className="text-[1vw] text-[#3C3C3C] hover:text-primary transition-all "
								>
									Produk
								</a>
								<a
									href=""
									className="text-[1vw] text-[#3C3C3C] hover:text-primary transition-all "
								>
									Kontak Kami
								</a>
							</div>
						</div>
						<div>
							<p className="uppercase tracking-widest text-[1.4vw] font-light text-left mb-[3vh]">
								LAYANAN
							</p>
							<hr className="bg-[#B9C1D9] h-[0.5vh] w-[12vw]" />
							<div className="flex flex-col text-left mt-[3vh] justify-between h-[30vh]">
								<a
									href=""
									className="text-[1vw] text-[#3C3C3C] hover:text-primary transition-all "
								>
									Registrasi HKI
								</a>
								<a
									href=""
									className="text-[1vw] text-[#3C3C3C] hover:text-primary transition-all "
								>
									Pengalihan HKI
								</a>
								<a
									href=""
									className="text-[1vw] text-[#3C3C3C] hover:text-primary transition-all "
								>
									Perpanjangan HKI
								</a>
								<a
									href=""
									className="text-[1vw] text-[#3C3C3C] hover:text-primary transition-all "
								>
									Pengawasan HKI
								</a>
								<a
									href=""
									className="text-[1vw] text-[#3C3C3C] hover:text-primary transition-all "
								>
									Lisensi HKI
								</a>
								<a
									href=""
									className="text-[1vw] text-[#3C3C3C] hover:text-primary transition-all "
								>
									Kontak Kami
								</a>
								<a
									href=""
									className="text-[1vw] text-[#3C3C3C] hover:text-primary transition-all "
								>
									Lebih Banyak +
								</a>
							</div>
						</div>
						<div>
							<p className="uppercase tracking-widest text-[1.4vw] font-light text-left mb-[3vh]">
								PRODUK
							</p>
							<hr className="bg-[#B9C1D9] h-[0.5vh] w-[12vw]" />
							<div className="flex flex-col text-left mt-[3vh] justify-between h-[30vh]">
								<a
									href=""
									className="text-[1vw] text-[#3C3C3C] hover:text-primary transition-all "
								>
									Merk
								</a>
								<a
									href=""
									className="text-[1vw] text-[#3C3C3C] hover:text-primary transition-all "
								>
									Paten
								</a>
								<a
									href=""
									className="text-[1vw] text-[#3C3C3C] hover:text-primary transition-all "
								>
									Desain Industri
								</a>
								<a
									href=""
									className="text-[1vw] text-[#3C3C3C] hover:text-primary transition-all "
								>
									Hak Cipta
								</a>
								<a
									href=""
									className="text-[1vw] text-[#3C3C3C] hover:text-primary transition-all "
								>
									Rahasia Dagang
								</a>
								<a
									href=""
									className="text-[1vw] text-[#3C3C3C] hover:text-primary transition-all "
								>
									DTLST
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div className="bg-[#C4C8D1] text-center py-[2.3vh]">
				<p className="text-[1vw]">
					Copyright © 2024 Nusantara Patent Intellectual Property Attonery. All
					rights reserved
				</p>
			</div>
		</>
	);
}
