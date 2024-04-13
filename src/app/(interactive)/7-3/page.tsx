"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <Link href="/7-4">
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="flex min-h-screen flex-col items-center text-center text-mwWhite"
        >
          <p className="absolute top-[24vh] leading-7">
            เพื่อให้เวทมนตร์อันแสนวิเศษที่คุณเจอในวันนี้
            <br />
            อยู่กับคุณตลอดไป เราขอมอบ...
          </p>
        </motion.div>
      </main>
    </Link>
  );
}
