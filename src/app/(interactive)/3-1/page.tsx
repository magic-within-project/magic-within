"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <Link href="/3-2">
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="flex min-h-screen flex-col items-center text-center text-white"
        >
          <p className="absolute top-[24vh] leading-7">
            คุณเดินตามฮาร์ท
            <br />
            และสังเกตได้ถึงความรู้สึกเศร้า
          </p>
        </motion.div>
      </main>
    </Link>
  );
}
