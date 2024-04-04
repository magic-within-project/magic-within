
import { motion } from "framer-motion";

type Prop = {state:number}

export default function State2({state}:Prop){
    
    if(state == 1){
        return (
            <div className="h-screen">
            <motion.div
                initial={{opacity : 0}}
                animate={{opacity : 1 ,transition : {duration : 3}}}
                exit={{opacity : 0 ,transition : {duration:0.5}}}
                //transition={{}}
            >
            <div className=" grid justify-items-center">
                <h1 className="text-disable text-center text-sans mt-64">คทาพลังใจได้พาคุณมายังโลกในใจของฮาร์ท</h1>
            </div>
            </motion.div>
            </div>
        );}
            
    
    
}