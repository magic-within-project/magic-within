"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="fixed -z-10 h-full w-full bg-black opacity-30" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="flex min-h-screen flex-col items-center text-center text-white"
      >
        <p className="absolute top-[23vh] leading-7">
          ถึงเวลาแล้ว
          <br />
          ที่คุณจะใช้เวทมนตร์ที่ซ่อนอยู่ในตัวคุณ
          <br />
          เวทมนตร์ที่เฝ้ารอให้คุณค้นพบอยู่
        </p>
        <Image
          src="/img/wand-3-12.webp"
          width={330}
          height={330}
          alt="wand"
          className="absolute bottom-0 right-0"
        />
        <div className="absolute bottom-[10vh] w-full">
          <Link href="/4-1">
            <button className="z-10 h-[4.5vh] w-1/4 rounded-lg bg-purple font-semibold text-mwWhite drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              ร่ายเวท!
            </button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
