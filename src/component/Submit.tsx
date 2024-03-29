
type Prop = {finish:boolean,checkSequence:()=>boolean}
export default function Submit({finish,checkSequence}:Prop){
    if(finish){
        return (
                <button className="h-10 w-24 mt-48 bg-purple text-white text-center text-lg  p-1.5 rounded-lg hover:bg-active hover:text-white  animate-bounce  " type ="submit" onClick={checkSequence}> ตกลง </button>
        )
    }
} 