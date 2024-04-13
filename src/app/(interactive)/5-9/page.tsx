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
            "เราอาจจะยังตั้งคำถามกับตัวเอง\nอยู่บ้าง แต่อย่างน้อยเราก็พร้อม\nที่จะลองดูอีกครั้งแล้วล่ะ"
          }
          characterImg="heart"
          nextPage={"/5-10"}
          height={535}
          delay={1}
        />
      </main>
    </>
  );
}
