"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function page(){

    return (
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1,transition:{duration:2,delay:2}}}
        >
            <Link href="6-19" className="">
                <div className="grid h-screen">
                    <div className="justify-self-center text-center">
                    <h1 className="mt-24 ">มีอะไรวางอยู่</h1>
                    <h1 className="">หน้าห้องเรากันนะ</h1>
                    </div>

                </div>
            </Link>

        </motion.div>
    );
}