"use client";

import { useState } from "react";
import Next from "./next";
import { motion } from "framer-motion";

export default function Page() {
  const [char, setChar] = useState<string>("");
  const handleClick = () => {
    localStorage.setItem("doubtYourselfTopic", char);
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
      >
        <div className="grid justify-items-center">
          <h1 className="mt-36 text-center text-white">
            ไหนลองเล่าให้ฟังหน่อยว่า
          </h1>
          <h1 className="mt-1 text-center text-white">
            คุณกำลังตั้งคำถามในความสามารถของตนเอง
          </h1>
          <h1 className="mt-1 text-center text-white">ในเรื่องอะไรอยู่</h1>

          <textarea
            className="mt-7 h-72 w-5/6 justify-self-center rounded-2xl p-5 drop-shadow-md"
            placeholder="โปรดพิมพ์คำตอบของคุณ"
            required={true}
            onChange={(e) => setChar(e.target.value)}
          ></textarea>
          <div className="justify-self-center">
            <Next char={char} handleClick={handleClick} />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          z: 10,
          transition: { duration: 1, delay: 2.5 },
        }}
        className="absolute top-[80%]"
      ></motion.div>
    </>
  );
}
