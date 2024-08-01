"use client"
import React, { useEffect, useState ,FormEvent} from 'react'
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
    const [query,setQuery] =  useState("");
    const [loading, setLoading] = useState(false);

  useEffect(()=>{
    getData();
  },[page,keyword,limit])

  const getData = async() => {
    setLoading(true)
    try {
      const response = await axios.get(`${ROOT_API}/kelas?search_query=${keyword}&page=${page}&limit=${limit}`)
      setData(response.data.result)
      setPage(response.data.page)
      setPages(response.data.totalPage)
      setRows(response.data.totalRows)
    } catch (error) {
      console.error("Error Fetching")
    } finally {
      setLoading(false)
    }
   
  }

  const handleNextPage = () => {
    if (page < pages - 1) {
        setPage(prevPage => prevPage + 1);
    }
};

const handlePreviousPage = () => {
    if (page > 0) {
        setPage(prevPage => prevPage - 1);
    }
};
const handleLastPage = () => {
        setPage(pages-1);
   
};
const handleFirstPage = () => {
        setPage(0);
};

const handlePageChange = (newPage: number) => {
  setPage(newPage);
};

const findData = (e: FormEvent<HTMLFormElement>) =>  {
  e.preventDefault()
  setPage(0)
  setKeyword(query)
}

  return (
      <div className='w-full  flex'>
        <div className='mt-[7vh]'>
          <div className='px-[5vw]'>
            <h1 className='text-3xl mont'><span className='font-bold text-primary'>Cari Klasifikasi</span> Untuk Merk Anda!</h1>
            <form onSubmit={findData} className='flex items-center mt-[2.5vw]'>
              <input type="text" name="merk" id="merk" className='border border-primary w-full px-[1.5vw] py-[1vw] text-xs outline-none' value={query} onChange={(e)=>setQuery(e.target.value)}/>
              <button type='submit' className='text-xs bg-primary text-white py-[2vh]  w-[10vw] ml-[2vw]'>Cari Kelas</button>
            </form>
          </div>

          <div className='mt-[4vw]'>
            <DataTable columns={columns} data={data}  rows={rows} page={page} pages={pages} 
            onFirstPage={handleFirstPage}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
            onLastPage={handleLastPage}
            onPageChange={handlePageChange}
            loading={loading}
            />
          </div>
        </div>
        
      </div>
  )
}
