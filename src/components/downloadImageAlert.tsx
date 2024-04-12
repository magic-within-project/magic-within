"use client";

import { DialogContent } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";

const DownloadImageAlert = () => {
  return (
    <DialogContent className="fixed top-0 h-screen border-none">
      <motion.div
        initial={{ y: -70 }}
        animate={{ y: 10 }}
        exit={{ y: -70 }}
        transition={{
          duration: 1,
        }}
        className="fixed left-0 flex w-full justify-center"
      >
        <div className="z-4 flex h-[72px] w-[358px] items-start gap-2 rounded-2xl bg-white p-4 shadow-[0px_8px_20px_0px_#00000026]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-check-circle-2"
          >
            <circle cx="12" cy="12" r="10" fill="#00B488" />
            <path d="m9 12 2 2 4-4" fill="#00B488" />
          </svg>
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold text-greenDownload">
              ดาวน์โหลดสำเร็จ
            </p>
            <p className="text-xs text-blackDownload">
              รูปภาพถูกบันทึกลงเครื่องของคุณ
            </p>
          </div>
        </div>
      </motion.div>
    </DialogContent>
  );
};

export default DownloadImageAlert;
