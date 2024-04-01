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
          animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
        >
          <div className="bg-white-radial absolute top-[-150px] h-[70vh] w-full opacity-80"></div>
          <div className="opacity-90">
            <h2 className="font-charmonman text-darkPurple mb-5 text-2xl font-bold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              Magic Academy
            </h2>
            <p>
              สถาบันเวทมนตร์ชั้นนำที่นักเวทย์ในโลกเวทมนตร์ <br />
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
