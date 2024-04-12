"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <Link href="/6-7">
      <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          className="bg-white-radial absolute inset-x-0 top-[35%] bg-center bg-no-repeat p-10"
        >
          <p className="text-center text-white">
            ระหว่างการเดินกลับห้อง
            <br />
            ฟ้าและไฟรอบข้างค่อย ๆ มืดลง
            <br />
            เผยให้เห็นดวงดาวระยิบระยับบนท้องฟ้า
          </p>
        </motion.div>
      </div>
    </Link>
  );
}
