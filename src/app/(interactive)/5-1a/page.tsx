"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <Link href={"/5-2"}>
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
            <p className="absolute top-[168px] whitespace-pre-line">
              แต่ดูเหมือนฮาร์ทจะยังมีบางอย่าง <br />
              ติดค้างในใจอยู่
            </p>
          </motion.div>
        </main>
      </Link>
    </>
  );
}
