
type Prop = {title:string,addLetters:(l:string)=>void,removeReframe:(l:string)=>void}

export default function Reframe({title,addLetters,removeReframe}:Prop){
    const Click = () => {
        addLetters(title)
        removeReframe(title)
    }
    return(
        < >
            <button className="bg-disable text-purple text-center" onClick={Click} >{title}</button>
            
        </>
    )
}