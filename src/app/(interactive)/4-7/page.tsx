"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Next from "./next";

export default function Page() {
  const [char, setChar] = useState<string>("");
  const handleReframe = () => {
    localStorage.setItem("heartReframing", char);
  };
  return (
    <div className="w-1024 h-screen">
      <div className="flex h-40 flex-col pt-20">
        <h1 className="text-sans mt-14 text-center font-plaphao text-lg font-medium text-disable">
          {" "}
          &quot;ฉันว่าฉันยังเก่งไม่พอ&quot;
        </h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 3 } }}
        //transiton={{duration:3,delay:7}}
        className="mt-8 grid justify-items-center"
      >
        <h1 className="text-sans text-center text-disable ">แต่...</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 3 } }}
        //transiton={{duration:3,delay:7}}
        className="grid justify-items-center"
      >
        <textarea
          className="mt-4 inline-block h-56 w-5/6 text-wrap rounded-lg p-4 text-left align-text-top drop-shadow-md"
          placeholder="โปรดพิมพ์คำตอบของคุณ"
          required={true}
          maxLength={180}
          onChange={(e) => setChar(e.target.value)}
        ></textarea>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 3 } }}
        //transiton={{duration:3,delay:7}}
        className="grid justify-items-center"
      >
        <Next char={char} handleReframe={handleReframe} />
      </motion.div>
    </div>
  );
}
