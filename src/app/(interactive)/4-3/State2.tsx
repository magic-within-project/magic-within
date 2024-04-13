import { motion } from "framer-motion";

type Prop = { state: number };

export default function State2({ state }: Prop) {
  if (state == 1) {
    return (
      <div className="h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
          exit={{ opacity: 0, transition: { duration: 3 } }}
          //transition={{}}
        >
          <div className=" grid justify-items-center">
            <h1 className="text-sans mt-96 text-center font-plaphao text-disable">
              &quot;ที่ฉันเป็นอยู่ตอนนี้
            </h1>
            <h1 className="text-sans mt-1 text-center font-plaphao text-disable">
              มันยังไม่พอสำหรับความคาดหวังของคนอื่นแน่เลย&quot;
            </h1>
          </div>
        </motion.div>
      </div>
    );
  }
}
