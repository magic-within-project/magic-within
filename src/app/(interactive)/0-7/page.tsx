import Link from "next/link";

export default function Page() {
  return (
    <Link href="/0-8">
      <main className="flex min-h-screen flex-col items-center justify-center text-center text-mwWhite">
        <p className="absolute top-[24vh] leading-7">
          ถ้าพร้อมแล้ว
          <br />
          เรามาตามหาเวทมนตร์
          <br />
          อันแสนวิเศษในตัวคุณกัน
        </p>
        <div className="absolute bottom-[14vh]">แตะเพื่อเริ่มการเดินทาง</div>
      </main>
    </Link>
  );
}
