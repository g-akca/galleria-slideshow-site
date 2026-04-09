import backImg from "/assets/shared/icon-back-button.svg";
import nextImg from "/assets/shared/icon-next-button.svg";

import { motion, AnimatePresence } from "framer-motion";

function SlideshowFooter({ currentIndex, setCurrentIndex, currentData, dataAmount }) {
  return (
    <footer className="fixed bottom-0 w-screen z-40 bg-white py-4 tablet:py-6 px-6 tablet:px-10 flex justify-between items-center border-grey-150 border-t">
      <div className="absolute -top-px left-0 h-px bg-black transition-all duration-900" style={{ width: `${((currentIndex + 1) / dataAmount) * 100}%` }} />

      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIndex} 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }} 
          className="text-black flex flex-col tablet:gap-2"
        >
          <p className="font-bold tracking-base tablet:tracking-0 tablet:text-[18px] tablet:leading-[125%]">{currentData.name}</p>
          <p className="text-[10px] tablet:text-[13px] leading-[120%] tablet:leading-[125%] opacity-75">{currentData.artist.name}</p>
        </motion.div>
      </AnimatePresence>
      
      <div className="flex gap-6 tablet:gap-10">
        <button type="button" onClick={() => setCurrentIndex(prev => prev - 1)} disabled={currentIndex === 0} className={`${currentIndex === 0 ? "opacity-15 cursor-not-allowed" : "cursor-pointer transition-all hover:opacity-15"}`}>
          <img src={backImg} alt="Back button" className="h-4 tablet:h-6" />
        </button>

        <button type="button" onClick={() => setCurrentIndex(prev => prev + 1)} disabled={currentIndex === dataAmount - 1} className={`${currentIndex === dataAmount - 1 ? "opacity-15 cursor-not-allowed" : "cursor-pointer transition-all hover:opacity-15"}`}>
          <img src={nextImg} alt="Next button" className="h-4 tablet:h-6" />
        </button>
      </div>
    </footer>
  )
}

export default SlideshowFooter;