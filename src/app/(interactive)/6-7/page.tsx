"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <Link href="/6-8">
      <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          className="absolute inset-x-0 top-[40%] bg-white-radial bg-center bg-no-repeat p-10"
        >
          <p className="text-center text-white">
            คำพูดของฮาร์ทก่อนจะแยกย้าย
            <br />
            ทำให้คุณย้อนกลับมาคิดถึงตัวคุณในตอนนี้
          </p>
        </motion.div>
      </div>
    </Link>
  );
}
