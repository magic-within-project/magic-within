"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link
        href="/1-5"
        className="absolute flex h-full w-full justify-center bg-cover bg-no-repeat"
      >
        <motion.div
          className="absolute top-[250px] w-full text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
        >
          <div className="absolute top-[-150px] h-[70vh] w-full bg-white-radial opacity-80" />
          <div className="opacity-95">
            <p>
              แต่การที่คุณได้มาอยู่ในจุดที่คุณกำลังอยู่ในตอนนี้ <br />
              ก็เป็นหลักฐานที่ช่วยยืนยันถึง <br />
              ความพยายามของคุณเช่นเดียวกัน <br /> <br /> <br />
              ภาพของคืนวันที่คุณต้องอดทนเพียรพยายาม <br />
              ยังคงกระจ่างชัดในความทรงจำของคุณ <br />
              เหมือนเป็นเรื่องที่เกิดขึ้นเมื่อวาน <br />
            </p>
          </div>
        </motion.div>
      </Link>
    </>
  );
}
