
type Prop = {title:string,pass:number,addLetters:(l:string)=>void,removeReframe:(l:string)=>void}

export default function Reframe({title,pass,addLetters,removeReframe}:Prop){
    const Click = () => {
        if(pass == 0){
        addLetters(title)
        removeReframe(title)
    }
    }
    const NClick = () => {

    }
    if(title === "แต่มันพึ่งจะเริ่มต้นเอง"){
        return(
            <div className="mx-1 ">
                <button className="text-disable w-30  text-lg p-3" onClick={NClick} >{title}</button>
                
            </div>
        );
    }
    
    return(
        <div className="mx-1 ">
            <button className="bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white ; w-30 " onClick={Click} >{title}</button>
            
        </div>
    );
}