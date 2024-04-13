"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Link
        href="/1-7"
        className="absolute h-full w-full overflow-hidden bg-cover bg-no-repeat"
      >
        <div className="fixed h-full w-full bg-white opacity-20" />
        <motion.div
          className="absolute bottom-[68%] right-[25px] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
        >
          <div className="absolute right-[-60px] top-[-100px] h-[325px] w-[430px] bg-white-radial opacity-65" />
          <div className="opacity-95">
            <p>
              นี่คือฮาร์ท เพื่อนคู่หูที่ไปไหนมาไหนด้วยกัน <br />
              กับคุณอยู่เสมอ <br /> พวกคุณเตรียมสอบเข้าที่โรงเรียนนี้ด้วยกัน
              <br /> และโชคชะตาก็ดูเหมือนจะเป็นใจ <br />{" "}
              ทำให้คุณไม่ต้องย้ายตัวเอง
              <br />
              มาอยู่ในสังคมใหม่ด้วยตัวคนเดียว
            </p>
          </div>
          <Image
            src={"/heart.webp"}
            alt="heart"
            width={407 / 2}
            height={407}
            className={`fixed left-1/2 top-[240px] z-0 -translate-x-1/2 transform`}
          />
          <Image
            src={"/heart-introduction.webp"}
            alt="name"
            width={283}
            height={283}
            className={`fixed left-1/2 top-[580px] z-0 -translate-x-1/2 transform`}
          />
        </motion.div>
      </Link>
    </>
  );
}
