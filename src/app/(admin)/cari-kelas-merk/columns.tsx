"use client"

import { ColumnDef } from "@tanstack/react-table"

export type KelasMerk = {
    id: string
    kelas: number
    nama_ind: string
    nama_eng: string
    
}


export const columns: ColumnDef<KelasMerk>[] = [
    {
        accessorKey: 'kelas',
        header: 'Kelas'     
    },
    {
        accessorKey: 'nama_ind',
        header: 'Indonesia'
    },
    {
        accessorKey:'nama_eng',
        header:'Inggris'
    }
]