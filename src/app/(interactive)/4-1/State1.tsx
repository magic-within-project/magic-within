
import { motion } from "framer-motion";

type Prop = {state:number}

export default function State1({state}:Prop){
    if(state == 0){
        return (
        <div className="h-screen">
        <motion.div
                initial={{opacity : 0}}
                animate={{opacity : 1 ,transition : {duration : 2}}}
                exit={{opacity : 0 ,transition : {duration:0.5}}}
                //transition={{}}
            >
            <div className=" grid justify-items-center ">
                <h1 className="text-disable text-center text-sans mt-64">ตอนนี้คุณอยู่ในพื้นที่มืดหม่น</h1>
                <h1 className="text-disable text-center text-sans mt-1">อันเต็มไปด้วยถ้อยคำมากมาย</h1>
                
                
            </div>
            </motion.div>
            </div>
        );}
            
    
    
}