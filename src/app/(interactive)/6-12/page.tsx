"use client";

import { useState } from "react";
import Next from "./next";
import { motion } from "framer-motion";


export default function Page() {
    const [char,setChar] = useState<string>("")
    const handleClick = () => {
        localStorage.setItem("doubtYourselfFeeling",char);
    }
    return (
        <>
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1,transition:{duration:1,delay:1}}}
            >
        <div className="grid justify-items-center">
            
            <h1 className="text-center text-white mt-40">เรื่องที่คุณเล่าทำให้คุณรู้สึกยังไง</h1>
            

            <textarea className="h-80 w-5/6 justify-self-center mt-8 rounded-2xl p-5 drop-shadow-md" 
            placeholder="โปรดพิมพ์คำตอบของคุณ" required = {true} maxLength={300} onChange={(e)=>setChar(e.target.value)}></textarea>
            <div className = "justify-self-center">
            <h1 className="text-gray-600 absolute right-16 bottom-72">{char.length}/300</h1>
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