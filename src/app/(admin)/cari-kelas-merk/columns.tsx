"use client"

import { ColumnDef } from "@tanstack/react-table"
import { useState } from "react"

export type KelasMerk = {
    id: string
    kelas: number
    nama_ind: string
    nama_eng: string
    en:string
    ind:string
    
}



export const columns= (query: string, language:string,): ColumnDef<KelasMerk>[] => [
   
    {
        accessorKey: 'kelas',
        header: 'Kelas'     
    },
    {
        accessorKey: language === 'ind' ? 'nama_ind' : 'nama_eng',
        header: language === 'ind' ? 'Indonesia' : 'English',
        cell: (info) => {// Ambil nilai searchTerm dari state tabel
            return getHighlightedText(info.getValue(), query);
          },
    },
    // {
    //     accessorKey:'nama_eng',
    //     header:'Inggris',
    //     cell: (info) => {// Ambil nilai searchTerm dari state tabel
    //       return getHighlightedText(info.getValue(), query);
    //     },
    // }
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