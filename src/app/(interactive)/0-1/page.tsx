"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
  return (
    <Link href="/0-2">
      <main>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="bg-0-0 fixed flex min-h-screen w-full items-center justify-center bg-cover bg-no-repeat"
        >
          <Image
            src="/img/logo_MW2lines.webp"
            width={200}
            height={200}
            alt="MagicWithin logo"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
          className="flex min-h-screen flex-col items-center justify-center text-center"
        >
          <div className="flex flex-col gap-4">
            <p>
              เว็บไซต์นี้มีเนื้อหาเกี่ยวกับ
              <br />
              การตั้งคำถามถึงความสามารถของตนเอง
              <br />
              ไม่ว่าที่ผ่านมา
              <br />
              คุณจะตั้งคำถามกับตัวเองอย่างไร
            </p>
            <p className="font-bold text-purple">
              แต่เราอยากให้คุณรู้ว่า
              <br />
              ความรู้สึกของคุณต่อตัวคุณ สำคัญที่สุด
            </p>
          </div>
          <div className="absolute bottom-[14vh]">แตะเพื่อไปต่อ</div>
        </motion.div>
      </main>
    </Link>
  );
}