"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

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
              delay: 0.5,
            }}
            className="flex min-h-screen flex-col items-center text-center text-white"
          >
            <p className="absolute top-[168px] whitespace-pre-line">
              ฮาร์ทโบกมือลาก่อนจะเดินจากไป
            </p>
            <Image
              src="/heart-waving-hand.webp"
              alt="heart-waving-hand"
              width={535 / 2}
              height={535}
              className={`absolute bottom-0 z-0 mx-auto`}
            />
          </motion.div>
        </main>
      </Link>
    </>
  );
}
