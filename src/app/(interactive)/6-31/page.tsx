"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <Link href="/7-1">
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
          <div className="flex flex-col gap-4">
            <p>
              การเดินทางในโลกเวทมนตร์ของคุณจบลงแล้ว
              <br />
              คุณเตรียมพร้อมสำหรับการกลับสู่โลกของคุณ
            </p>
          </div>
          <div className="absolute bottom-[14vh]">
            แตะเพื่อกลับสู่โลกความจริง
          </div>
        </motion.div>
      </main>
    </Link>
  );
}
