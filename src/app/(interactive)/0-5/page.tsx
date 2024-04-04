"use client";
import Link from "next/link";
import { Slider } from "~/components/slider";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    localStorage.setItem("beforeSelfRate", "1");
  }, []);
  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="flex min-h-screen flex-col items-center text-center text-mwWhite"
      >
        <p className="absolute top-[18vh]">
          ก่อนจะเริ่มการเดินทาง เราอยากรู้ว่า
        </p>
        <p className="absolute top-[25vh] text-xl leading-8">
          &quot;คุณรู้สึกดีต่อความสามารถ
          <br />
          ของตัวเองมากแค่ไหน&quot;
        </p>
        <div className="absolute top-[43vh] w-3/4">
          <Slider
            onValueChange={(newValue: { toString: () => string }) => {
              localStorage.setItem("beforeSelfRate", newValue.toString());
            }}
            defaultValue={[1]}
            min={1}
            max={10}
            step={1}
          />
        </div>
        <div className="absolute bottom-[14vh] w-full">
          <Link href="/0-6">
            <button className="bg-yellow h-[4.5vh] w-1/4 rounded-lg font-semibold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              ตกลง
            </button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
