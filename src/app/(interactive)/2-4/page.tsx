"use client";

import { DialogBox } from "~/components/dialog-box";
export default function Page() {
  return (
    <>
      <main className="absolute flex h-full w-full justify-center bg-cover bg-no-repeat">
        <DialogBox
          characterName="อาจารย์"
          dialog={`เพราะงั้นเดี๋ยวเราลองมาวัดระดับกันสักหน่อยดีกว่า จะได้รู้ว่าแต่ละคนเก่งสมกับที่ได้มาอยู่โรงเรียนนี้จริง ๆ หรือเปล่า ฮ่า ๆ`}
          characterImg="teacher"
          nextPage="2-5"
          isCenter={false}
          height={464}
          delay={1}
        />
      </main>
    </>
  );
}
