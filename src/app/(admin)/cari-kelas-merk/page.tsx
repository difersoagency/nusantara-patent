"use client"
import React, { useEffect, useState } from 'react'
import {KelasMerk, columns} from './columns'
import { DataTable } from './data-table'
import axios from 'axios';
const ROOT_API = process.env.NEXT_PUBLIC_API;


export default  function CariKelas() {
    const [data,setData] = useState([]);
    const [page,setPage] = useState(0);
    const [limit,setLimit] = useState(10);
    const [pages,setPages] = useState(0);
    const [rows,setRows] = useState(0);
    const [keyword,setKeyword] =  useState("");

  useEffect(()=>{
    getData();
  },[page,keyword])

  const getData = async() => {
    const response = await axios.get(`${ROOT_API}/kelas?search_query=${keyword}&page=${page}&limit=${limit}`)

    setData(response.data.result)
    setPage(response.data.page)
    setPages(response.data.totalPage)
    setRows(response.data.totalRows)
  }




  return (
      <div className='w-full  flex'>
        <div className='mt-[7vh]'>
          <div className='px-[5vw]'>
            <h1 className='text-3xl mont'><span className='font-bold text-primary'>Cari Klasifikasi</span> Untuk Merk Anda!</h1>
            <form action="" className='flex items-center mt-[2.5vw]'>
              <input type="text" name="merk" id="merk" className='border border-primary w-full px-[1.5vw] py-[1vw] text-xs outline-none'/>
              <button type='submit' className='text-xs bg-primary text-white py-[2vh]  w-[10vw] ml-[2vw]'>Cari Kelas</button>
            </form>
          </div>

          <div className='mt-[4vw]'>
            <DataTable columns={columns} data={data}  rows={rows} page={page} pages={pages} />
          </div>
        </div>
        
      </div>
  )
}
