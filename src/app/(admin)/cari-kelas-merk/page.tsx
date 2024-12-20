"use client";
import React, {
	useEffect,
	useState,
	FormEvent,
	ChangeEvent,
	useMemo,
} from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import axios from "axios";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
const ROOT_API = process.env.NEXT_PUBLIC_API;
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// type Props = {
//   keywords: string;
// };

export default function CariKelas() {
	const [data, setData] = useState([]);
	const [page, setPage] = useState(0);
	const [limit, setLimit] = useState(10);
	const [pages, setPages] = useState(0);
	const [rows, setRows] = useState(0);
	const [keyword, setKeyword] = useState("");
	const [query, setQuery] = useState("");
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [language, setLanguage] = useState("ind");
	const [kategori, setKategori] = useState("all");

	useEffect(() => {
		const keywords = localStorage.getItem("keywords");
		if (keywords) {
			setQuery(keywords);
			setKeyword(keywords);
			localStorage.setItem("keywords", "");
		}
	});

	// useEffect(() => {
	//   const keywordsParam = searchParams.get('keywords');
	//   setQuery(keywordsParam ? String(keywordsParam) : '');
	//   setKeyword(keywordsParam ? String(keywordsParam) : '');
	// }, [searchParams]);

	useEffect(() => {
		getData();
	}, [page, keyword, limit,kategori]);

	const getData = async () => {
		setLoading(true);
		try {
			const response = await axios.get(
				`https://nus-patent.vercel.app/api/kelas?search_query=${keyword}&page=${page}&limit=${limit}&kategori=${kategori}`
			);

			// const data1 = response.data.result.filter((item:any) => item.kelas >= 35 && item.kelas <= 45);
			
			setData(response.data.result);
			setPage(response.data.page);
			setPages(response.data.totalPage);
			setRows(response.data.totalRows);
		} catch (error) {
			console.error("Error Fetching");
		} finally {
			setLoading(false);
		}
	};


	const handleNextPage = () => {
		if (page < pages - 1) {
			setPage((prevPage) => prevPage + 1);
		}
	};

	const handlePreviousPage = () => {
		if (page > 0) {
			setPage((prevPage) => prevPage - 1);
		}
	};
	const handleLastPage = () => {
		setPage(pages - 1);
	};
	const handleFirstPage = () => {
		setPage(0);
	};

	const handlePageChange = (newPage: number) => {
		setPage(newPage);
	};

	const handleLimitChange = (size : number) => {
		setLimit(size)
		//alert(size)
	}

	const handleKategoriChange = (value : string) => {
		setKategori(value)
	}

	const findData = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setPage(0);
		setKeyword(query);
		setSearchTerm(e.target.value);
	};
	const columnss = columns(query, language);

	return (
		<div className="w-full  flex">
			<div className="mt-[7vh]">
				<div className="px-[10vw]">
					<h1 className="text-2xl mont lg:text-left text-center mb-[3vh] lg:mb-[0vw]">
						<span className="font-bold  text-primary">Cari Klasifikasi</span>{" "}
						Untuk Merek Anda!
					</h1>
					<form
						onSubmit={findData}
						className="lg:flex grid grid-cols-1 items-center mt-[2.5vw] text-center"
					>
						<div className="flex w-full items-center">
							<input
								type="text"
								name="merk"
								id="merk"
								className="border border-primary w-full px-[2vw] py-[3vw] lg:px-[1.5vw] lg:py-[1vw] text-xs outline-none rounded-lg"
								value={query}
								onChange={(e) => setQuery(e.target.value)}
							/>
						</div>
						<button
							type="submit"
							className="text-xs bg-primary text-white py-[2vh] w-[20vw] mt-[4vw] lg:mt-[0vw] mx-auto lg:w-[10vw] lg:ml-[2vw] rounded-lg"
						>
							Cari Kelas
						</button>
					</form>
					<div className="mt-[6vh] lg:mt-[3vw] lg:flex grid grid-cols-1 gap-y-7 items-center ">
						<div className="flex items-center justify-between gap-[1.5vw]">
							<p className="text-xs">Bahasa : </p>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="outline"
										className="w-[50vw] lg:w-auto h-full mr-[3vw] shadow-none border-primary text-xs"
									>
										{language === "ind" ? "Indonesia" : "English"}
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-56">
									<DropdownMenuSeparator />
									<DropdownMenuRadioGroup
										value={language}
										onValueChange={setLanguage}
									>
										<DropdownMenuRadioItem value="ind">
											Indonesia
										</DropdownMenuRadioItem>
										<DropdownMenuRadioItem value="en">
											English
										</DropdownMenuRadioItem>
									</DropdownMenuRadioGroup>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>

						<div className="flex items-center justify-between gap-[1.5vw]">
							<p className="text-xs ">Kategori : </p>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="outline"
										className="w-[30vw] lg:w-auto h-full  shadow-none border-black text-xs uppercase"
									>
										{kategori}
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-56">
									<DropdownMenuSeparator />
									<DropdownMenuRadioGroup
										value={kategori}
										onValueChange={handleKategoriChange}
									>
										<DropdownMenuRadioItem value="all">
											Semua
										</DropdownMenuRadioItem>
										<DropdownMenuRadioItem value="barang">
											Barang
										</DropdownMenuRadioItem>
										<DropdownMenuRadioItem value="jasa">
											Jasa
										</DropdownMenuRadioItem>
									</DropdownMenuRadioGroup>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					</div>
				</div>

				<div className="lg:mt-[4vw] mt-[10vw]">
					<DataTable
						columns={columnss}
						data={data}
						rows={rows}
						page={page}
						pages={pages}
						onFirstPage={handleFirstPage}
						onNextPage={handleNextPage}
						onPreviousPage={handlePreviousPage}
						onLastPage={handleLastPage}
						onPageChange={handlePageChange}
						onLimitChange={handleLimitChange}
						loading={loading}
						keyword={keyword}
					/>
				</div>
			</div>
		</div>
	);
}
