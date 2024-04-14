"use client";

import { DialogBox } from "~/components/dialog-box";
export default function Page() {
  return (
    <>
      <main className="absolute flex h-full w-full justify-center bg-cover bg-no-repeat">
        <DialogBox
          characterName="ฮาร์ท"
          dialog={`เราอยากเป็นคนเก่ง แต่พอทำไม่ได้เราเลยคิดว่าเรายังดีไม่พอ`}
          nextPage="3-8"
          isCenter={false}
          boxSize={"s"}
          reanimate="text"
        />
      </main>
    </>
  );
}
