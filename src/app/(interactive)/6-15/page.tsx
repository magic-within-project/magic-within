"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Next from "./next";
export default function page() {
    const doubtYourselfFeeling = localStorage.getItem("doubtYourselfFeeling");
    const [char,setChar] = useState<string>("")
    const handleClick = () => {
        localStorage.setItem("selfReframing",char)
    }
    return(
        <div className="h-screen grid text-center">
            <div className="h-4/5 bg-darkPurple grid mt-20 m-10 rounded-xl drop-shadow-md">
              <motion.div
            initial={{opacity:0}}
            animate={{opacity:1,transition:{duration:3}}}
            className = "">
                <div className="grid justiy-items-center">
                <h1 className="mt-10 w-80 h-48 text-white font-plaphao justify-self-center content-center text-wrap ">'{doubtYourselfFeeling}'</h1>
                <h1 className=" my-8 justify-self-center font-plaphao text-white">แต่...</h1>
                <textarea placeholder="โปรดพิมพ์คำตอบของคุณ" className="p-5 w-5/6 justify-self-center h-48 rounded-lg drop-shadow-md text-sm" 
                onChange={(e) => setChar(e.target.value) } maxLength={3000}></textarea>
                <div className="justify-self-center">
                <Next char={char} handleClick={handleClick}/>
                </div>
                </div>
                <h1 className="absolute bottom-[170px] right-[70px] text-white text-[15px]">{char.length}/3000</h1>

            </motion.div>
            
            <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration:1,delay:1},
        }}
        className="absolute top-[80%]"
      ></motion.div>
      </div>

        </div>

    );
}