"use client";

import { DialogBox } from "~/components/dialog-box";

export default function Page() {
  return (
    <>
      <main className="absolute flex h-full w-full justify-center bg-cover bg-no-repeat">
        <div className="fixed h-full w-full bg-white opacity-20" />
        <DialogBox
          characterName="ฮาร์ท"
          dialog={"แต่ว่า ..\nเราก็ยังรู้สึกไม่มั่นใจมากเท่าไหร่อยู่ดี"}
          characterImg="heart"
          nextPage={"/5-3"}
          height={535}
        />
      </main>
    </>
  );
}
