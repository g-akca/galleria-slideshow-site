import backImg from "/assets/shared/icon-back-button.svg";
import nextImg from "/assets/shared/icon-next-button.svg";

function SlideshowFooter({ currentIndex, setCurrentIndex, currentData, dataAmount }) {
  return (
    <footer className="fixed bottom-0 w-screen z-50 bg-white py-4 px-6 flex justify-between items-center border-grey-150 border-t">
      <div className="absolute -top-px left-0 h-px bg-black" style={{ width: `${((currentIndex + 1) / dataAmount) * 100}%` }} />

      <div className="text-black">
        <p className="font-bold tracking-base">{currentData.name}</p>
        <p className="text-[10px] leading-[120%] opacity-75">{currentData.artist.name}</p>
      </div>
      
      <div className="flex gap-6">
        <button type="button" onClick={() => setCurrentIndex(prev => prev - 1)} disabled={currentIndex === 0} className={`${currentIndex === 0 ? "opacity-15 cursor-not-allowed" : ""}`}>
          <img src={backImg} alt="Back button" className="h-4" />
        </button>

        <button type="button" onClick={() => setCurrentIndex(prev => prev + 1)} disabled={currentIndex === dataAmount - 1} className={`${currentIndex === dataAmount - 1 ? "opacity-15 cursor-not-allowed" : ""}`}>
          <img src={nextImg} alt="Next button" className="h-4" />
        </button>
      </div>
    </footer>
  )
}

export default SlideshowFooter;