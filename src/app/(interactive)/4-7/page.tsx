"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { StartupSnapshot } from "v8";


export default function Page(){
    const [char,setChar] = useState<string>("");
    const handleReframe = () => {
        localStorage.setItem("heartReframing", char);
    }
        return ( 
            <div className="w-1024 h-screen"  >
            
            <div className="flex flex-col pt-20 h-40">
            <h1 className="text-disable text-center text-sans text-lg font-medium mt-14 font-plaphao"> "ฉันว่าฉันยังเก่งไม่พอ"</h1>
            </div>
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1,transition:{duration:3}}}
            //transiton={{duration:3,delay:7}}
            className="grid justify-items-center mt-8"
        >
         <h1 className="text-disable text-center text-sans ">แต่...</h1>
         </motion.div>
         <motion.div
            initial={{opacity:0}}
            animate={{opacity:1,transition:{duration:3}}}
            //transiton={{duration:3,delay:7}}
            className="grid justify-items-center"
        >
        <textarea className="mt-4 w-9/12 h-40 rounded-lg text-left inline-block align-text-top p-3 text-wrap " 
         placeholder= "โปรดพิมพ์คำตอบของคุณ" 
         required = {true} maxLength={180} onChange={(e)=>setChar(e.target.value)}></textarea>                    
          </motion.div>
          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1,transition:{duration:3}}}
            //transiton={{duration:3,delay:7}}
            className="grid justify-items-center"
        >
            
         <button className="h-10 w-24 mt-48 bg-darkPurple text-white text-center text-lg  p-1.5 rounded-lg hover:bg-active hover:text-white" type ="submit" onClick={handleReframe}> ยืนยัน </button>
         
         </motion.div>
         
         </div>
);
    
}