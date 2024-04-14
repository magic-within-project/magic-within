

type Prop = {title : string ,addReframe:(title:string) => void,removeLetters:(title:string) => void}

export default function Letter({title,addReframe,removeLetters}:Prop){
    const Click = () => {
        addReframe(title)
        removeLetters(title)
    }
    if(title === "ครั้งนี้"){
        //console.log("ครั้งนี้")
        return ( 
            <button className = "absolute right-64 bottom-[258px] bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white border border-black animate-pulse hover:ease-out duration-300 " onClick = {Click} > {title} </button>    
        );
    } else if(title === "จะต้องเป็น"){
        //console.log("จะต้องเป็น")
        return (   
                <button className = " absolute left-52 bottom-[50px] bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white border border-black animate-pulse hover:ease-out duration-300" onClick = {Click} > {title} </button>    
        );
    } else if(title === "การเรียนรู้"){
        //console.log("การเรียนรู้")
        return (
                <button className = "absolute left-56 bottom-[226px] bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white border border-black animate-pulse hover:ease-out duration-300  bg-disable" onClick = {Click} > {title} </button>     
        );
    } else if(title === "ที่ทำให้ฉัน"){
        //console.log("ที่ทำให้ฉัน")
        return (
                <button className = "absolute left-72 bottom-[142px] bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white border border-black animate-pulse hover:ease-out duration-300  bg-disable" onClick = {Click} > {title} </button>     
        );
    } else if(title === "เติบโตขึ้น"){
        //console.log("เติบโตขึ้น")
        return (
                <button className = " absolute right-64 bottom-[114px] bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white border border-black animate-pulse hover:ease-out duration-300  bg-disable" onClick = {Click} > {title} </button>     
        );
    } else if(title === "แน่นอน"){
        //console.log("แน่นอน")
        return (
                <button className = "absolute right-72 bottom-[194px] bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white border border-black animate-pulse hover:ease-out duration-300  bg-disable" onClick = {Click} > {title} </button>     
        );
    }
    
    // return (
    //     <div className = "mx-10 my-5 absolute left-85 top-70"> 
    //         <button className = "word letter" onClick = {Click} > {title} </button>    
    //     </div>
    // );
    
}