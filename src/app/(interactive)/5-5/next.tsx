import Link from "next/link";

type Prop = { char: string; handleClick: () => void };

export default function next({ char, handleClick }: Prop) {
  if (char !== "") {
    return (
      <button
        className="mt-20 h-10 w-24 rounded-lg bg-darkPurple p-1.5 text-center  text-lg text-white hover:bg-active hover:text-white"
        type="submit"
        onClick={handleClick}
      >
        <Link href="/6-5">ยืนยัน</Link>
      </button>
    );
  } else {
    return (
      <button
        className="mt-20 h-10 w-24 rounded-lg bg-darkPurple p-1.5 text-center  text-lg text-white hover:bg-active hover:text-white"
        type="submit"
        onClick={handleClick}
      >
        ยืนยัน
      </button>
    );
  }
}
