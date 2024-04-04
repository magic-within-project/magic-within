"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <Link href="/2-4">
      <div className="absolute flex h-[100dvh] w-full flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          className="absolute inset-x-0 top-[20%] bg-white-radial bg-center bg-no-repeat p-10"
        >
          <p className="text-center">
            ตอนนี้คาบเรียนแรกของคุณ
            <br />
            ก็เริ่มต้นขึ้นในช่วงบ่ายแก่ ๆ
            <br />
            วิชาแรกเป็นวิชาการยิงเวท
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            z: 10,
            transition: { duration: 1, delay: 2.5 },
          }}
          className="absolute top-[80%]"
        ></motion.div>
      </div>
    </Link>
  );
}
