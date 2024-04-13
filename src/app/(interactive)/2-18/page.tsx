"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <Link href="/2-19">
      <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          className="absolute inset-x-0 top-[30%] p-10"
        >
          <p className="text-center text-white">
            คุณตั้งใจจะถามฮาร์ทว่า
            <br />
            ผลการวัดระดับของฮาร์ทเป็นอย่างไรบ้าง
            <br />
            แต่เมื่อได้สังเกตดี ๆ แล้ว ฮาร์ทดูซึม ๆ
          </p>
        </motion.div>
      </div>
    </Link>
  );
}
