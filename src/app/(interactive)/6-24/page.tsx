"use client";

import { motion } from "framer-motion";
import { DownloadIcon } from "./downloadIcon";
import { useEffect,useState } from "react";
import Link from "next/link";
import UAParser from "ua-parser-js";
import { toJpeg } from "html-to-image";
import { AnimatePresence } from "framer-motion";
import DownloadImageAlert from "~/components/downloadImageAlert";
import { Dialog } from "~/components/dialog";
import { DialogTrigger } from "~/components/dialog";
import styled from 'styled-components';
import React from "react";

    

export default function page() {

    const supportQuote = localStorage.getItem("doubtYourselfFeeling")
    



    return (
        //<Link href={link}>
        
            
            
          <div className="z-10 h-screen w-full bg-[url(/bg/bg6-23.webp)] bg-[length:450px_900px] bg-center" id="exportedWords"  >
            
              <h1 className="absolute mt-[160px] left-[80px] text-wrap text-white drop-shadow text-sm">
                  ถึงตัวฉันเอง...
              </h1>
              <div className="absolute h-2048 top-5 grid  w-[252px] mx-24">
                <h1 className=" mt-[205px] ml-[0px] justify-self-center text-center content-center text-wrap text-white text-sm drop-shadow">
                  {supportQuote}
                </h1>
              
            </div>   
        

        <div className="z-20 absolute right-[60px] top-[70px] flex h-11 w-11 items-center justify-center gap-2.5 rounded-full ">
           <DownloadIcon />       
        </div>
        <motion.div
                initial={{opacity:0}}
                animate={{opacity:1,transition:{duration:2}}}
            >
        <div className="grid h-screen w-full bg-black opacity-60"></div>
            
                <div className="grid absolute top-10 left-16 opacity-100 w-80 h-52 bg-white  mt-64 rounded-xl  drop-shadow-lg">
                        <h1 className="mt-8 mb-0 text-xl justify-self-center font-medium text-darkPurple" >ยืนยันเพื่อไปแผ่นต่อไป</h1>

                        <h1 className="absolute top-[70px] justify-self-center text-sm">หากผ่านไปแล้วไม่สามารถ</h1>
                        <h1 className="absolute top-[90px] justify-self-center text-sm">ย้อนกลับมาที่หน้านี้ได้</h1>
                        <div className="flex">
                            <button className="h-10 w-24 mt-10 ml-[55px] bg-white border-2 border-darkPurple text-darkPurple text-center text-lg  p-1.5 rounded-lg hover:bg-purple hover:text-white" type ="submit" > 
                                <Link href="/6-23">
                                    ยกเลิก
                                </Link>
                            </button>
                            <button className="h-10 w-24 mt-10 ml-[20px] bg-darkPurple text-white text-center text-lg  p-1.5 rounded-lg hover:bg-active hover:text-white" type ="submit" > 
                                <Link href="/6-25">
                                    ถัดไป
                                </Link>
                            </button>
                        </div>
                    
                    </div>
            </motion.div>
            
        </div>
        
        
    );
}