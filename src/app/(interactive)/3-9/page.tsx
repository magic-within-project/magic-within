"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <Link href="/3-10">
      <main className="min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="flex min-h-screen flex-col items-center text-center text-white"
        >
          <div className="fixed -z-10 h-full w-full bg-black opacity-30" />
          <p className="absolute top-[20vh] leading-7">
            ความกังวลที่ฮาร์ทกักเก็บเอาไว้
            <br />
            ค่อย ๆ พรั่งพรูออกมา
          </p>
          <p className="absolute top-[30vh] leading-7">
            และคุณก็ทำในสิ่งที่
            <br />
            คุณจะทำได้ดีที่สุดในสถานการณ์เช่นนี้ <br />
            ก็คือการรับฟังอย่างตั้งใจ
          </p>
        </motion.div>
      </main>
    </Link>
  );
}
