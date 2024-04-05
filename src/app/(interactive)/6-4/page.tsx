"use client";

import { useState } from "react";
import Link from "next/link";


export default function page() {
    const [char,setChar] = useState<string>("")
    const handleClick = () => {
        localStorage.setItem("reflex",char);
    }
    return (
        <div className="grid justify-item-center">
            <h1 className="text-center text-white mt-36">ไหนลองเล่าให้ฟังหน่อยว่า</h1>
            <h1 className="text-center text-white mt-1">คุณกำลังตั้งคำถามในความสามารถของตนเอง</h1>
            <h1 className="text-center text-white mt-1">ในเรื่องอะไรอยู่</h1>

            <textarea className="h-72 w-5/6 justify-self-center mt-7 rounded-2xl p-5" placeholder="โปรดพิมพ์คำตอบของคุณ"  
            required = {true} maxLength={180} onChange={(e)=>setChar(e.target.value)}></textarea>

            <button className="bg-purple w-24 h-10 rounded-lg text-white justify-self-center
             mt-16 hover:bg-active" onClick={handleClick} > 
             <Link href="/6-5">
             ยืนยัน
             </Link>
              </button>

        </div>

    );
}