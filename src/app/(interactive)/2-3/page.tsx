"use client";

import { motion } from "framer-motion";
import { DialogBox } from "~/components/dialog-box";
export default function Page() {
  return (
    <>
      <main className="absolute flex h-full w-full justify-center bg-cover bg-no-repeat">
        <DialogBox
          characterName="อาจารย์"
          dialog={`ยินดีต้อนรับเหล่านักเวททุกคน นี่คือวิชาการยิงเวท ครูคิดว่าพวกเธอทุกคนก็คงพอจะมีพื้นฐานกันมาบ้างคนละไม่มากก็น้อย`}
          characterImg="teacher"
          nextPage="2-4"
          isCenter={false}
          height={464}
        />
      </main>
    </>
  );
}
