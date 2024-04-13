"use client";

import { DialogBox } from "~/components/dialog-box";
export default function Page() {
  const name =
    typeof window !== "undefined" ? window.localStorage.getItem("name") : null;
  return (
    <>
      <main className="absolute flex h-full w-full justify-center bg-cover bg-no-repeat">
        <DialogBox
          characterName="อาจารย์"
          dialog={`เก่งมาก!\nทุกคนดู${name ? name : "เพื่อน"}ไว้เป็นตัวอย่างนะ นักเรียนของโรงเรียนเราต้องแบบนี้ล่ะ!`}
          characterImg="teacher"
          nextPage="/2-14"
          isCenter={false}
          height={464}
          delay={0.5}
        />
      </main>
    </>
  );
}
