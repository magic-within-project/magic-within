"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function page(){

    return (

        <div className="w-1024 h-screen grid justify-items-center">
            <Link href="/6-18" className="h-screen w-full">

            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1,transition:{duration:1,delay:0.5}}}
            >
                <h1 className="text-white mt-32 text-center">คุณกลับเข้าสู่ทางเดิน</h1>
                <h1 className="text-white text-center">กลับห้องของคุณ</h1>

            </motion.div>
            </Link>

        </div>
    );
}