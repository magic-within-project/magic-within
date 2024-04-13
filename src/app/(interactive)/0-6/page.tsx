"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <Link href="/0-7">
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="flex min-h-screen flex-col items-center text-center text-mwWhite"
        >
          <p className="absolute top-[18vh]">
            การเดินทางของคุณต่อจากนี้ เราอยากให้คุณ
          </p>
          <p className="absolute top-[24vh] leading-7">
            ปล่อยความคิด
            <br />
            เปิดใจ
            <br />
            และใช้จินตนาการอย่างเต็มที่
          </p>
          <p className="absolute top-[38vh]">สามารถใช้เวลาเต็มที่ได้เลยนะ</p>
          <div className="absolute bottom-[14vh]">แตะเพื่อไปต่อ</div>
        </motion.div>
      </main>
    </Link>
  );
}
