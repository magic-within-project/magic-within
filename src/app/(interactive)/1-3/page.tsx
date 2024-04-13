"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link
        href="/1-4"
        className="absolute flex h-full w-full justify-center bg-cover bg-no-repeat"
      >
        <motion.div
          className="absolute top-[280px] w-full text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
        >
          <div className="absolute top-[-150px] h-[70vh] w-full bg-white-radial opacity-80" />
          <div className="opacity-95">
            <p>
              พอรู้เช่นนั้นแล้ว <br />
              ทำให้คุณอดคิดขึ้นไม่ได้ว่าตัวคุณที่กำลังเข้าร่วม <br />
              พิธีปฐมนิเทศอยู่ในตอนนี้นั้น <br />
              กำลังยืนอยู่ท่ามกลางคนระดับหัวกะทิ <br />
              ของสังคมอยู่หรือเปล่า
            </p>
          </div>
        </motion.div>
      </Link>
    </>
  );
}
