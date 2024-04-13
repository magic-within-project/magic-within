import Link from "next/link";
type Prop = {finish:boolean,pass:number,checkSequence:()=>boolean,setPass:(stage:number)=>void,reset:()=>void}
export default function Submit({finish,pass,checkSequence,setPass,reset}:Prop){
    const replay = () => {
        setPass(0);
        reset();
    }

    if(finish ){
        if(pass === 0){
            return (
                <button className="h-10 w-24 mt-48 bg-darkPurple text-white text-center text-lg  p-1.5 rounded-lg hover:bg-active hover:text-white  animate-bounce  " type ="submit" onClick={checkSequence}> ตกลง </button>
            )
        }else if(pass === -1){
            return (
                <button className="h-10 w-24 mt-48 bg-active text-white text-center text-lg  p-1.5 rounded-lg hover:text-white  animate-bounce  " type ="submit" onClick={replay}> ลองใหม่ </button>
            )
        } else if(pass === 1){
            return (
                <Link href="/4-5">
            <button className="h-10 w-24 mt-48 bg-purple text-white text-center text-lg  p-1.5 rounded-lg hover:bg-active hover:text-white  animate-bounce  " type ="submit" > ต่อไป </button>
            </Link>
            )
    }
    } 
} 