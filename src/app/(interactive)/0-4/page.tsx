"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const [name, setName] = useState<string>("");
  function handleName(name: string) {
    setName(name);
    localStorage.setItem("name", name);
  }

  useEffect(() => {
    if (!localStorage.hasOwnProperty("name")) {
      localStorage.setItem("name", "");
    }
    setName(localStorage.getItem("name") ?? "");
  }, []);

  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="flex min-h-screen flex-col items-center text-center"
      >
        <p className="absolute top-[25vh]">
          ยินดีต้อนรับเข้าสู่การเดินทาง
          <br />
          ชื่อที่คุณอยากใช้ในการเดินทางครั้งนี้ คือ ...
        </p>
        <textarea
          id="name"
          className="absolute right-[14%] top-[48.5vh] h-[2.5vh] w-[40.67%] resize-none overflow-hidden bg-mwWhite pl-1 pt-1 text-sm"
          value={name}
          onChange={(e) => handleName(e.target.value)}
        />
        <div className="absolute bottom-[28vh] w-full">
          <Link href="/0-5">
            <button className="h-[4.5vh] w-1/4 rounded-lg bg-purple font-semibold text-mwWhite drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              ตกลง
            </button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
