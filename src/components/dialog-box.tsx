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
  delay = 0.5,
  handleClick,
  animationKey,
  boxSize = "l",
  reanimate,
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
  reanimate?: "text" | "textAndCharacter";
}): JSX.Element {
  return (
    <>
      <motion.div
        className="absolute bottom-10 w-full text-start"
        initial={{ opacity: reanimate ? 1 : 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: delay } }}
      >
        {characterImg && (
          <motion.div
            initial={{ opacity: reanimate === "text" ? 1 : 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1, delay: delay },
            }}
          >
            <Image
              src={"/" + characterImg + ".webp"}
              alt={characterImg}
              width={height / 2}
              height={height}
              className={`relative top-8 z-0 mx-[52px] ml-auto ${isCenter ? "mr-auto" : ""}`}
            />
          </motion.div>
        )}
        <div className="flex flex-col space-y-2 px-10">
          <motion.div
            className="text-mw-white"
            initial={{ opacity: reanimate === "text" ? 1 : 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 1, delay: delay },
            }}
          >
            <p>{characterName}</p>
          </motion.div>
          <Link href={nextPage} onClick={handleClick ? handleClick : undefined}>
            <div
              className={`z-10 flex flex-col whitespace-pre-line rounded-2xl bg-white px-6 py-4 
              ${boxSize === "l" && "h-[148px]"}  ${boxSize === "m" && "h-[132px]"}  ${boxSize === "s" && "h-[120px]"}`}
            >
              <motion.p
                key={animationKey}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, delay: delay },
                }}
              >
                {dialog}
              </motion.p>
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
