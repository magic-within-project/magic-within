
import { motion } from "framer-motion";

type Prop = {state:number}

export default function State1({state}:Prop){
    if(state == 0){
        return (
        <div className="h-screen">
        <motion.div
                initial={{opacity : 0}}
                animate={{opacity : 1 ,transition : {duration : 2}}}
                exit={{opacity : 0 ,transition : {duration:3}}}
                //transition={{}}
            >
            <div className=" grid justify-items-center ">
                <h1 className="font-plaphao text-disable text-center  mt-96">"ทำไมฉันถึงยังทำไม่ได้สักที</h1>
                <h1 className="font-plaphao text-disable text-center  mt-1">หรือเพราะฉันไม่เหมาะจะอยู่ที่นี่"</h1>
                
                
            </div>
            </motion.div>
            </div>
        );}
            
    
    
}