"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link
        href="/1-8"
        className="absolute h-full w-full overflow-hidden bg-cover bg-no-repeat"
      >
        <motion.div
          className="absolute right-[25px] top-[200px] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
        >
          <p>
            เสียงประกาศดังขึ้นทั่วลานโรงเรียน <br />
            ดูเหมือนว่าตอนนี้ผู้อำนวยการจะเริ่มขึ้นมา <br />
            กล่าวต้อนรับเหล่านักเวทใหม่แล้ว
          </p>
        </motion.div>
      </Link>
    </>
  );
}
