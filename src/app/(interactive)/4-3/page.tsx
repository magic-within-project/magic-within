"use client";

import { useState } from "react";
import State1 from "./State1";
import State2 from "./State2";
import State3 from "./State3";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Pane(){
    const [state,setState] = useState<number>(0);
    const nextState = () => {
        if(state < 2){
        const s = state;
        setState(s+1)
        console.log(`state : ${state}`)
        const timer = setTimeout(nextState,5000)
        clearTimeout(timer)
        }
        if(state >=3){
            clearTimeout(timer)
        }
        

    }
    const timer = setTimeout(nextState,5000)
    return(
        
        <div className="w-1024 h-screen font-plaphao text-lg"  >
        <div className="font-plaphao">
       <State1 state={state}></State1>
       <State2 state={state}></State2>
       <State3 state={state}></State3>
       
       </div>
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
       
        
    );

}
   
        

