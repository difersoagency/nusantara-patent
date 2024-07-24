import React from 'react'
import Image from 'next/image'
export default function HeaderNav() {
  return (
    <section className='px-[5vw] pt-[3vh] absolute w-full z-50'>
      <div>
        <div className='grid grid-cols-2 items-center justify-between'>
          <div>
            <Image
            src='/logo.png'
            width={240}
            height={40}
            alt='Logo Nusantara Patent'
            className='w-[20vw]'
            />
            {/* <img src="./logo.png" alt="Logo Nusantara Patent" className='w-'/> */}
          </div>
          <div className='flex justify-between items-center'>
            <a className='text-[1vw] hover:text-primary transition-colors' href="">Home</a>
            <a className='text-[1vw] hover:text-primary transition-colors' href="">About</a>
            <a className='text-[1vw] hover:text-primary transition-colors' href="">Services</a>
            <a className='text-[1vw] hover:text-primary transition-colors' href="">IP Tools</a>
            <a className='text-[1vw] hover:text-primary transition-colors' href="">IP Product</a>
            <a className='text-[1vw] hover:text-primary transition-colors' href="">Contact</a>
            <a className='text-[1vw] flex items-center gap-[0.5vw] ho' href="">
              <Image
              src='/id.png'
              width={13}
              height={13}
              alt='Nusantara Patent Indonesia'
              className='w-[1vw]'
              />
              <p>ID</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
