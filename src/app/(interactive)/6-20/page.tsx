"use client";

import { motion } from "framer-motion";
import { DownloadIcon } from "./downloadIcon";
import Link from "next/link";

export default function page() {
  const selfReframing = typeof window !== "undefined" ? localStorage.getItem("selfReframing") : null;
  const doubtYourselfFeeling = typeof window !== "undefined" ? localStorage.getItem("doubtYourselfFeeling") : null;
  let len = selfReframing?.length ?? 0;
  len += doubtYourselfFeeling?.length ?? 0;

  if (len > 700) {
    len = 0.45 + ((3000 - len) * 0.33) / 2250;
  } else {
    len = 0.8;
  }

  return (
    <Link href="/6-21">
      <div className="w-1024 h-screen bg-[url(/bg/bg6-20.webp)] bg-[length:450px_900px] bg-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1} }}
        >
          <div className="absolute top-[2%] left-[19%] grid w-[60%] justify-items-center">
            <div
              style={{ fontSize: `${len}rem` }}
              className="font-size:30% mt-[40%] content-center justify-self-center text-wrap text-center text-brown drop-shadow "
            >
              <h1>{doubtYourselfFeeling}</h1>
            </div>
            <div
              style={{ fontSize: `${len}rem` }}
              className=" mt-1 content-center justify-self-center text-wrap text-center text-brown drop-shadow"
            >
              <h1>แต่</h1>
            </div>
            <div
              style={{ fontSize: `${len}rem` }}
              className=" mt-1 content-center justify-self-center text-wrap text-center text-brown drop-shadow"
            >
              <h1>{selfReframing}</h1>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2, delay: 2 } }}
          >
            <div className=" w-1024 h-screen bg-black opacity-60"></div>
            <div className="animate-pulse">
              <div className="absolute right-[16%] top-[8%] flex h-11 w-11 items-center justify-center gap-2.5 rounded-full bg-white ">
                <DownloadIcon />
              </div>
              <h1 className="absolute right-[28%] top-[11%] text-sm text-white">
                ดาวน์โหลดรูปภาพ
              </h1>
              <h1 className="absolute right-[28%] top-[14%] text-xs text-[#FFBA5A]">
                {" "}
                กดเพื่อไปต่อ
              </h1>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            z: 10,
            transition: { duration: 1, delay: 2.5 },
          }}
          className="absolute top-[80%]"
        ></motion.div>
      </div>
    </Link>
  );
}
