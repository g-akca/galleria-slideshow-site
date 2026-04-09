import SlideshowHeader from "./SlideshowHeader";
import SlideshowInfo from "./SlideshowInfo";
import SlideshowFooter from "./SlideshowFooter";

import data from "../data/data.json";

import { motion, AnimatePresence } from "framer-motion";

function Slideshow({ currentIndex, setCurrentIndex }) {
  const currentData = data[currentIndex] || data[0];
  const dataAmount = data.length;

  return (
    <div className="grow flex flex-col pb-16 desktop:pb-48 overflow-x-hidden">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIndex} 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }} 
          className="grow px-6 tablet:px-10 flex flex-col tablet:gap-16 desktop:gap-8 desktop:flex-row desktop:justify-between"
        >
          <SlideshowHeader currentData={currentData} />
          <SlideshowInfo currentData={currentData} />
        </motion.div>
      </AnimatePresence>

      <SlideshowFooter currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} currentData={currentData} dataAmount={dataAmount} />
    </div>
  )
}

export default Slideshow;