"use client";
import Letter from "./Letter";
import Reframe from "./Reframe";
import Submit from "./Submit";
import { useState } from "react";
import Line from "./Line"
import { v4 as uuidv4 } from 'uuid';

export default function Pane(){
    const Result:string[] = ["ครั้งนี้" ,"จะต้องเป็น","การเรียนรู้","ที่ทำให้ฉัน","เติบโตขึ้น","แน่นอน"]
    const [reframe,setReframe] = useState<string[]>([])
    const [line,setLine] = useState<string[][]>([["แต่มันพึ่งจะเริ่มต้นเอง..."],[],[]])
    const [letters,setLetters] = useState<string[]>(["ครั้งนี้","การเรียนรู้","เติบโตขึ้น","แน่นอน","ที่ทำให้ฉัน","จะต้องเป็น"])
    const [finish,setFinish] = useState<boolean>(false)
    const [pass,setPass] = useState<boolean>(false);
    
    const checkSequence = () => {
        let check = true
        console.log(reframe)
        for(let i:number = 0 ; i < Result.length ; i++){
            if(reframe[i]!== Result[i]){
                check = false
                break
            }
        }
        if(!check){
            // const L:string[] = reframe
            // for(let i:number = 0 ; i < L.length ; i++){
            //     const j:number = ((i+1)*(i+i)+1+i)%L.length
            //     const tmp:string = L[i]!
            //     L[i] = L[j]!
            //     L[j] = tmp
            // }
            // console.log(L)
            setLetters(["ครั้งนี้" ,"จะต้องเป็น","การเรียนรู้","ที่ทำให้ฉัน","เติบโตขึ้น","แน่นอน"])
            setReframe([])
            setLine([["แต่มันพึ่งจะเริ่มต้นเอง..."],[],[]])
            setFinish(false)
            
        } else {
            setLetters([])
            setReframe([])
            setLine([[],["Congrat!!"],[]])
            setFinish(false)
            setPass(true);
        }
        console.log(check)
        return check

    }
    const addReframe = (l:string) => {
        if(reframe.length+1 === Result.length){
            setFinish(true)
        }
        
        let idx = Math.floor((reframe.length+2)/3)
        const newArr  = []
        let c = 0
        for(const arr of line){
            if(c != idx){
                newArr.push(arr)
            } else {
                arr.push(l)
                newArr.push(arr)
            }
            
            c++
        }
        setLine(newArr)
        setReframe(prevState => [...prevState, l])
        
    }
    const removeLetters = (l:string) => {
        setLetters(prevState => prevState.filter(e => e !== l))
       
    }
    const addLetters = (l:string) => {
        setLetters(prevState => [...prevState,l])
    
    }
    const removeReframe = (l:string) => {
        if(reframe.length-1 !== 3){
            setFinish(false)
        }
        let x = reframe.findIndex(e => e == l)
        x = Math.floor((x+2)/3)
        console.log(`idx: ${x}`)
        const newArr:string[][] = []
        let i = 0;
        let j = 2;
        setReframe(prevState => prevState.filter(e => e !== l))
        console.log(`reframe : ${reframe}`)
        let arr = ["แต่มันพึ่งจะเริ่มต้นเอง..."]
        if(reframe.length === 1){
            newArr.push(arr)
        } else{
            for(let word of reframe){
                if(word !== l){
                    arr.push(word)
                    j++
                    if(j%3 === 0){
                        i++
                        newArr.push(arr)
                    arr = []
                }
            }
            
            }
            if(j%3 !== 0) {
                console.log(`j : ${j}`)
                newArr.push(arr)
            }
            
        }
        while(newArr.length != 3){
            newArr.push([])
        }
        setLine(newArr)
        console.log(`Line : ${line}`)
       
    }
    

    return (
        <div className="w-1024 h-screen grid grid-cols-1 auto-rows-max justify-items-center ">
        <div className="flex flex-col pt-20 h-40">
        <h1 className="text-disable text-center text-sans text-lg font-semibold mt-12"> "ทำไมฉันถึงทำไม่ได้สักที</h1>
        <h1 className="text-disable text-center text-sans text-lg font-semibold"> หรือเพราะฉันไม่เหมาะจะอยู่ที่นี่"</h1>
        </div>
        
        <div className="mt-12">
        {line.map((e)=>{
            return <Line  key={uuidv4()} element={e} pass = {pass}firstLine={e[0] === "แต่มันพึ่งจะเริ่มต้นเอง..."}addLetters={addLetters} removeReframe={removeReframe}></Line>
                
        })}
        </div>
        {letters.map((e)=>{
            return <Letter  key = {uuidv4()}  title= {e}  addReframe={addReframe} removeLetters={removeLetters}/>
        })}
        <div className="pt-20">
            <Submit finish = {finish} checkSequence={checkSequence}/>
        </div>
        
        </div>
    );
}