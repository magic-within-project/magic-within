"use client";

import { motion } from "framer-motion";
import Link from "next/link";
export default function page() {
    

    return (
        <div>
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1,transition:{duration:1.5,delay:3}}}
            >
                <Link href="6-20" className="">
                    <div className="grid justify-items-center h-screen w-1024">
                    <h1 className="absolute justify-self-center bottom-16 animate-pulse">แตะเพื่ออ่านจดหมาย</h1>
                    </div>
                </Link>

                
            </motion.div>
           

        </div>
    );
}