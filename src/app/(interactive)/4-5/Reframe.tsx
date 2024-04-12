
type Prop = {title:string,pass:number,addLetters:(l:string)=>void,removeReframe:(l:string)=>void}

export default function Reframe({title,pass,addLetters,removeReframe}:Prop){
    const Click = () => {
        if(pass == 0){
        addLetters(title)
        removeReframe(title)
    }
    }

    if(title === "แต่"){
        return(
            <div className="mx-1 ">
                <button className="text-disable w-30  text-lg p-3" >{title}</button>
                
            </div>
        );
    }
    
    return(
        <div className="mx-1 ">
            <button className="bg-disable text-purple text-center text-lg p-1.5 rounded-xl hover:bg-active hover:text-white w-30 " onClick={Click} >{title}</button>
            
        </div>
    );
}