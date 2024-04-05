"use client";

import { useState } from "react";
import Next from "./next";
import Link from "next/link";
import { motion } from "framer-motion";


export default function page() {
    const [char,setChar] = useState<string>("")
    const handleClick = () => {
        localStorage.setItem("reflex",char);
    }
    return (
        <>
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1,transition:{duration:3}}}
            >
        <div className="grid justify-items-center">
            
            <h1 className="text-center text-white mt-36">ไหนลองเล่าให้ฟังหน่อยว่า</h1>
            <h1 className="text-center text-white mt-1">คุณกำลังตั้งคำถามในความสามารถของตนเอง</h1>
            <h1 className="text-center text-white mt-1">ในเรื่องอะไรอยู่</h1>

            <textarea className="h-72 w-5/6 justify-self-center mt-7 rounded-2xl p-5" placeholder="โปรดพิมพ์คำตอบของคุณ"  
            required = {true} maxLength={180} onChange={(e)=>setChar(e.target.value)}></textarea>
            <div className = "justify-self-center">
            <Next char={char} handleClick={handleClick} />
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
        </>
    );
}