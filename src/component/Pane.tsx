"use client";
import Letter from "./Letter";
import Reframe from "./Reframe";
import Submit from "./Submit";
import Layout from "./Layout";
import { useState } from "react";


export default function Pane(){
    const Result:string[] = ["พึ่งจะ","เริ่มต้นเอง","ครั้งนี้" ,"จะต้องเป็น","การเรียนรู้","ที่ทำให้ฉัน","เติบโตขึ้น","แน่นอน"]
    const [reframe,setReframe] = useState<string[]>([])
    const [letters,setLetters] = useState<string[]>(["พึ่งจะ","ครั้งนี้","การเรียนรู้","เติบโตขึ้น","แน่นอน","ที่ทำให้ฉัน","จะต้องเป็น","เริ่มต้นเอง"])
    const [finish,setFinish] = useState<boolean>(false)
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
            const L:string[] = reframe
            for(let i:number = 0 ; i < L.length ; i++){
                const j:number = ((i+1)*(i+i)+1+i)%L.length
                const tmp:string = L[i]!
                L[i] = L[j]!
                L[j] = tmp
            }
            console.log(L)
            setLetters(L)
            setReframe([])
            setFinish(false)
            
        } else {
            setLetters([])
            setReframe(["Congrat!!"])
            setFinish(false)
        }
        console.log(check)
        return check

    }
    const addReframe = (l:string) => {
        if(reframe.length+1 === Result.length){
            setFinish(true)
        }
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
        setReframe(prevState => prevState.filter(e => e !== l))
    }

    return (
        <>
        <Layout key = "113">
        {reframe.map((e)=>{
            return <Reframe key = {e} title = {e} addLetters = {addLetters} removeReframe={removeReframe} />
        })}
        </Layout>
        {letters.map((e)=>{
            return <Letter  key = {e} title= {e}  addReframe={addReframe} removeLetters={removeLetters}/>
        })}
        <Submit finish = {finish} checkSequence={checkSequence}/>
        </>
    );
}