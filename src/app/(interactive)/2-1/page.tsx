"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <Link href="/2-2">
      <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          className="bg-img-white-radial absolute inset-x-0 top-[20%] bg-center bg-no-repeat p-10"
        >
          <p className="text-center">
            หลังจากพิธีปฐมนิเทศ
            <br />
            ที่ใช้เวลาช่วงเช้าทั้งหมด
          </p>
        </motion.div>
      </div>
    </Link>
  );
}
