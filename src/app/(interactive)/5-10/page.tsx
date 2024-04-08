"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <Link href={"/5-11"}>
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
              คุณยิ้มเป็นคำตอบให้ฮาร์ทอย่างเข้าใจ
            </p>
          </motion.div>
        </main>
      </Link>
    </>
  );
}
