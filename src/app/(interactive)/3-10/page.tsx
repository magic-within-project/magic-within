import Link from "next/link";

export default function Page() {
  return (
    <Link href="/3-11">
      <main className="flex min-h-screen flex-col items-center text-center text-white">
        <div className="fixed h-full w-full bg-black opacity-30" />
        <p className="absolute top-[20vh] leading-7">
          ดูเหมือนว่า
          <br />
          ตอนนี้ฮาร์ทจะรู้สึกแย่กับตัวเองมาก ๆ
        </p>
        <p className="absolute top-[30vh] leading-7">
          ตัวคุณในตอนนี้
          <br />
          มีบางสิ่งที่จะช่วยมอบพลังใจ
          <br />
          ให้กับคนที่ต้องการมันได้
        </p>
      </main>
    </Link>
  );
}
