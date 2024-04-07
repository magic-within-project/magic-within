"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <Link href="/6-5">
      <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          className="absolute inset-x-0 top-[20%] bg-white-radial bg-center bg-no-repeat p-10"
        >
          <p className="text-center text-white">
            ได้ใช้คทาของคุณช่วยเหลือคนอื่น
            <br />
            และยังได้เรียนรู้อะไรใหม่ ๆ
          </p>
        </motion.div>
      </div>
    </Link>
  );
}
