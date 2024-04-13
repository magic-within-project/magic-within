"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <Link href="/2-9">
      <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          className="absolute inset-x-0 top-[20%] p-10"
        >
          <p className="text-center text-white">
            &quot;สิ่งสำคัญสำหรับการยิงเวทมนตร์
            <br />
            คือความมั่นคงและความแม่นยำ&quot;
          </p>
        </motion.div>
      </div>
    </Link>
  );
}
