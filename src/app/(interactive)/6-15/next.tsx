
import Link from "next/link";

type Prop = {char:string,handleClick:()=>void};

export default function next({char,handleClick}:Prop){
    if(char !== ""){
       return (
       <button className="h-10 w-24 mt-10 bg-white text-darkPurple text-center text-lg  p-1.5 rounded-lg hover:bg-active hover:text-white" type ="submit" onClick={handleClick}> 
       <Link href="/6-16">
    ยืนยัน
    </Link>
     </button>
     ) ;
    } else{
        return (
            <button className="h-10 w-24 mt-10 bg-white text-darkPurple text-center text-lg  p-1.5 rounded-lg hover:bg-active hover:text-white" type ="submit" onClick={handleClick}> 
           
         ยืนยัน
        
          </button>
          ) ;
    }
   
}