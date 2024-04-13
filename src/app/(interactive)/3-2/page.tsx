"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <Link href="/3-3">
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
          <p className="absolute top-[24vh] leading-7">
            คุณพอจะเดาได้ว่า ผลการวัดระดับของฮาร์ท
            <br />
            คงจะออกมาไม่ดีเท่าไหร่นัก
          </p>
        </motion.div>
      </main>
    </Link>
  );
}
