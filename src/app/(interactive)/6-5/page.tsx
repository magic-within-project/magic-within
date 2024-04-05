"use client";

import { motion } from "framer-motion"; 
import Link from "next/link";

export default function page() {

    return (
        <div>
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1,transition:{duration:3}}}
            >
                <div className="grid justify-items-center">
                    <h1 className="mt-64 text-disable">เรื่องที่คุณกำลังตั้งคำถามกับตัวเอง</h1>
                    <h1 className="mt-1 text-disable">ทำให้คุณรู้สึกไม่ดีรึเปล่า</h1>
                    <div className="grid grid-cols-2 mt-12 gap-x-10">
                        <button className="bg-darkPurple w-24 h-10 rounded-lg text-white text-lg ">
                            <Link href="/6-6">
                            ใช่
                            </Link>
                            </button>
                        <button className="bg-white w-24 h-10 rounded-lg text-default text-lg drop-shadow-md">
                            <Link href="/6-10">
                            ไม่ใช่
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