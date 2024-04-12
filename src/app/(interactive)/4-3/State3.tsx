
import { motion } from "framer-motion";
import Link from "next/link";

type Prop = {state:number}

export default function State3({state}:Prop){
    if(state == 2){
        return (
            <Link href="/4-4">
        <div className="h-screen">
        <motion.div
                initial={{opacity : 0}}
                animate={{opacity : 1 ,transition : {duration : 2}}}
                exit={{opacity : 0 ,transition : {duration:3}}}
                //transition={{}}
            >
            <div className=" grid justify-items-center ">
                <h1 className="font-plaphao text-disable text-center text-sans mt-96">"ฉันว่าฉันยังเก่งไม่พอ"</h1>



            </div>
            </motion.div>
            </div>
            </Link>
        );}
            
    
    
}