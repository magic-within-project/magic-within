"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link
        href="/2-1"
        className="absolute h-full w-full overflow-hidden bg-cover bg-no-repeat"
      >
        <motion.div
          className="absolute right-[25px] top-[190px] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
        >
          <p>
            นั่นเป็นประโยคสุดท้ายก่อนที่
            <br />
            ผู้อำนวยการจะก้าวลงจากเวที
            <br />
            หลังพิธีปฐมนิเทศ คุณและนักเวทคนอื่น ๆ<br />
            เตรียมตัวที่จะเข้าร่วมคาบเรียนแรกใน
            <br />
            <span className=" font-charmonman"> Magic Academy</span> แห่งนี้
          </p>
        </motion.div>
      </Link>
    </>
  );
}
