import Link from "next/link";

export default function Page() {
  return (
    <Link href="/0-2">
      <main className="flex min-h-screen flex-col items-center justify-center bg-cover bg-no-repeat text-center">
        <div className="flex flex-col gap-4">
          <p>
            เว็บไซต์นี้มีเนื้อหาเกี่ยวกับ
            <br />
            การตั้งคำถามถึงความสามารถของตนเอง
            <br />
            ไม่ว่าที่ผ่านมา
            <br />
            คุณจะตั้งคำถามกับตัวเองอย่างไร
          </p>
          <p className="font-bold text-purple">
            แต่เราอยากให้คุณรู้ว่า
            <br />
            ความรู้สึกของคุณต่อตัวคุณ สำคัญที่สุด
          </p>
        </div>
        <div className="absolute bottom-[14vh]">แตะเพื่อไปต่อ</div>
      </main>
    </Link>
  );
}
