"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <Link href={"/5-4"}>
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
              ฮาร์ทพูดพร้อมกับรอยยิ้มบนใบหน้า <br />
              ที่ค่อย ๆ จางลง
            </p>
          </motion.div>
        </main>
      </Link>
    </>
  );
}
