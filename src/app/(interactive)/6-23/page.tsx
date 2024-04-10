"use client";

import { motion } from "framer-motion";
import { DownloadIcon } from "./downloadIcon";
import { useEffect,useState } from "react";
import Link from "next/link";
import UAParser from "ua-parser-js";
import { toJpeg } from "html-to-image";
import { AnimatePresence } from "framer-motion";
import DownloadImageAlert from "~/components/downloadImageAlert";
import { Dialog } from "~/components/dialog";
import { DialogTrigger } from "~/components/dialog";
import styled from 'styled-components';
import React from "react";

    

export default function page() {

    const supportQuote = localStorage.getItem("doubtYourselfFeeling")
    const [downloadAlert, setDownloadAlert] = useState<boolean>(false);
    const [userAgentData, setUserAgentData] = useState<string>();
    
    

   
    

    

    useEffect(() => {
        const parser = new UAParser(navigator.userAgent);
        setUserAgentData(parser.getDevice().model);
      }, []);

      const convertImage = async (element: HTMLElement) => {
        let dataUrl = "";
        const minDataLength = 150000;
        const maxAttempts = 20;
    
        for (let i = 0; dataUrl.length < minDataLength && i < maxAttempts; ++i) {
          dataUrl = await toJpeg(element, { quality: 0.95 });
        }
    
        return dataUrl;
      };

      const downloadImage = async () => {
        console.log("Click")

        const exportedWords = document.getElementById("exportedWords");
        if (!exportedWords) return;
    
        const dataUrl = await convertImage(exportedWords);
    
        const link = document.createElement("a");
        console.log(link)
        link.download = "MagicWithin1.jpeg";
        link.href = dataUrl;
        link.click();
    
        setDownloadAlert(true);
        window.setTimeout(() => {
          setDownloadAlert(false);
        }, 3000);
        console.log(downloadAlert)
      };


    const shareImage = async () => {
        const exportedWords = document.getElementById("exportedWords");
        if (!exportedWords) return;

        
        const dataUrl = await convertImage(exportedWords);
    
        const dataBlob = await (await fetch(dataUrl)).blob();
        if (!dataBlob) return;
    
        const image = new File([dataBlob], "MagicWithin1.png", {
          type: dataBlob.type,
        });
        const shareData: ShareData = {
          title: "Magic Within",
          text: "Your words",
          files: [image],
        };
    
        try {
          navigator.share(shareData);
          console.log("Shared successfully");
          setDownloadAlert(true);
          window.setTimeout(() => {
            setDownloadAlert(false);
          }, 3000);
        } catch (err) {
          console.log("Error: " + err);
        }
      };

      const click = () => {
        console.log("Click")
      }



    return (
        //<Link href={link}>
        <div>
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1,transition:{duration:2}}}
            >
            
          <div className="z-10 h-screen w-full bg-[url(/bg/bg6-23.webp)] bg-[length:450px_900px] bg-center" id="exportedWords"  >
            <div>
            <h1 className="absolute mt-[160px] left-[80px] text-wrap text-white drop-shadow text-sm">
                  ถึงตัวฉันเอง...
                </h1>
              <div className="absolute h-2048 top-5 grid  w-[252px] mx-24">
                
                <h1 className=" mt-[205px] ml-[0px] justify-self-center text-center content-center text-wrap text-white text-sm drop-shadow">
                  {supportQuote}
                </h1>
                
                
                
                  {/* <h1 className=" mt-28 justify-self-center text-center content-center text-wrap text-brown drop-shadow "></h1> */}
                  {/* <h1 className=" mt-5 justify-self-center text-center content-center text-wrap text-brown drop-shadow ">แต่</h1>
                  <h1 className=" mt-5 justify-self-center text-center content-center text-wrap text-brown drop-shadow ">{selfReframing}</h1> */}
              </div>
            </div>   
        </div>
      
        <Dialog>
                <DialogTrigger asChild className="z-20 absolute right-[60px] top-[70px] flex h-11 w-11 items-center justify-center gap-2.5 rounded-full ">
                    {userAgentData === "iPhone" ? (
                        <div onClick={shareImage}>
                            <DownloadIcon />
                        </div>
                     ) : (
                        <div onClick={downloadImage}>
                            <DownloadIcon />
                        </div>
                    )}
                </DialogTrigger>
                <AnimatePresence>
                    {downloadAlert && <DownloadImageAlert />}
                </AnimatePresence>
            </Dialog>
            
              <Link className = "abolute top-0 h-2048 w-1024 bg-black" href="/6-24">
            <div className="grid justify-items-center h-5/6"onClick={click} >
            {/* <h1 style={{filter: `blur(5px)`}}className="absolute justify-self-center bottom-6 bg-white rounded-3xl p-3 text-transparent">แตะเพื่อไปต่อ</h1> */}

                <h1 className="absolute justify-self-center bottom-7  rounded-3xl p-2 animate-pulse drop-shadow ">แตะเพื่อไปต่อ</h1>
            </div>
            </Link>
            </motion.div>
            
        </div>
        
        
    );
}