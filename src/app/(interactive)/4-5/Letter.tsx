

type Prop = {title : string ,addReframe:(title:string) => void,removeLetters:(title:string) => void}

export default function Letter({title,addReframe,removeLetters}:Prop){
    const Click = () => {
        addReframe(title)
        removeLetters(title)
    }
    if(title === "หมายความว่า"){
        //console.log("ครั้งนี้")
        return ( 
            <button className = "bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white border border-black animate-pulse hover:ease-out duration-300 absolute left-32 bottom-[50px]" onClick = {Click} > {title} </button>    
        );
    } else if(title === "ของฉัน"){
        //console.log("จะต้องเป็น")
        return (   
                <button className = "bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white border border-black animate-pulse hover:ease-out duration-300 absolute left-72 bottom-[226px]" onClick = {Click} > {title} </button>    
        );
    } else if(title === "ความสามารถ"){
        //console.log("การเรียนรู้")
        return (
                <button className = "bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white border border-black animate-pulse hover:ease-out duration-300 absolute left-72 bottom-[66px]" onClick = {Click} > {title} </button>     
        );
    } else if(title === "จะตัดสิน"){
        //console.log("ที่ทำให้ฉัน")
        return (
                <button className = "bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white border border-black animate-pulse hover:ease-out duration-300 absolute left-64 bottom-[162px] " onClick = {Click} > {title} </button>     
        );
    } else if(title === "ความผิดพลาด"){
        //console.log("เติบโตขึ้น")
        return (
                <button className = "bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white border border-black animate-pulse hover:ease-out duration-300 absolute right-64 bottom-[114px] " onClick = {Click} > {title} </button>     
        );
    } else if(title === "ไม่ได้"){
        //console.log("แน่นอน")
        return (
                <button className = "bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white border border-black animate-pulse hover:ease-out duration-300 absolute right-80 bottom-[248px] " onClick = {Click} > {title} </button>     
        );
    } else if(title === "ครั้งนี้"){
        //console.log("แน่นอน")
        return (
                <button className = "bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white border border-black animate-pulse hover:ease-out duration-300 absolute right-56 bottom-[194px] " onClick = {Click} > {title} </button>     
        );
    }
    
    // return (
    //     <div className = "mx-10 my-5 absolute left-85 top-70"> 
    //         <button className = "word letter" onClick = {Click} > {title} </button>    
    //     </div>
    // );
    
}