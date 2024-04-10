"use client";

import { motion } from "framer-motion";
import { DownloadIcon } from "./downloadIcon";
import Link from "next/link";


export default function page() {
    const selfReframing = localStorage.getItem("selfReframing")
    const doubtYourselfFeeling = localStorage.getItem("doubtYourselfFeeling");

    let len:any = selfReframing?.length 
    len +=  doubtYourselfFeeling?.length
    console.log(len)
    if(len > 750) {
      len =  0.45 + ((3000-len)*(0.33)/2250)
    } else {
      len = 0.8
    }
    
    return (
        
        <div className="h-screen w-1024 bg-[url(/bg/bg6-20.webp)] bg-[length:450px_900px] bg-center" >
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
                animate={{opacity:1,transition:{duration:1}}}
            >
              
              <div className="absolute right-[85px] top-16 flex h-11 w-11 items-center justify-center gap-2.5 ">
                    <DownloadIcon/>
                </div>
                <div className="grid h-screen w-1024 bg-black opacity-60">
                    
                </div>
                <div className="grid absolute top-10 left-16 opacity-100 w-80 h-52 bg-white  mt-64 rounded-xl  drop-shadow-lg">
                        <h1 className="mt-8 mb-0 text-xl justify-self-center font-medium text-darkPurple" >ยืนยันเพื่อไปแผ่นต่อไป</h1>

                        <h1 className="absolute top-[70px] justify-self-center text-sm">หากผ่านไปแล้วไม่สามารถ</h1>
                        <h1 className="absolute top-[90px] justify-self-center text-sm">ย้อนกลับมาที่หน้านี้ได้</h1>
                        <div className="flex">
                            <button className="h-10 w-24 mt-10 ml-[55px] bg-white border-2 border-darkPurple text-darkPurple text-center text-lg  p-1.5 rounded-lg hover:bg-purple hover:text-white" type ="submit" > 
                                <Link href="/6-21">
                                    ยกเลิก
                                </Link>
                            </button>
                            <button className="h-10 w-24 mt-10 ml-[20px] bg-darkPurple text-white text-center text-lg  p-1.5 rounded-lg hover:bg-active hover:text-white" type ="submit" > 
                                <Link href="/6-23">
                                    ถัดไป
                                </Link>
                            </button>
                        </div>
                    
                    </div>
                    
              
            
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
        
        
    );
}