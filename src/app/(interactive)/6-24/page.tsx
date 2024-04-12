"use client";

import { motion } from "framer-motion";
import { DownloadIcon } from "./downloadIcon";
import Link from "next/link";
import React from "react";

export default function page() {
  const supportQuote = typeof window !== "undefined" ? localStorage.getItem("doubtYourselfFeeling") : null;

  return (
    //<Link href={link}>

    <div
      className="z-10 h-screen w-full bg-[url(/bg/bg6-23.webp)] bg-[length:450px_900px] bg-center"
      id="exportedWords"
    >
      <h1 className="absolute left-[80px] mt-[160px] text-wrap text-sm text-white drop-shadow">
        ถึงตัวฉันเอง...
      </h1>
      <div className="h-2048 absolute top-5 mx-24  grid w-[252px]">
        <h1 className=" ml-[0px] mt-[205px] content-center justify-self-center text-wrap text-center text-sm text-white drop-shadow">
          {supportQuote}
        </h1>
      </div>

      <div className="absolute right-[60px] top-[70px] z-20 flex h-11 w-11 items-center justify-center gap-2.5 rounded-full ">
        <DownloadIcon />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <div className="grid h-screen w-full bg-black opacity-60"></div>

        <div className="absolute left-16 top-10 mt-64 grid h-52 w-80 rounded-xl  bg-white opacity-100  drop-shadow-lg">
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
              <Link href="/6-23">ยกเลิก</Link>
            </button>
            <button
              className="ml-[20px] mt-10 h-10 w-24 rounded-lg bg-darkPurple p-1.5 text-center  text-lg text-white hover:bg-active hover:text-white"
              type="submit"
            >
              <Link href="/6-25">ถัดไป</Link>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
