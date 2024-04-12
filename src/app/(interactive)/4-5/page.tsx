"use client";

import Letter from "./Letter";
import Submit from "./Submit";
import { useState } from "react";
import Line from "./Line";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

export default function Pane() {
  const count = 7;
  const Result: string[][] = [
    [
      "ความผิดพลาด",
      "ครั้งนี้",
      "ไม่ได้",
      "หมายความว่า",
      "จะตัดสิน",
      "ความสามารถ",
      "ของฉัน",
    ],
    [
      "ไม่ได้",
      "หมายความว่า",
      "ความผิดพลาด",
      "ครั้งนี้",
      "จะตัดสิน",
      "ความสามารถ",
      "ของฉัน",
    ],
    [
      "ไม่ได้",
      "หมายความว่า",
      "ความผิดพลาด",
      "ครั้งนี้",
      "ของฉัน",
      "จะตัดสิน",
      "ความสามารถ",
    ],
    [
      "ไม่ได้",
      "หมายความว่า",
      "ความผิดพลาด",
      "ของฉัน",
      "ครั้งนี้",
      "จะตัดสิน",
      "ความสามารถ",
    ],
  ];
  const [reframe, setReframe] = useState<string[]>([]);
  const [line, setLine] = useState<string[][]>([["แต่"], [], []]);
  const [letters, setLetters] = useState<string[]>([
    "ไม่ได้",
    "จะตัดสิน",
    "ความผิดพลาด",
    "ครั้งนี้",
    "ของฉัน",
    "ความสามารถ",
    "หมายความว่า",
  ]);
  const [finish, setFinish] = useState<boolean>(false);
  const [pass, setPass] = useState<number>(0);
  const [size, setSize] = useState<number>(2);

  const checkSequence = () => {
    let check = false;
    console.log(reframe);
    for (const arr of Result) {
      let tmpcheck = true;
      for (let i = 0; i < arr.length; i++) {
        if (reframe[i] !== arr[i]) {
          tmpcheck = false;
          break;
        }
      }
      if (tmpcheck) {
        check = true;
        break;
      }
    }
    if (!check) {
      console.log("setpass -1");
      setPass(-1);
    } else {
      setPass(1);
    }

    console.log(check);
    return check;
  };

  const createLine = (arr: string[]) => {
    let w = 2;
    const newarr: string[][] = [];
    let tmp: string[] = ["แต่"];
    for (const s of arr) {
      let ws = 0;
      if (s === "ความผิดพลาด" || s === "หมายความว่า" || s === "ความสามารถ") {
        ws = 3;
      } else {
        ws = 2;
      }
      if (w + ws < 8) {
        tmp.push(s);
        w += ws;
      } else if (w + ws == 8) {
        tmp.push(s);
        newarr.push(tmp);
        tmp = [];
        w = 0;
      } else {
        newarr.push(tmp);
        tmp = [s];
        w = ws;
      }
      console.log(`letter : ${s} w : ${ws} sum : ${w}`);
    }
    if (w != 0) {
      newarr.push(tmp);
    }
    while (newarr.length !== 3) {
      newarr.push([]);
    }

    setLine(newarr);
  };

  const reset = () => {
    setLetters([
      "ไม่ได้",
      "จะตัดสิน",
      "ความผิดพลาด",
      "ครั้งนี้",
      "ของฉัน",
      "ความสามารถ",
      "หมายความว่า",
    ]);
    setReframe([]);
    setLine([["แต่"], [], []]);
    setFinish(false);
    setSize(0);
  };
  const addReframe = (l: string) => {
    if (reframe.length + 1 === count) {
      setFinish(true);
    }
    setReframe((prevState) => [...prevState, l]);
    const arr = reframe.concat([l]);
    createLine(arr);
  };
  const removeLetters = (l: string) => {
    setLetters((prevState) => prevState.filter((e) => e !== l));
  };
  const addLetters = (l: string) => {
    setLetters((prevState) => [...prevState, l]);
  };
  const removeReframe = (l: string) => {
    if (reframe.length - 1 !== 3) {
      setFinish(false);
    }

    setReframe((prevState) => prevState.filter((e) => e !== l));
    const arr = reframe.filter((e) => e !== l);
    createLine(arr);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
      >
        <div className="w-1024 bg-scene4-reframe2 grid h-screen auto-rows-max grid-cols-1 justify-items-center ">
          <div className="flex h-40 flex-col pt-20">
            <h1 className="text-sans mt-12 text-center font-plaphao text-lg text-disable">
              {" "}
              &quot;ที่ฉันเป็นอยู่ตอนนี้
            </h1>
            <h1 className="text-sans mt-1 text-center font-plaphao text-lg text-disable">
              {" "}
              มันยังไม่พอสำหรับความคาดหวังของคนอื่นแน่เลย&quot;
            </h1>
          </div>

          <div className="mt-12">
            {line.map((e) => {
              return (
                <Line
                  key={uuidv4()}
                  element={e}
                  pass={pass}
                  firstLine={e[0] === "แต่"}
                  addLetters={addLetters}
                  removeReframe={removeReframe}
                ></Line>
              );
            })}
          </div>
          {letters.map((e) => {
            return (
              <Letter
                key={uuidv4()}
                title={e}
                addReframe={addReframe}
                removeLetters={removeLetters}
              />
            );
          })}
          <div className="pt-20">
            <Submit
              finish={finish}
              pass={pass}
              checkSequence={checkSequence}
              setPass={setPass}
              reset={reset}
            />
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
