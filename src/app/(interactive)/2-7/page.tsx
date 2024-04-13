"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <Link href="/2-8">
      <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
          className="absolute inset-x-0 top-[20%] p-10"
        >
          <p className="text-center text-white">เริ่มเล่นเกมส์!</p>
        </motion.div>
      </div>
    </Link>
  );
}
