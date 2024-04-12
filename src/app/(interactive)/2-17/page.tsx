"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <Link href="/2-18">
      <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          className="absolute inset-x-0 top-[35%] p-10"
        >
          <p className="text-center text-white">
            คุณดีใจที่คุณได้รับคำชมจากคนรอบข้าง<br/>
            และจากคู่หูของคุณ
          </p>
        </motion.div>
      </div>
    </Link>
  );
}