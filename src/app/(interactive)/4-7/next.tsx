
import Link from "next/link";

type Prop = {char:string,handleReframe:()=>void};

export default function next({char,handleReframe}:Prop){
    if(char !== ""){
       return (
       <button className="h-10 w-24 mt-48 bg-darkPurple text-white text-center text-lg  p-1.5 rounded-lg hover:bg-active hover:text-white" type ="submit" onClick={handleReframe}> 
       <Link href="/5-1">
    ยืนยัน
    </Link>
     </button>
     ) ;
    } else{
        return (
            <button className="h-10 w-24 mt-48 bg-darkPurple text-white text-center text-lg  p-1.5 rounded-lg hover:bg-active hover:text-white" type ="submit" onClick={handleReframe}> 
           
         ยืนยัน
        
          </button>
          ) ;
    }
   
}