"use client";

import { motion } from "framer-motion";
import { DownloadIcon } from "./downloadIcon";
import Link from "next/link";
import styled from 'styled-components';






export default function page() {
    const selfReframing = localStorage.getItem("selfReframing")
    const doubtYourselfFeeling = localStorage.getItem("doubtYourselfFeeling");
    let len:any = selfReframing?.length 
    len +=  doubtYourselfFeeling?.length
    
    if(len > 750) {
        len =  0.45 + ((3000-len)*(0.33)/2250)
      } else {
        len = 0.8
      }
    

    
    

    return (
        <Link href="/6-21">
        <div className="h-screen w-1024 bg-[url(/bg/bg6-20.webp)] bg-[length:450px_900px] bg-center" >
          
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1,transition:{duration:2}}}
            >
              <div className="absolute top-5 grid justify-items-center w-[252px] mx-24">
              <div style={{ fontSize: `${len}rem` }} className="mt-[102px] justify-self-center text-center content-center font-size:30% text-wrap text-brown drop-shadow ">
                  <h1>{doubtYourselfFeeling}</h1>
                </div>
                <div style={{ fontSize: `${len}rem` }} className=" mt-1 justify-self-center text-center content-center text-wrap text-brown drop-shadow">
                  <h1>แต่</h1>
                </div>
                <div style={{ fontSize: `${len}rem` }} className=" mt-1 justify-self-center text-center content-center text-wrap text-brown drop-shadow">
                  <h1>{selfReframing}</h1>
                </div>
              </div>
                
                    <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1,transition:{duration:2,delay:2}}}
                    >
                    <div className=" h-screen w-1024 bg-black opacity-60"></div>
                        <div className="animate-pulse">
                            <div className="absolute right-[85px] top-16 flex h-11 w-11 items-center justify-center gap-2.5 rounded-full bg-white ">
                                <DownloadIcon/>
                            </div>
                            <h1 className="text-white text-sm absolute right-32 top-[100px]">ดาวน์โหลดรูปภาพ</h1>
                            <h1 className="text-[#FFBA5A] text-xs absolute right-32 top-[120px]"> กดเพื่อไปต่อ</h1>
                        </div>
                    </motion.div>
              
            
            </motion.div>
            <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          z: 10,
          transition: { duration: 1, delay: 2.5 },
        }}
        className="absolute top-[80%]"
      ></motion.div>
          
            
        </div>
        </Link>
        
    );
}