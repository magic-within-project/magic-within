import Link from "next/link";

export default function Page() {
  return (
    <Link href="/3-12">
      <main className="flex min-h-screen flex-col items-center text-center text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <p className="absolute top-[10vh] leading-7">
          <span className="font-bold">คทาพลังใจ</span>ที่คุณได้รับมาวันนี้
        </p>
        <p className="absolute top-[15vh] leading-7">
          ฮาร์ทที่เต็มไปด้วยคำถามด้านลบในใจ
          <br />
          คทาพลังใจคงจะช่วยฮาร์ทได้แน่ ๆ
        </p>
      </main>
    </Link>
  );
}
