"use client";

import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from "@tanstack/react-table";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

interface DropdownMenuRadioGroupProps {
	value: number;
	onValueChange: (newValue: number) => void;
  }
  

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	rows: number;
	page: number;
	pages: number;
	loading: boolean;
	keyword: string;
	onFirstPage: () => void;
	onNextPage: () => void;
	onPreviousPage: () => void;
	onLastPage: () => void;
	onPageChange: (page: number) => void;
	onLimitChange:(size:number) =>void;
}
const PAGE_RANGE = 0;
export function DataTable<TData, TValue>({
	columns,
	data,
	rows,
	page,
	pages,
	loading,
	keyword,
	onFirstPage,
	onNextPage,
	onPreviousPage,
	onLastPage,
	onPageChange,
	onLimitChange
}: DataTableProps<TData, TValue>) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		manualPagination: true,
		// rowCount: 200,
	});

	const [rowCount, setRowCount] = useState('10');

	
	const onLimitChanges = (newValue: string) => {
		setRowCount(newValue);
		onLimitChange(parseInt(newValue))
	}

	console.log(rowCount);


	const getPageNumbers = () => {
		let startPage = Math.max(page - PAGE_RANGE, 0);
		let endPage = Math.min(page + PAGE_RANGE, pages - 1);

		if (endPage - startPage < PAGE_RANGE * 2) {
			if (startPage === 0) {
				endPage = Math.min(PAGE_RANGE * 2, pages - 1);
			} else if (endPage === pages - 1) {
				startPage = Math.max(pages - PAGE_RANGE * 2 - 1, 0);
			}
		}

		const pageNumbers = [];
		for (let i = startPage; i <= endPage; i++) {
			pageNumbers.push(i);
		}

		// if (startPage > 0) {
		//     pageNumbers.unshift("0");
		// }
		// if (endPage < pages - 1) {
		//     pageNumbers.push("0");
		// }

		return pageNumbers;
	};

	const pageNumbers = getPageNumbers();

	return (
		<div className="rounded-md w-[100vw] px-[10vw]">
			<Table>
				<TableHeader className="bg-blue">
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<TableHead key={header.id} className="text-white text-center">
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
											  )}
									</TableHead>
								);
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								className="text-xs text-center px-[2vw]"
								key={row.id}
								data-state={row.getIsSelected() && "selected"}
							>
								{row.getVisibleCells().map((cell) => (
									
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
										{/* {table.getRow} */}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						// <p>{table.getRowModel().rows?.length}</p>
						<TableRow>
							<TableCell
								colSpan={columns.length}
								className="h-24 text-center text-xs"
							>
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>

			<div className="grid grid-cols-1  lg:flex items-center  justify-between lg:space-x-2 px-[2vw] py-[4vh]">
				<div className="flex items-center mb-[3vh] lg:mb-[0vh] mx-auto lg:mx-0 ">
					<span className="text-sm">Jumlah Data ditampilkan :</span>
					<div>
					<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="outline"
									className="w-[20vw] lg:w-[6vw] h-full ml-[2vw] lg:ml-[1vw] mr-[3vw] shadow-none border-primary text-xs"
								>
									{rowCount}
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-56 border-primary bg-white px-[2vw] py-[2vw]">
								<DropdownMenuSeparator />
								<DropdownMenuRadioGroup
									value={rowCount}
									
									onValueChange={onLimitChanges}
								>
									<DropdownMenuRadioItem className="text-xs hover:bg-primary hover:text-white px-[1vw] py-[0.5vh] rounded-md mb-[2vh]" value="10">
										10
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem className="text-xs hover:bg-primary hover:text-white px-[1vw] py-[0.5vh] rounded-md mb-[2vh]" value="25">
										25
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem className="text-xs hover:bg-primary hover:text-white px-[1vw] py-[0.5vh] rounded-md mb-[2vh]" value="50">
										50
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem className="text-xs hover:bg-primary hover:text-white px-[1vw] py-[0.5vh] rounded-md" value="100">
										100
									</DropdownMenuRadioItem>
									{/* <DropdownMenuRadioItem className="text-xs hover:bg-primary hover:text-white px-[1vw] py-[0.5vh] rounded-md" value={`${rows}`}>
										All
									</DropdownMenuRadioItem> */}
								</DropdownMenuRadioGroup>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>

				<div className="flex items-center mb-[3vh] lg:mb-[0vh] mx-auto lg:mx-0 ">
					<span className="text-sm">
						Total Data: {rows} Pages {rows ? page + 1 : 0} of {pages}
					</span>
			

				</div>
				<div className=" grid grid-cols-2 lg:flex items-center space-x-2 mx-auto">
					<Button
						variant="outline"
						size="sm"
						onClick={onFirstPage}
						disabled={loading}
						style={{ display: page == 0 ? "none" : "inline-block" }}
					>
						First
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={onPreviousPage}
						disabled={page <= 0 || loading}
						style={{ display: page == 0 ? "none" : "inline-block" }}
					>
						Previous
					</Button>

					{pageNumbers.map((pageNumber, index) => (
						<Button
							key={pageNumber}
							variant={page === pageNumber ? "secondary" : "outline"}
							size="sm"
							className="col-span-2 mb-[2vw] bg-white border border-black mt-[2vw]"
							onClick={() => onPageChange(pageNumber)}
						>
							{pageNumber + 1}
						</Button>
					))}

					<Button
						variant="outline"
						size="sm"
						onClick={onNextPage}
						disabled={page >= pages - 1 || loading}
						style={{ display: page === pages - 1 ? "none" : "inline-block" }}
					>
						Next
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={onLastPage}
						disabled={loading}
						style={{ display: page === pages - 1 ? "none" : "inline-block" }}
					>
						Last
					</Button>
				</div>
				
			</div>
		</div>
	);
}
