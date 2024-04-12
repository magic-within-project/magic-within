
import { motion } from "framer-motion";
import Link from "next/link";

type Prop = {state:number}

export default function State3({state}:Prop){
    if(state == 2){
        return (
            <Link href="/4-2">
        <div className="h-screen">

        <motion.div
                initial={{opacity : 0}}
                animate={{opacity : 1 ,transition : {duration : 3}}}
                exit={{opacity : 0 ,transition : {duration:0.5}}}
                //transition={{}}
            >
            <div className=" grid justify-items-center ">
                <h1 className="text-disable text-center text-sans mt-64">และในถ้อยคำจำนวนมากนั้น</h1>
                <h1 className="text-disable text-center text-sans mt-1">คุณสังเกตได้ถึงความรู้สึก</h1>
                <h1 className="text-disable text-center text-sans mt-1">ที่กำลังรบกวนใจฮาร์ทอยู่ตอนนี้</h1>


            </div>
            </motion.div>
            </div>
            </Link>
        );}
            
    
    
}