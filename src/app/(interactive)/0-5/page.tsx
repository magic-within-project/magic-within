"use client";
import Link from "next/link";
import { Slider } from "~/components/slider";

export default function Page() {
  return (
    <Link href="/0-6">
      <main className="flex min-h-screen flex-col items-center text-center text-mwWhite">
        <p className="absolute top-[18vh]">
          ก่อนจะเริ่มการเดินทาง เราอยากรู้ว่า
        </p>
        <p className="absolute top-[25vh] text-xl leading-8">
          &quot;คุณรู้สึกดีต่อความสามารถ
          <br />
          ของตัวเองมากแค่ไหน&quot;
        </p>
        <div className="absolute top-[43vh] w-3/4">
          <Slider
            onValueChange={(newValue: { toString: () => string }) => {
              localStorage.setItem("beforeSelfRate", newValue.toString());
            }}
            defaultValue={[1]}
            min={1}
            max={10}
            step={1}
          />
        </div>
        <div className="absolute bottom-[14vh]">แตะเพื่อไปต่อ</div>
      </main>
    </Link>
  );
}
