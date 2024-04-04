import Link from "next/link";

export default function Page() {
  return (
    <Link href="/3-2">
      <main className="flex min-h-screen flex-col items-center text-center text-white">
        <p className="absolute top-[24vh] leading-7">
          คุณเดินตามฮาร์ท
          <br />
          และสังเกตได้ถึงความรู้สึกเศร้า
        </p>
      </main>
    </Link>
  );
}
