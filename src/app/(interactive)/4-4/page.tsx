"use client";
import Letter from "./Letter";
import Submit from "./Submit";
import { useState } from "react";
import Line from "./Line"
import { v4 as uuidv4 } from 'uuid';
import { motion } from "framer-motion";
import Link from "next/link";

export default function Pane(){
    const count = 6;
    const Result:string[][] = [["ครั้งนี้" ,"จะต้องเป็น","การเรียนรู้","ที่ทำให้ฉัน","เติบโตขึ้น","แน่นอน"],["จะต้องเป็น","การเรียนรู้","ครั้งนี้" ,"ที่ทำให้ฉัน","เติบโตขึ้น","แน่นอน"],["การเรียนรู้","ที่ทำให้ฉัน","เติบโตขึ้น","จะต้องเป็น","ครั้งนี้" ,"แน่นอน"]]
    const [reframe,setReframe] = useState<string[]>([])
    const [line,setLine] = useState<string[][]>([["แต่มันพึ่งจะเริ่มต้นเอง"],[],[]])
    const [letters,setLetters] = useState<string[]>(["ครั้งนี้","การเรียนรู้","เติบโตขึ้น","แน่นอน","ที่ทำให้ฉัน","จะต้องเป็น"])
    const [finish,setFinish] = useState<boolean>(false)
    const [pass,setPass] = useState<number>(0);
    
    const checkSequence = () => {
        let check = false;
        console.log(reframe)
        for(const arr of Result){
            let tmpcheck = true;
            for(let i:number = 0 ; i < arr.length ; i++){ 
                if(reframe[i]!== arr[i]){
                tmpcheck = false
                break
                }
            }
            if(tmpcheck) {
                check = true;
                break;
            }
        }
        if(!check){          
            setPass(-1)
            
            
        } else {
            setPass(1);
        }
       
        console.log(check)
        return check

    }

    const reset = () => {
        setLetters(["ครั้งนี้" ,"จะต้องเป็น","การเรียนรู้","ที่ทำให้ฉัน","เติบโตขึ้น","แน่นอน"])
        setReframe([])
        setLine([["แต่มันพึ่งจะเริ่มต้นเอง"],[],[]])
        setFinish(false)
    }
    const addReframe = (l:string) => {
        if(reframe.length+1 === count){
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
        let arr = ["แต่มันพึ่งจะเริ่มต้นเอง"]
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
        <>
            <motion.div
            initial={{opacity : 0}}
            animate={{opacity : 1 ,transition : {duration : 2}}}
            >
        <div className="w-1024 h-screen bg-scene4-start grid grid-cols-1 auto-rows-max justify-items-center ">
        <div className="flex flex-col pt-20 h-40">
        <h1 className="text-disable text-center text-sans text-lg font-plaphao mt-12"> "ทำไมฉันถึงทำไม่ได้สักที</h1>
        <h1 className="text-disable text-center text-sans text-lg font-plaphao"> หรือเพราะฉันไม่เหมาะจะอยู่ที่นี่"</h1>
        </div>
        
        <div className="mt-12">
        {line.map((e)=>{
            return <Line  key={uuidv4()} element={e} pass = {pass} firstLine={e[0] === "แต่มันพึ่งจะเริ่มต้นเอง"}addLetters={addLetters} removeReframe={removeReframe}></Line>
                
        })}
        </div>
        {letters.map((e)=>{
            return <Letter  key = {uuidv4()}  title= {e}  addReframe={addReframe} removeLetters={removeLetters}/>
        })}
        <div className="pt-20">
            <Submit finish = {finish} pass = {pass} checkSequence={checkSequence} setPass={setPass} reset={reset}/>
        </div>
        
        </div>
        </motion.div>
         <motion.div
         initial={{ opacity: 0 }}
         animate={{
           opacity: 1,
           z: 10,
           transition: { duration: 1, delay: 2.5 },
         }}
         className="absolute top-[80%]"
       ></motion.div>
       </>
    );
}