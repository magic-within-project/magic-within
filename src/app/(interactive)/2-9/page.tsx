"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Page() {
  return (
    <Link href="/2-10">
      <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          className="absolute inset-x-0 p-10 flex justify-center items-center"
        >
          <img src="/img/test.png" className="w-[85%] h-[85%]" />
        </motion.div>
      </div>
      </Link>
  );
}
