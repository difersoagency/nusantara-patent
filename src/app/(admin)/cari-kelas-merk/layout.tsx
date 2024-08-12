import type { Metadata } from "next";
import "../../globals.css";


export const metadata: Metadata = {
  title: "Cari Kelas Merk",
  description: "Cari Klasifikasi Kelas untuk Merk Anda",
};

export default function AdminLayout({


  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en" className="overflow-x-hidden scroll-smooth" >
      
    //   <body className='relative bg-[#FDFDFD]' >
    <>
            {children}
     
      </>
    //   {/* </body>
    // </html> */}
  );
}
