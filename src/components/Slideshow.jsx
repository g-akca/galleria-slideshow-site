import SlideshowHeader from "./SlideshowHeader";
import SlideshowInfo from "./SlideshowInfo";
import SlideshowFooter from "./SlideshowFooter";

import data from "../data/data.json";

function Slideshow({ currentIndex, setCurrentIndex }) {
  const currentData = data[currentIndex] || data[0];
  const dataAmount = data.length;

  return (
    <div className="grow flex flex-col pb-16">
      <div className="grow px-6 tablet:px-10 tablet:flex tablet:flex-col tablet:gap-16">
        <SlideshowHeader currentData={currentData} />
        <SlideshowInfo currentData={currentData} />
      </div>

      <SlideshowFooter currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} currentData={currentData} dataAmount={dataAmount} />
    </div>
  )
}

export default Slideshow;