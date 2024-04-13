"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

export default function Page() {
  const [dialogNo, setDialogNo] = useState(0);
  const dialog = useMemo(() => {
    return [
      "ตอนนี้คุณออกจากความคิดของฮาร์ท\nกลับมาสู่โลกความเป็นจริงอีกครั้ง",
      "คุณสังเกตเห็นรอยยิ้มเล็ก ๆ ที่ค่อย ๆ\nปรากฎขึ้นบนหน้าของฮาร์ท",
      "แต่ดูเหมือนฮาร์ทจะยังมีบางอย่าง\nติดค้างในใจอยู่",
    ];
  }, []);

  return (
    <>
      <Link
        href={dialogNo === dialog.length - 1 ? "/5-2" : "#"}
        onClick={() => {
          setDialogNo(dialogNo === dialog.length - 1 ? dialogNo : dialogNo + 1);
        }}
      >
        <main>
          <motion.div
            key={dialogNo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="flex min-h-screen flex-col items-center text-center text-white"
          >
            <p className="absolute top-[168px] whitespace-pre-line">
              {dialog[dialogNo]}
            </p>
          </motion.div>
        </main>
      </Link>
    </>
  );
}
