"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link
        href="/1-2"
        className="absolute h-full w-full bg-cover bg-no-repeat"
      >
        <motion.div
          className="absolute right-[15px] top-[150px] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
        >
          <p>
            และแล้ววันนี้ก็มาถึง...
            <br />
            <br />
            วันที่คุณเฝ้ารอคอยอย่างใจจดใจจ่อ
            <br />
            วันที่คุณจะได้เริ่มต้นการเดินทางครั้งสำคัญ
            <br />
            ผู้คนรุ่นราวคราวเดียวกันจำนวนมากรอบตัว
            <br />
            ทำให้คุณรู้สึกประหม่าขึ้นมาเล็กน้อย
            <br />
          </p>
        </motion.div>
      </Link>
    </>
  );
}
