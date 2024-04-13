"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <Link href="/2-3">
      <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
          className="absolute inset-x-0 top-[20%] bg-img-white-radial bg-center bg-no-repeat p-10"
        >
          <p className="text-center">
            ตอนนี้คาบเรียนแรกของคุณ
            <br />
            ก็เริ่มต้นขึ้นในช่วงบ่ายแก่ ๆ
            <br />
            วิชาแรกเป็น<b>วิชาการยิงเวท</b>
          </p>
        </motion.div>
      </div>
    </Link>
  );
}
