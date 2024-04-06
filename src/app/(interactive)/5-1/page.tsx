import Link from "next/link";

export default function Page() {
  return (
    <Link href="/5-2">
      <main className="flex min-h-screen flex-col items-center text-center text-white">
        <p className="absolute top-[24vh]">
          ตอนนี้คุณออกจากความคิดของฮาร์ท <br />
          กลับมาสู่โลกความเป็นจริงอีกครั้ง
        </p>
      </main>
    </Link>
  );
}
