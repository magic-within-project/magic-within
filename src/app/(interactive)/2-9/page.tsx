"use client";
import { motion } from "framer-motion";
import Link from "next/link";
export default function Page() {
  return (
    <Link href="/2-1">
      <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          className="absolute inset-x-0 p-10"
        >
          {/* <img src="/img/test.png"></img> */}
        </motion.div>
      </div>
      </Link>
  );
}
