"use client";

import { DialogBox } from "~/components/dialog-box";
export default function Page() {
  return (
    <>
      <main className="absolute flex h-full w-full justify-center bg-cover bg-no-repeat">
        <DialogBox
          characterName="เพื่อน ๆ"
          dialog={`เธอไปหัดมาจากไหนน่ะ\nสอนฉันบ้างสิ!`}
          nextPage="/2-16"
          isCenter={false}
          height={464}
          delay={0.5}
          reanimate="text"
        />
      </main>
    </>
  );
}
