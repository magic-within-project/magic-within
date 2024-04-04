"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <Link href="/0-4">
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="flex min-h-screen flex-col items-center justify-center text-center"
        >
          <div className="flex flex-col gap-6">
            <div className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              <p className="font-bold text-purple3">
                &quot;การเติบโตนำมาซึ่งการเปลี่ยนแปลงเสมอ&quot;
              </p>
              <p>
                อาจมีทั้งเรื่องดีและไม่ดี
                <br />
                และไม่แปลกที่คุณจะตั้งคำถามกับ
                <br />
                การเติบโตของตัวเอง
              </p>
            </div>
            <div className="flex flex-col items-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              <Image
                src="/img/logo_MW.webp"
                width={200}
                height={200}
                alt="MagicWithin logo"
              />
              <p>
                Interactive Website ที่จะพาคุณใช้จินตนาการ
                <br />
                ผ่านเรื่องราวใน Magic Academy
                <br />
                เพื่อให้คุณได้เรียนรู้
                <br />
                และเข้าใจในการเติบโตของคุณ
              </p>
            </div>
            <p className="text-xs text-neutral-600">
              หมายเหตุ: คำตอบของคุณจะถูกบันทึก
              <br />
              เพื่อนำไปใช้เป็นข้อมูลทางการศึกษา
            </p>
          </div>
          <div className="absolute bottom-[14vh]">แตะเพื่อเริ่มการเดินทาง</div>
        </motion.div>
      </main>
    </Link>
  );
}
