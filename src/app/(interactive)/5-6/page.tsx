"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <Link href={"/5-7"}>
        <main>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="flex min-h-screen flex-col items-center text-center text-white"
          >
            <p className="absolute top-[168px] whitespace-pre-line">
              ใบหน้าของฮาร์ทกลับมามีรอยยิ้มอีกครั้ง <br />
              แต่คราวนี้เป็นรอยยิ้มที่กว้างกว่าเดิม
            </p>
          </motion.div>
        </main>
      </Link>
    </>
  );
}
