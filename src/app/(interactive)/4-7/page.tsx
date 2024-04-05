"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Next from "./next";


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
        <textarea className="mt-4 w-5/6 h-56 rounded-lg text-left inline-block align-text-top p-4 text-wrap drop-shadow-md" 
         placeholder= "โปรดพิมพ์คำตอบของคุณ" 
         required = {true} maxLength={180} onChange={(e)=>setChar(e.target.value)}></textarea>                    
          </motion.div>
          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1,transition:{duration:3}}}
            //transiton={{duration:3,delay:7}}
            className="grid justify-items-center"
        >
            
         <Next char={char} handleReframe={handleReframe}/>
         
         </motion.div>
         
         </div>
);
    
}