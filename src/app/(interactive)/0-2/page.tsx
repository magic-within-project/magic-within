import Link from "next/link";

export default function Page() {
  return (
    <Link href="/0-3">
      <main className="flex min-h-screen flex-col items-center justify-center text-center">
        <div className="flex flex-col gap-4">
          <p>
            เว็บไซต์นี้เป็นส่วนหนึ่งของ Senior Project
            <br />
            สาขาวิชาวาทนิเทศ (Speech Communication)
            <br />
            ภาควิชาวาทวิทยาและสื่อสารการแสดง
            <br />
            คณะนิเทศศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
          </p>
        </div>
        <div className="absolute bottom-[14vh]">แตะเพื่อไปต่อ</div>
      </main>
    </Link>
  );
}
