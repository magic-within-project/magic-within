"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { toJpeg } from "html-to-image";
import UAParser from "ua-parser-js";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import ConfirmPopup from "~/components/confirmPopup";
import DownloadImageAlert from "~/components/downloadImageAlert";
import { DownloadIcon } from "~/components/icons/downloadIcon";
import Image from "next/image";

export default function Page() {
  const [wandColor, setWandColor] = useState<string | null>(null);
  const [wandName, setWandName] = useState<string | null>(null);
  const [textAbove, setTextAbove] = useState<string | null>(null);
  const [textBelow, setTextBelow] = useState<string | null>(null);
  const [downloadAlert, setDownloadAlert] = useState(false);
  const [userAgentData, setUserAgentData] = useState<string>();

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
    const wand = document.getElementById("wand");
    if (!wand) return;

    const dataUrl = await convertImage(wand);

    const link = document.createElement("a");
    link.download = "wand from MagicWithin.jpeg";
    link.href = dataUrl;
    link.click();

    setDownloadAlert(true);
    window.setTimeout(() => {
      setDownloadAlert(false);
    }, 3000);
  };

  const shareImage = async () => {
    const wand = document.getElementById("wand");
    if (!wand) return;

    const dataUrl = await convertImage(wand);

    const dataBlob = await (await fetch(dataUrl)).blob();
    if (!dataBlob) return;

    const image = new File([dataBlob], "Wand from MagicWithin.png", {
      type: dataBlob.type,
    });
    const shareData: ShareData = {
      title: "MagicWithin wand",
      text: "Your Wand",
      files: [image],
    };

    try {
      await navigator.share(shareData);
      console.log("Shared successfully");
    } catch (err) {
      console.log(err);
    }

    setDownloadAlert(true);
    window.setTimeout(() => {
      setDownloadAlert(false);
    }, 3000);
  };

  useEffect(() => {
    const parser = new UAParser(navigator.userAgent);
    setUserAgentData(parser.getDevice().model);

    const sliderBefore = localStorage.getItem("beforeSelfRate");
    const sliderAfter = localStorage.getItem("afterSelfRate");
    const score =
      sliderBefore && sliderAfter
        ? Math.max(
            -9,
            Math.min(9, parseInt(sliderAfter) - parseInt(sliderBefore)),
          )
        : Math.floor(Math.random() * 18) - 9;

    switch (score) {
      case 1:
        setWandColor("pink");
        setWandName("คทาพลังใจสีชมพู");
        setTextAbove(
          "สีชมพู เป็นสีแห่งการเริ่มต้น เหมือนกับเด็กทารกเนื้อตัวสีชมพูที่ลืมตาดูโลก พร้อมจะเริ่มต้นชีวิตที่สดใส",
        );
        setTextBelow(
          "เราจึงขอมอบคทาพลังใจสีชมพูนี้ให้กับคุณ เพื่อเป็นสัญลักษณ์แห่งการเริ่มต้น เราอยากให้คุณรู้ว่าคุณมีโอกาสเริ่มใหม่ เหมือนกับเด็กทารกได้เสมอ",
        );
        break;
      case 2:
        setWandColor("blue");
        setWandName("คทาพลังใจสีฟ้า");
        setTextAbove(
          "สีฟ้า หมายถึงความสบายใจ และพลังงานอันเต็มเปี่ยม เป็นสีที่เมื่อเงยหน้าขึ้นไปเมื่อไหร่ก็จะเห็นเสมอ",
        );
        setTextBelow(
          "เราขอมอบคทาพลังใจสีฟ้า ที่เป็นตัวแทนของความสบายใจนี้ไว้ เพื่อให้คุณรู้ว่า ไม่ว่าจะเกิดอะไรขึ้น เพียงคุณมองขึ้นไป ท้องฟ้าจะคอยอยู่กับคุณ",
        );
        break;
      case 3:
        setWandColor("green");
        setWandName("คทาพลังใจสีเขียว");
        setTextAbove(
          "เราขอมอบคทาพลังใจสีเขียวให้กับคุณ เพื่อให้คุณรู้สึกถึงความเป็นอิสระและความสงบร่มเย็น เหมือนเดินเข้าไปในสวนที่มีต้นไม้ ได้รับกลิ่นหอมของดินที่ชุ่มน้ำ พร้อมมอบความรู้สึกดี ๆ ให้กับคุณเสมอ",
        );
        setTextBelow(
          "ไม่ว่าคุณมองมาที่คทานี้กี่ครั้ง ความรู้สึกดี ๆ นี้จะยังคงอยู่ไม่เปลี่ยนแปลง",
        );
        break;
      case 4:
      case 5:
      case 6:
        setWandColor("orange");
        setWandName("คทาพลังใจสีส้ม");
        setTextAbove(
          "สีส้ม หมายถึงความเบิกบานและรื่นเริง คุณจะรู้ได้ว่าอากาศในวันนั้นจะสดใส เมื่อได้เห็นแสงสีส้มของรุ่งอรุณในยามเช้า",
        );
        setTextBelow(
          "เราขอมอบคทาพลังใจสีส้ม ให้คุณมีวันที่สดใสและเบิกบานเหมือนกับแสงอาทิตย์ตอนเริ่มวันนะ",
        );
        break;
      case 7:
      case 8:
      case 9:
        setWandColor("gold");
        setWandName("ไม้คทาสีทองแห่งเกียรติยศ");
        setTextAbove(
          "นี่คือชัยชนะของเธอนะ เวทมนตร์ในตัวคุณวิเศษมาก ขอให้ต่อจากนี้คุณภูมิใจในความสามารถของตนเองเยอะ ๆ นะ",
        );
        setTextBelow("");
        break;
      default:
        setWandColor("white");
        setWandName("คทาพลังใจสีขาว");
        setTextAbove(
          "สีขาว เป็นสีที่สว่างที่สุด เหมือนกับแสงแห่งความหวัง ที่รออยู่ปลายทางข้างหน้า",
        );
        setTextBelow(
          "เราขอมอบคทาพลังใจสีขาวนี้ให้กับคุณ เพื่อให้คุณรู้ว่าคุณมีความหวังอันแสนสว่าง ที่รอสีอื่น ๆ มาแต่งแต้ม และเติมเต็มหัวใจของคุณอยู่นะ",
        );
    }
  }, []);

  return (
    <main className="flex justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <div id="wand">
            {wandColor && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, delay: 0.5 },
                }}
                className="flex flex-col items-center text-center"
              >
                <Image
                  src={"/wands/wand-" + wandColor + ".webp"}
                  alt="MagicWithin wand"
                  height={2000}
                  width={2000}
                  className="h-screen overflow-y-hidden object-cover"
                />

                <p className="absolute top-[15%] font-bold">{wandName}</p>
                <div className="absolute top-[57%] flex w-3/4 flex-col gap-6">
                  <p>{textAbove}</p>
                  <p>{textBelow}</p>
                </div>
              </motion.div>
            )}
          </div>
        </DialogTrigger>
        <ConfirmPopup href="/7-5" confirmText="ยืนยันเพื่อไปต่อ" />
      </Dialog>
      <div className="absolute top-[86%] z-10">
        <Dialog>
          <DialogTrigger asChild>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, delay: 0.5 },
              }}
            >
              <button
                onClick={
                  userAgentData === "iPhone" ? shareImage : downloadImage
                }
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white"
              >
                <DownloadIcon />
              </button>
            </motion.div>
          </DialogTrigger>
          <AnimatePresence>
            {downloadAlert && <DownloadImageAlert />}
          </AnimatePresence>
        </Dialog>
      </div>
    </main>
  );
}
