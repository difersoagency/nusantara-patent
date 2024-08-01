"use client"

import { ColumnDef } from "@tanstack/react-table"

export type KelasMerk = {
    id: string
    kelas: number
    indo: string
    inggris: string
    
}


export const columns: ColumnDef<KelasMerk>[] = [
    {
        accessorKey: 'kelas',
        header: 'Kelas'     
    },
    {
        accessorKey: 'indo',
        header: 'Indonesia'
    },
    {
        accessorKey:'inggris',
        header:'Inggris'
    }
]