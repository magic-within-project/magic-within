"use client";

import { useMemo, useState } from "react";
import { DialogBox } from "~/components/dialog-box";

export default function Page() {
  const [dialogNo, setDialogNo] = useState(0);
  const dialog = useMemo(() => {
    return [
      "ยินดีต้อนรับนักเวททุกคนเข้าสู่\nMagic Academy !",
      "ผมในฐานะผู้อำนวยการของโรงเรียน ดีใจเป็นอย่างยิ่งที่วันนี้\nเป็นก้าวสำคัญอีกก้าวของอนาคต\nแห่งโลกเวทมนตร์",
      "ผมรู้ว่าพวกคุณนั้นต้องพยายาม\nอย่างหนักเพื่อที่จะเป็นตัวคุณที่ยืนอยู่ที่นี่ในวันนี้",
      "เส้นทางจากนี้ไปคงต้องฝ่าฟันอุปสรรคอีกมากมาย\nมันอาจจะไม่ใช่เส้นทางที่ง่ายดายนัก",
      "แต่ผมเชื่อว่าพวกคุณทุกคนซึ่งเป็นนักเวทที่เราคัดเลือกมาอย่างเข้มงวด มีศักยภาพเพียงพอที่จะก้าวข้าม ทุกอุปสรรคที่เข้ามาได้",
    ];
  }, []);

  return (
    <>
      <main className="absolute flex h-full w-full justify-center bg-cover bg-no-repeat">
        <div className="fixed h-full w-full bg-white opacity-20" />
        <DialogBox
          characterName="ผู้อำนวยการ"
          dialog={dialog[dialogNo] ?? "อะแฮ่ม อะแฮ่ม ทุกคนฟังแล้วหรือยังครับ"}
          characterImg="director"
          nextPage={dialogNo === dialog.length - 1 ? "/1-9" : "#"}
          height={356}
          handleClick={() => {
            setDialogNo(
              dialogNo === dialog.length - 1 ? dialogNo : dialogNo + 1,
            );
          }}
          animationKey={dialogNo}
          reanimate={dialogNo === 0 ? undefined : "text"}
        />
      </main>
    </>
  );
}
