import React from 'react'
import {KelasMerk, columns} from './columns'
import { DataTable } from './data-table'

async function getData(): Promise<KelasMerk[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      kelas: 1,
      indo: 'testing',
      inggris: "pending",
    },
    {
      id: "728ed52f",
      kelas: 1,
      indo: 'testing2',
      inggris: "pending2",
    },
    {
      id: "728ed52f",
      kelas: 1,
      indo: 'testing2',
      inggris: "pending2",
    },
    {
      id: "728ed52f",
      kelas: 1,
      indo: 'testing2',
      inggris: "pending2",
    },
    {
      id: "728ed52f",
      kelas: 1,
      indo: 'testing2',
      inggris: "pending2",
    },
    {
      id: "728ed52f",
      kelas: 1,
      indo: 'testing2',
      inggris: "pending2",
    },
    {
      id: "728ed52f",
      kelas: 1,
      indo: 'testing2',
      inggris: "pending2",
    },
    
    // ...
  ]
}

export default async function KelasMerk() {

  const data = await getData()
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
            <DataTable columns={columns} data={data} />
          </div>
        </div>
        
      </div>
  )
}
