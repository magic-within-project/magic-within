"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <Link href="/7-2">
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="text-mwWhite flex min-h-screen flex-col items-center text-center"
        >
          <p className="absolute top-[24vh] leading-7">
            หลังจากการเดินทางทั้งหมดในวันนี้
            <br />
            เราอยากให้คุณทบทวนตัวเองอีกครั้ง
          </p>
        </motion.div>
      </main>
    </Link>
  );
}
