"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <Link href="/0-8">
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="flex min-h-screen flex-col items-center text-center text-mwWhite"
        >
          <p className="absolute top-[24vh] leading-7">
            ถ้าพร้อมแล้ว
            <br />
            เรามาตามหาเวทมนตร์
            <br />
            อันแสนวิเศษในตัวคุณกัน
          </p>
          <div className="absolute bottom-[14vh]">แตะเพื่อเริ่มการเดินทาง</div>
        </motion.div>
      </main>
    </Link>
  );
}
