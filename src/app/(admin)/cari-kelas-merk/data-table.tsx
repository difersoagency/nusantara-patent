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

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	rows: number
	page: number
	pages: number
	loading:boolean
	onNextPage: () => void;
    onPreviousPage: () => void;
	onPageChange: (page:number) =>void
}
const PAGE_RANGE = 2;
export function DataTable<TData, TValue>({
	columns,
	data,
	rows,
	page,
	pages,
	loading,
	onNextPage,
    onPreviousPage,
	onPageChange
}: DataTableProps<TData, TValue>) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	const getPageNumbers = () => {
        let startPage = Math.max(page - PAGE_RANGE, 0);
        let endPage = Math.min(page + PAGE_RANGE, pages - 1);

        // Adjust start and end page if close to the beginning or end
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

        // Add ellipses if there are gaps at the start or end
        if (startPage > 0) {
            pageNumbers.unshift("0");
        }
        if (endPage < pages - 1) {
            pageNumbers.push("0");
        }

        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

	return (
		<div className="rounded-md w-[100vw] px-[5vw]">
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
							<TableRow className="text-xs text-center px-[2vw]"
								key={row.id}
								data-state={row.getIsSelected() && "selected"}
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="h-24 text-center text-xs">
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		
			<div className="flex items-center justify-between space-x-2 px-[2vw] py-[4vh]">
			<div className="flex items-center">
          <span className="text-sm">Total Rows: {rows} Pages {rows ? page + 1 : 0} of {pages}</span>
        </div>
				<Button
					variant="outline"
					size="sm"
					onClick={onPreviousPage}
					disabled={page <= 0 || loading}
					
				>
					Previous
				</Button>
	

			
				<Button
					variant="outline"
					size="sm"
					onClick={onNextPage}
					disabled={page >= pages - 1 || loading}
				>
					Next
				</Button>
			</div>
		</div>
	);
}
