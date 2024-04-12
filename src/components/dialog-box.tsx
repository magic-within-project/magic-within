import { motion } from "framer-motion";
import { SortDownIcon } from "./icons/sort-down";
import Link from "next/link";
import Image from "next/image";

export function DialogBox({
  characterName,
  dialog,
  nextPage,
  characterImg,
  isCenter = false,
  height = 356,
  delay = 1.5,
  handleClick,
  animationKey,
  boxSize = "l",
}: {
  characterName: string;
  dialog: string;
  nextPage: string;
  characterImg?: "heart" | "director" | "teacher";
  isCenter?: boolean;
  height?: number;
  delay?: number;
  handleClick?: () => void;
  animationKey?: number;
  boxSize?: "s" | "m" | "l";
}): JSX.Element {
  return (
    <>
      <motion.div
        key={animationKey}
        className="absolute bottom-10 w-full text-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: delay } }}
      >
        {characterImg && (
          <Image
            src={"/" + characterImg + ".webp"}
            alt={characterImg}
            width={height / 2}
            height={height}
            className={`relative top-8 z-0 mx-[52px] ml-auto ${isCenter ? "mr-auto" : ""}`}
          />
        )}
        <div className="top-8 flex flex-col space-y-2 px-10">
          <div className=" text-mw-white">
            <p>{characterName}</p>
          </div>
          <Link href={nextPage} onClick={handleClick ? handleClick : () => {}}>
            <div
              className={`z-10 flex flex-col whitespace-pre-line rounded-2xl bg-white px-6 py-4 
              ${boxSize === "l" && "h-[148px]"}  ${boxSize === "m" && "h-[132px]"}  ${boxSize === "s" && "h-[120px]"}`}
            >
              <p>{dialog}</p>
              <div className="ml-auto mt-auto">
                <SortDownIcon />
              </div>
            </div>
          </Link>
        </div>
      </motion.div>
    </>
  );
}
