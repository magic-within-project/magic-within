import Link from "next/link";

export default function Page() {
  return (
    <Link href="/3-3">
      <main className="flex min-h-screen flex-col items-center text-center text-white">
        <p className="absolute top-[24vh] leading-7">
          คุณพอจะเดาได้ว่า ผลการวัดระดับของฮาร์ท
          <br />
          คงจะออกมาไม่ดีเท่าไหร่นัก
        </p>
      </main>
    </Link>
  );
}
