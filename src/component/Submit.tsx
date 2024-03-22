
type Prop = {finish:boolean,checkSequence:()=>boolean}
export default function Submit({finish,checkSequence}:Prop){
    if(finish){
        return (
            <>
                <button type ="submit" onClick={checkSequence}> Submit </button>
            </>
        )
    }
} 