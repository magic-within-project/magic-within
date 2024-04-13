import { motion } from "framer-motion";
import Link from "next/link";

type Prop = { state: number };

export default function State3({ state }: Prop) {
  if (state == 2) {
    return (
      <Link href="/4-4">
        <div className="h-screen">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            exit={{ opacity: 0, transition: { duration: 3 } }}
            //transition={{}}
          >
            <div className=" grid justify-items-center ">
              <h1 className="text-sans mt-96 text-center font-plaphao text-disable">
                &quot;ฉันว่าฉันยังเก่งไม่พอ&quot;
              </h1>
            </div>
          </motion.div>
        </div>
      </Link>
    );
  }
}
