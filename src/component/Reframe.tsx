
type Prop = {title:string,addLetters:(l:string)=>void,removeReframe:(l:string)=>void}

export default function Reframe({title,addLetters,removeReframe}:Prop){
    const Click = () => {
        addLetters(title)
        removeReframe(title)
    }
    const NClick = () => {

    }
    if(title === "แต่มันพึ่งจะเริ่มต้นเอง..."){
        return(
            <div className="mx-1 ">
                <button className="text-disable w-30  text-lg p-3" onClick={NClick} >{title}</button>
                
            </div>
        );
    }
    
    return(
        <div className="mx-1 ">
            <button className="word w-30 " onClick={Click} >{title}</button>
            
        </div>
    );
}