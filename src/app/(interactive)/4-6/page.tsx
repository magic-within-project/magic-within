"use client";


import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";



export default function Pane() {
    const [char,setChar] = useState<string>("");

    return(
        <Link href="/4-7">
        <div className="w-1024 h-screen"  >
            <motion.div
            initial={{opacity : 0}}
            animate={{opacity : 1 ,transition : {duration : 3}}}
            //transition={{duration : 3}}
            >
            <div className="flex flex-col pt-20 h-40">
            <h1 className="text-disable text-center text-sans text-lg font-medium mt-14 font-plaphao"> "ฉันว่าฉันยังเก่งไม่พอ"</h1>
            </div>
        </motion.div>

        <motion.div
                initial={{opacity : 0}}
                animate={{opacity : 1 ,transition : {duration : 4,delay:3}}}
                exit={{opacity : 0 ,transition : {duration:0.5}}}
                //transition={{}}
            >
            <div className=" grid justify-items-center mt-20 ">
                <h1 className="text-disable text-center text-sans mt-1">คราวนี้เราอยากให้คุณพิมพ์ข้อความด้วยตนเอง</h1>
                <h1 className="text-disable text-center text-sans mt-1">ถ้าคุณเป็นฮาร์ท</h1>
                <h1 className="text-disable text-center text-sans mt-1" >คุณจะปรับมุมมองต่อความรู้สึกนี้ยังไง</h1>
                <h1 className="text-disable text-center text-sans mt-1">บางทีการมองสถานการณ์ด้วยมุมมองที่ต่างจากเดิม</h1>
                <h1 className="text-disable text-center text-sans mt-1">อาจจะทำให้คุณได้เห็นทางไปต่อที่คาดไม่ถึงก็ได้</h1>
                
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
        
    );}
   
        

