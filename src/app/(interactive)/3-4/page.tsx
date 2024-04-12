"use client";

import { useEffect, useState } from "react";
import { DialogBox } from "~/components/dialog-box";
export default function Page() {
  const [name, setName] = useState<string>("");
  useEffect(() => {
    setName(localStorage.getItem("name") ?? "");
  }, []);
  return (
    <>
      <main className="absolute flex h-full w-full justify-center bg-cover bg-no-repeat">
        <DialogBox
          characterName="ฮาร์ท"
          dialog={`${name} เมื่อกี้เราวัดระดับไม่ผ่านล่ะ`}
          nextPage="3-5"
          isCenter={false}
          boxSize={"s"}
        />
      </main>
    </>
  );
}
