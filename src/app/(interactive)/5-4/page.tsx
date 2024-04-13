"use client";

import { DialogBox } from "~/components/dialog-box";

export default function Page() {
  return (
    <>
      <main className="absolute flex h-full w-full justify-center bg-cover bg-no-repeat">
        <div className="fixed h-full w-full bg-white opacity-20" />
        <DialogBox
          characterName="ฮาร์ท"
          dialog={
            "ในที่ ๆ เต็มไปด้วยคนเก่ง ๆ\nเยอะแยะไปหมด\nแกว่าเราจะสู้คนอื่นเขาได้จริง ๆ หรอ?"
          }
          characterImg="heart-sad"
          nextPage={"/5-5"}
          height={535}
        />
      </main>
    </>
  );
}
