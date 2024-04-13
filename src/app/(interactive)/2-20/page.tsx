"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <Link href="/3-1">
      <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
          className="absolute inset-x-0 top-[30%] p-10"
        >
          <p className="text-center text-white">
            คุณสังเกตเห็นว่า
            <br />
            ฮาร์ทรีบเดินออกไปทันทีที่อาจารย์พูดจบ<br />
            คุณรู้สึกเป็นห่วงจึงรีบตามไป
          </p>
        </motion.div>
      </div>
    </Link>
  );
}
