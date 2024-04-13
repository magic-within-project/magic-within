"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <Link href="/6-28">
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
            <p className="font-bold">
              &quot;เพราะภายใต้การเติบโตของคุณ
              <br />
              มีเวทมนตร์ที่แสนวิเศษซ่อนอยู่เสมอ&quot;
            </p>
          </div>
          <div className="absolute bottom-[14vh]">แตะเพื่อไปต่อ</div>
        </motion.div>
      </main>
    </Link>
  );
}
