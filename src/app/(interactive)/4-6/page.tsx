"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Pane() {
  return (
    <Link href="/4-7">
      <div className="w-1024 h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 3 } }}
          //transition={{duration : 3}}
        >
          <div className="flex h-40 flex-col pt-20">
            <h1 className="text-sans mt-14 text-center font-plaphao text-lg font-medium text-disable">
              {" "}
              &quot;ฉันว่าฉันยังเก่งไม่พอ&quot;
            </h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 4, delay: 3 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          //transition={{}}
        >
          <div className=" mt-20 grid justify-items-center ">
            <h1 className="text-sans mt-1 text-center text-disable">
              คราวนี้เราอยากให้คุณพิมพ์ข้อความด้วยตนเอง
            </h1>
            <h1 className="text-sans mt-1 text-center text-disable">
              ถ้าคุณเป็นฮาร์ท
            </h1>
            <h1 className="text-sans mt-1 text-center text-disable">
              คุณจะปรับมุมมองต่อความรู้สึกนี้ยังไง
            </h1>
            <h1 className="text-sans mt-1 text-center text-disable">
              บางทีการมองสถานการณ์ด้วยมุมมองที่ต่างจากเดิม
            </h1>
            <h1 className="text-sans mt-1 text-center text-disable">
              อาจจะทำให้คุณได้เห็นทางไปต่อที่คาดไม่ถึงก็ได้
            </h1>
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
      </div>
    </Link>
  );
}
