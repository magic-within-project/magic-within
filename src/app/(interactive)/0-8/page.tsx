"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <Link href="/1-1">
      <main className="min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
          className="h-full w-full"
        >
          <div className="bg-lightYellow  fixed h-full w-full" />
        </motion.div>
      </main>
    </Link>
  );
}
