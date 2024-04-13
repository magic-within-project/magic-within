"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Page() {
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
        <p className="absolute top-[35vh]">
          ขอบคุณทุกคนที่มาค้นหาตัวเองกับเรา
          <br />
          กดปุ่มเพื่อประเมินได้เลย !
        </p>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSf6OBtgbmHsEq9eWisZ0WGM-4XXlegjH-jSe9SWN-tPiGCwsw/viewform"
          className="absolute top-[45vh] flex w-full justify-center"
        >
          <button className="flex h-12 w-2/3 items-center justify-center rounded-[10px] bg-whiteButton pt-1 drop-shadow-[0_2px_1px_rgba(0,0,0,0.05)]">
            <Image
              src="/img/logo_MW.webp"
              width={140}
              height={35}
              alt="MagicWithin logo"
            />
          </button>
        </Link>
      </motion.div>
    </main>
  );
}
