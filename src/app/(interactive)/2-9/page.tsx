"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Page() {
  return (
    <Link href="/2-10">
      <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
          className="absolute inset-x-0 flex items-center justify-center p-10"
        >
          <img src="/img/test.png" className="h-[85%] w-[85%]" alt="test" />
        </motion.div>
      </div>
    </Link>
  );
}
