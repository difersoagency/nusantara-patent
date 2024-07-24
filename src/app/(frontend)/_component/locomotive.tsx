"use client"

import { useEffect } from 'react'
// import AOS from "aos";
// import LocomotiveScroll from 'locomotive-scroll';
// import "aos/dist/aos.css";

export const Locomotive = () => {
  useEffect(() => {
    (
        async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotive  = new LocomotiveScroll();
        }
    )
  }, [])

  return null;
}