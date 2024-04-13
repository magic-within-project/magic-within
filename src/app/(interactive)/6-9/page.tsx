"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <Link href="/6-10">
      <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
          className="absolute inset-x-0 top-[40%] bg-center bg-no-repeat p-10"
        >
          <p className="text-center text-white">
            ถ้าอย่างนั้นคุณลองใช้
            <br />
            ไม้คทาพลังใจกับตัวคุณดูมั้ย
          </p>
        </motion.div>
      </div>
    </Link>
  );
}
