"use client";

import { motion } from "framer-motion";
import { DownloadIcon } from "./downloadIcon";
import Link from "next/link";

export default function page() {
  const selfReframing = typeof window !== "undefined" ? localStorage.getItem("selfReframing") : null;
  const doubtYourselfFeeling = typeof window !== "undefined" ? localStorage.getItem("doubtYourselfFeeling") : null;

  let len = selfReframing?.length ?? 0;
  len += doubtYourselfFeeling?.length ?? 0;
  console.log(len);
  if (len > 750) {
    len = 0.45 + ((3000 - len) * 0.33) / 2250;
  } else {
    len = 0.8;
  }

  return (
    <div className="w-1024 h-screen bg-[url(/bg/bg6-20.webp)] bg-[length:450px_900px] bg-center">
      <div className="absolute top-5 left-[80px] grid w-[252px] justify-items-center">
        <div
          style={{ fontSize: `${len}rem` }}
          className="font-size:30% mt-[102px] content-center justify-self-center text-wrap text-center text-brown drop-shadow "
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
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <div className="absolute right-[65px] top-16 flex h-11 w-11 items-center justify-center gap-2.5 ">
          <DownloadIcon />
        </div>
        <div className="w-1024 grid h-screen bg-black opacity-60"></div>
        <div className="absolute left-12 top-10 mt-64 grid h-52 w-80 rounded-xl  bg-white opacity-100  drop-shadow-lg">
          <h1 className="mb-0 mt-8 justify-self-center text-xl font-medium text-darkPurple">
            ยืนยันเพื่อไปแผ่นต่อไป
          </h1>

          <h1 className="absolute top-[70px] justify-self-center text-sm">
            หากผ่านไปแล้วไม่สามารถ
          </h1>
          <h1 className="absolute top-[90px] justify-self-center text-sm">
            ย้อนกลับมาที่หน้านี้ได้
          </h1>
          <div className="flex">
            <button
              className="ml-[55px] mt-10 h-10 w-24 rounded-lg border-2 border-darkPurple bg-white p-1.5 text-center  text-lg text-darkPurple hover:bg-purple hover:text-white"
              type="submit"
            >
              <Link href="/6-21">ยกเลิก</Link>
            </button>
            <button
              className="ml-[20px] mt-10 h-10 w-24 rounded-lg bg-darkPurple p-1.5 text-center  text-lg text-white hover:bg-active hover:text-white"
              type="submit"
            >
              <Link href="/6-23">ถัดไป</Link>
            </button>
          </div>
        </div>
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
  );
}
