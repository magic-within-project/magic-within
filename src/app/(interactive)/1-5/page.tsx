"use client";

import { motion } from "framer-motion";
import { DialogBox } from "~/components/dialog-box";

export default function Page() {
  const name =
    typeof window !== "undefined" ? window.localStorage.getItem("name") : null;
  return (
    <>
      <main className="absolute h-full w-full justify-center bg-cover bg-no-repeat">
        <div className="fixed h-full w-full bg-white opacity-20" />
        <motion.div
          className="absolute bottom-[640px] w-full text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
        >
          <p>มีเสียงเรียกชื่อของคุณดังขึ้น</p>
        </motion.div>
        <DialogBox
          characterName="ฮาร์ท"
          dialog={`${name ? name : "เพื่อน"}!\nคนเยอะกว่าที่คิดไว้เยอะเลย เห็นแล้วตื่นเต้นขึ้นมาเลยเนอะ`}
          characterImg="heart"
          nextPage="/1-6"
          isCenter={true}
          height={464}
        />
      </main>
    </>
  );
}
