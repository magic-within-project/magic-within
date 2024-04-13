

type Prop = {title : string ,addReframe:(title:string) => void,removeLetters:(title:string) => void}

export default function Letter({title,addReframe,removeLetters}:Prop){
    const Click = () => {
        addReframe(title)
        removeLetters(title)
    }
    if(title === "ครั้งนี้"){
        //console.log("ครั้งนี้")
        return ( 
            <button className = "bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white border border-black animate-pulse hover:ease-out duration-300 absolute right-64 bottom-72" onClick = {Click} > {title} </button>    
        );
    } else if(title === "จะต้องเป็น"){
        //console.log("จะต้องเป็น")
        return (   
                <button className = "bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white border border-black animate-pulse hover:ease-out duration-300 absolute left-52 bottom-20" onClick = {Click} > {title} </button>    
        );
    } else if(title === "การเรียนรู้"){
        //console.log("การเรียนรู้")
        return (
                <button className = "bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white border border-black animate-pulse hover:ease-out duration-300 absolute left-56 bottom-64 bg-disable" onClick = {Click} > {title} </button>     
        );
    } else if(title === "ที่ทำให้ฉัน"){
        //console.log("ที่ทำให้ฉัน")
        return (
                <button className = "bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white border border-black animate-pulse hover:ease-out duration-300 absolute left-72 bottom-48  bg-disable" onClick = {Click} > {title} </button>     
        );
    } else if(title === "เติบโตขึ้น"){
        //console.log("เติบโตขึ้น")
        return (
                <button className = "bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white border border-black animate-pulse hover:ease-out duration-300 absolute right-64 bottom-36  bg-disable" onClick = {Click} > {title} </button>     
        );
    } else if(title === "แน่นอน"){
        //console.log("แน่นอน")
        return (
                <button className = "bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white border border-black animate-pulse hover:ease-out duration-300 absolute right-72 bottom-56  bg-disable" onClick = {Click} > {title} </button>     
        );
    }
    
    // return (
    //     <div className = "mx-10 my-5 absolute left-85 top-70"> 
    //         <button className = "word letter" onClick = {Click} > {title} </button>    
    //     </div>
    // );
    
}