"use client";

import Link from "next/link";
import { motion } from "framer-motion";


export default function page(){
    const doubtYourselfFeeling = typeof window !== "undefined" ? localStorage.getItem("doubtYourselfFeeling") : null;
    // let line = ""
    // for(let i = 0 ; i < 300 ; i++){
    //     const c = doubtYourselfFeeling?.charAt(i)
    //     line.concat(c);
    // }
    

    return(
        <Link href="/6-15">
        <div className="h-screen text-center">
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1,transition:{duration:1,delay:1}}}
            className = "">
                <div className="grid justiy-items-center">
                
                <h1 className="mt-28 w-80 h-80  text-white font-plaphao justify-self-center content-center text-wrap ">&apos;{doubtYourselfFeeling}&apos;</h1>
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
        </Link>

    );
}