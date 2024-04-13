"use client";

import { DialogBox } from "~/components/dialog-box";
export default function Page() {
  return (
    <>
      <main className="absolute flex h-full w-full justify-center bg-cover bg-no-repeat">
        <DialogBox
          characterName="ฮาร์ท"
          dialog={`เราต้องทำยังไงดีอะ ถึงจะเป็นคนที่เก่งพอ`}
          nextPage="3-9"
          isCenter={false}
          boxSize={"s"}
        />
      </main>
    </>
  );
}
