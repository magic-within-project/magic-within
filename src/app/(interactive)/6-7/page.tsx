"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function page() {

    return(
        
            <Link href="/6-8">
            <div className="h-screen w-1024"> 
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1,transition:{duration:3}}}
            >
        <div className="grid justify-items-center">
            
            <h1 className="text-center text-white mt-80">คุณลองปรับมุมมองความคิดของคุณดูมั้ย</h1>
            <h1 className="text-center text-white mt-1">ถ้าเป็นเรื่องนี้คุณจะพัฒนาหรือเติบโตขึ้นได้ยังไง</h1>
            <h1 className="text-center text-white mt-1">คุณใช้เวลาได้เต็มที่เลยนะ</h1>

            
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