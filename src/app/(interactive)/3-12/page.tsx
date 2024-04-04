import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center text-center text-white">
      <div className="fixed h-full w-full bg-black opacity-30" />
      <p className="absolute top-[23vh] leading-7">
        ถึงเวลาแล้ว
        <br />
        ที่คุณจะใช้เวทมนตร์ที่ซ่อนอยู่ในตัวคุณ
        <br />
        เวทมนตร์ที่เฝ้ารอให้คุณค้นพบอยู่
      </p>
      <Image
        src="/img/wand-3-12.webp"
        width={330}
        height={330}
        alt="wand"
        className="absolute bottom-0 right-0 z-10"
      />
      <div className="absolute bottom-[10vh] w-full">
        <Link href="/4-1">
          <button className="h-[4.5vh] w-1/4 rounded-lg bg-purple2 font-semibold text-mwWhite drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            ร่ายเวท!
          </button>
        </Link>
      </div>
    </main>
  );
}
