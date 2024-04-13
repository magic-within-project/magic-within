"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Pane(){
        return (
            <Link href="/4-3">
        <div className="w-1024 h-screen ">
        <motion.div
                initial={{opacity : 0}}
                animate={{opacity : 1 ,transition : {duration : 2}}}
                exit={{opacity : 0 ,transition : {duration:0.5}}}
                //transition={{}}
            >
            <div className=" grid justify-items-center ">
                <h1 className="text-disable text-center text-sans mt-64">ในถ้อยคำมากมายที่ล่องลอยอยู่ในใจของฮาร์ท</h1>
                <h1 className="text-disable text-center text-sans mt-1">เราอยากให้คุณนำคำมาร้อยเรียงใหม่</h1>
                <h1 className="text-disable text-center text-sans mt-1">โดยใช้คำให้ครบทุกคำ</h1>

                <h1 className="text-disable text-center text-sans mt-10">เพื่อทำให้ฮาร์ทสามารถเรียนรู้</h1>
                <h1 className="text-disable text-center text-sans mt-1">และเติบโตจากปัญหาในครั้งนี้</h1>

                <h1 className="text-disable text-center text-sans mt-10">บางทีคุณอาจสามารถช่วยฮาร์ท</h1>
                <h1 className="text-disable text-center text-sans mt-1">เปลี่ยนแปลงมุมมองบางอย่างต่อตัวเองก็ได้นะ</h1>


                
                
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