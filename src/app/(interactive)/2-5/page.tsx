"use client";

import { DialogBox } from "~/components/dialog-box";
export default function Page() {
  return (
    <>
      <main className="absolute flex h-full w-full justify-center bg-cover bg-no-repeat">
        <DialogBox
          characterName="อาจารย์"
          dialog={`ทุกคนหยิบคทาของตัวเองขึ้นมา`}
          characterImg="teacher"
          nextPage="2-6"
          isCenter={false}
          height={464}
          delay={0.5}
        />
      </main>
    </>
  );
}