
import Reframe from "./Reframe";
import { v4 as uuidv4 } from 'uuid';

type props = {element : string[],firstLine:boolean,pass:number,addLetters:(l:string)=>void,removeReframe:(l:string)=>void}

export default function line({element,firstLine,pass,addLetters,removeReframe}:props){
    if(pass != 3){
    if(firstLine){
        return (
            <div className="grid grid-cols-1 mt-3 ">
                <div  className="flex flex-row h-5">
                {element.map((e) => {
                    return <Reframe key = {uuidv4()} title={e} pass={pass} addLetters={addLetters} removeReframe={removeReframe}></Reframe>
                })}
                 
                </div >
                <div className="inline-flex">
                    <h1 className="text-transparent">________________________</h1>
                    <h1 className="text-transparent">______________</h1>
                </div>
                <div className="flex justify-end">
                <hr className="mt-1 w-2/5 border-b border-disable "></hr>
                </div>
               
                
                
            </div>
        );
    }
    return (
        <div className="mt-3">
            <div  className="flex flex-row h-5 ">
            {element.map((e) => {
                return <Reframe key = {uuidv4()} title={e} pass={pass} addLetters={addLetters} removeReframe={removeReframe}></Reframe>
            })}
            </div>
            <hr className="mt-8 border-b border-disable relative bottom-0"></hr>
        </div>
    );
    } else {
        return(
            <>
            {element.map((e) => {
                return <Reframe key = {uuidv4()} title={e} pass={pass} addLetters={addLetters} removeReframe={removeReframe}></Reframe>
            })}
            </>
        );
    }
}