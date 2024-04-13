"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link
        href="/1-10"
        className="absolute h-full w-full overflow-hidden bg-cover bg-no-repeat"
      >
        <motion.div
          className="absolute top-[525px] flex w-full flex-col items-center justify-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
        >
          <div className="fixed top-[450px] h-[164px] w-[317px] bg-white-radial opacity-65" />
          <div className="font-bold opacity-95">
            <p>“คุณได้รับคทาพลังใจ”</p>
          </div>
          <p className="mt-[170px] text-white opacity-95">แตะเพื่อไปต่อ</p>
        </motion.div>
      </Link>
    </>
  );
}
