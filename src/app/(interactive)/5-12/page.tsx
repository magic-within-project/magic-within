"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <Link href={"/6-1"}>
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
            <p className="absolute top-[168px] whitespace-pre-line">
              ฮาร์ทโบกมือลาก่อนจะเดินจากไป
            </p>
          </motion.div>
        </main>
      </Link>
    </>
  );
}
