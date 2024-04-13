"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link
        href="/1-3"
        className="absolute flex h-full w-full justify-center bg-cover bg-no-repeat"
      >
        <motion.div
          className="absolute top-[200px] w-full text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
        >
          <div className="absolute top-[-150px] h-[70vh] w-full bg-white-radial opacity-80" />
          <div className="opacity-95">
            <h2 className="mb-5 font-charmonman text-2xl font-bold text-darkPurple drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              Magic Academy
            </h2>
            <p>
              สถาบันเวทมนตร์ชั้นนำที่นักเวทในโลกเวทมนตร์ <br />
              ต่างก็ต้องการจะเข้ามาเล่าเรียน <br />
              และที่นี่ยังเป็นที่รู้จัก <br />
              ในเรื่องของการคัดเลือกนักเวทที่เข้มงวด <br />
              <br />
              นับตั้งแต่การสอบวัดระดับ <br />
              แข่งกับนักเวทรุ่นเยาว์นับพัน <br />
              ไปจนถึงการสอบสัมภาษณ์กับคณะอาจารย์ <br />
              ที่ขึ้นชื่อเรื่องความละเอียดในการคัดเลือก
            </p>
          </div>
        </motion.div>
      </Link>
    </>
  );
}
