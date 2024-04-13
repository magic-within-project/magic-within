"use client";

import { DialogBox } from "~/components/dialog-box";

export default function Page() {
  return (
    <>
      <main className="absolute flex h-full w-full justify-center bg-cover bg-no-repeat">
        <div className="fixed h-full w-full bg-white opacity-20" />
        <DialogBox
          characterName="ฮาร์ท"
          dialog={"เรากลับก่อนนะ"}
          characterImg="heart"
          nextPage={"/5-12"}
          height={535}
        />
      </main>
    </>
  );
}
