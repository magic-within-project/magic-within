

type Prop = {title : string ,addReframe:(title:string) => void,removeLetters:(title:string) => void}

export default function Letter({title,addReframe,removeLetters}:Prop){
    const Click = () => {
        addReframe(title)
        removeLetters(title)
    }
    return (
        < > 
            <button className = "bg-disable text-purple text-center"onClick = {Click} > {title} </button>    
        </>
    );
}