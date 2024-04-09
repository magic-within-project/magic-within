"use client";

import { DialogBox } from "~/components/dialog-box";
export default function Page() {
  return (
    <>
      <main className="absolute flex h-full w-full justify-center bg-cover bg-no-repeat">
        <DialogBox
          characterName="ฮาร์ท"
          dialog={`เราตั้งใจอยากให้มันออกมาดี แต่สุดท้ายมันก็ไม่ได้อะ เราท้อมากเลย`}
          nextPage="3-7"
          isCenter={false}
          boxSize={"s"}
        />
      </main>
    </>
  );
}
