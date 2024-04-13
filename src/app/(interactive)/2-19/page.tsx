"use client";

import { DialogBox } from "~/components/dialog-box";
export default function Page() {
  return (
    <>
      <main className="absolute flex h-full w-full justify-center bg-cover bg-no-repeat">
        <DialogBox
          characterName="อาจารย์"
          dialog={`เอาล่ะ เลิกคลาส วันนี้พอแค่นี้ก่อน\nไปพักผ่อนกันได้แล้วเด็ก ๆ`}
          characterImg="teacher"
          nextPage="2-20"
          isCenter={false}
          height={464}
          delay={0.5}
        />
      </main>
    </>
  );
}
