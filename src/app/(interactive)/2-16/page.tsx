"use client";

import { motion } from "framer-motion";
import { DialogBox } from "~/components/dialog-box";
export default function Page() {
const name = localStorage.getItem("name");
  return (
    <>
      <main className="absolute flex h-full w-full justify-center bg-cover bg-no-repeat">
      <DialogBox
          characterName="ฮาร์ท"
          dialog={`ยินดีด้วยนะ!\nเธอเก่งสมกับที่เป็นนักเวท\nที่นี่จริง ๆ ด้วย….`}
          characterImg="heart"
          nextPage="/2-17"
          isCenter={false}
          height={464}
          delay={1}
        />
      </main>
    </>
  );
}
