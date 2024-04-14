"use client";

import { useMemo, useState } from "react";
import { DialogBox } from "~/components/dialog-box";

export default function Page() {
  const [dialogNo, setDialogNo] = useState(0);
  const dialog = useMemo(() => {
    return [
      "ไม้คทาที่พวกคุณกำลังถืออยู่นั้น\nเป็นกุญแจที่จะช่วยให้พวกคุณได้\nค้นพบเวทมนตร์ที่ซ่อนอยู่ในตัวคุณ",
      "ผมหวังว่ามันจะคอยอยู่เคียงข้าง\nพวกคุณในทุกการเติบโต และคอย\nนำทางให้กับคุณในยามที่คุณรู้สึก\nหลงทาง",
      "ขอให้การเดินทางหลังจากนี้\nของพวกคุณทุกคนเปี่ยมไปด้วย\nเรื่องราวและความทรงจำที่ดี",
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
          nextPage={dialogNo === dialog.length - 1 ? "/1-11" : "#"}
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
