"use client"

import { ColumnDef } from "@tanstack/react-table"

export type KelasMerk = {
    id: string
    kelas: number
    nama_ind: string
    nama_eng: string
    
}


export const columns= (query: string): ColumnDef<KelasMerk>[] => [
   
    {
        accessorKey: 'kelas',
        header: 'Kelas'     
    },
    {
        accessorKey: 'nama_ind',
        header: 'Indonesia',
        cell: (info) => {// Ambil nilai searchTerm dari state tabel
            return getHighlightedText(info.getValue(), query);
          },
    },
    {
        accessorKey:'nama_eng',
        header:'Inggris'
    }
]

const getHighlightedText = (text: any, highlight: string) => {
    if (typeof text === 'object') {
      text = JSON.stringify(text);
    }
  
    const str = text?.toString() || '';
    const parts = str.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part:any, i:any) =>
      part.toLowerCase() === highlight.toLowerCase() ? <mark key={i}>{part}</mark> : part
    );
  };