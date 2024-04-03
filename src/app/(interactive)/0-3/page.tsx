import Link from "next/link";

export default function Page() {
  return (
    <Link href="/0-4">
      <main className="flex min-h-screen flex-col items-center justify-center bg-cover bg-no-repeat text-center">
        <div className="flex flex-col gap-8">
          <div className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <p className="text-purple3 font-bold">
              &quot;การเติบโตนำมาซึ่งการเปลี่ยนแปลงเสมอ&quot;
            </p>
            <p>
              อาจมีทั้งเรื่องดีและไม่ดี
              <br />
              และไม่แปลกที่คุณจะตั้งคำถามกับ
              <br />
              การเติบโตของตัวเอง
            </p>
          </div>
          <div className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <p className="text-purple3 font-charmonman text-xl font-bold">
              Magic Within
            </p>
            <p>
              Interactive Website ที่จะพาคุณใช้จินตนาการ
              <br />
              ผ่านเรื่องราวใน Magic Academy
              <br />
              เพื่อให้คุณได้เรียนรู้
              <br />
              และเข้าใจในการเติบโตของคุณ
            </p>
          </div>
          <p className="text-xs text-neutral-600">
            หมายเหตุ: คำตอบของคุณจะถูกบันทึก
            <br />
            เพื่อนำไปใช้เป็นข้อมูลทางการศึกษา
          </p>
        </div>
        <div className="absolute bottom-[14vh]">แตะเพื่อเริ่มการเดินทาง</div>
      </main>
    </Link>
  );
}
