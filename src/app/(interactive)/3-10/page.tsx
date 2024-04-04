"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <Link href="/3-11">
      <main className="min-h-screen">
        <div className="fixed -z-10 h-full w-full bg-black opacity-30" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="flex min-h-screen flex-col items-center text-center text-white"
        >
          <p className="absolute top-[20vh] leading-7">
            ดูเหมือนว่า
            <br />
            ตอนนี้ฮาร์ทจะรู้สึกแย่กับตัวเองมาก ๆ
          </p>
          <p className="absolute top-[30vh] leading-7">
            ตัวคุณในตอนนี้
            <br />
            มีบางสิ่งที่จะช่วยมอบพลังใจ
            <br />
            ให้กับคนที่ต้องการมันได้
          </p>
        </motion.div>
      </main>
    </Link>
  );
}
