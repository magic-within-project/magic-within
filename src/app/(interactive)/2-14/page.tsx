"use client";

import { DialogBox } from "~/components/dialog-box";
export default function Page() {
  return (
    <>
      <main className="absolute flex h-full w-full justify-center bg-cover bg-no-repeat">
        <DialogBox
          characterName="เพื่อน ๆ"
          dialog={`โห! เธอยิงกลางเป้าหมดเลยเหรอ สุดยอดไปเลย`}
          nextPage="/2-15"
          isCenter={false}
          height={464}
          delay={0.5}
          reanimate="textAndCharacter"
        />
      </main>
    </>
  );
}
