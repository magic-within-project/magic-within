"use client";
import Link from "next/link";
import { Slider } from "~/components/slider";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    localStorage.setItem("afterSelfRate", "1");
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
        className="text-mwWhite flex min-h-screen flex-col items-center text-center"
      >
        <p className="absolute top-[24vh] leading-7">
          เราอยากรู้ว่า
          <br />
          &quot;คุณรู้สึกดีต่อความสามารถตัวเองมากแค่ไหน&quot;
        </p>
        <div className="absolute top-[43vh] w-3/4">
          <Slider
            onValueChange={(newValue: { toString: () => string }) => {
              localStorage.setItem("afterSelfRate", newValue.toString());
            }}
            defaultValue={[1]}
            min={1}
            max={10}
            step={1}
          />
        </div>
        <div className="absolute bottom-[14vh] w-full">
          <Link href="/7-3">
            <button className="bg-yellow h-[4.5vh] w-1/4 rounded-lg font-semibold drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              ตกลง
            </button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
