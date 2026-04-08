import SlideshowMain from "./SlideshowMain";
import SlideshowFooter from "./SlideshowFooter";

import data from "../data/data.json";

function Slideshow({ currentIndex, setCurrentIndex }) {
  const currentData = data[currentIndex] || data[0];
  const dataAmount = data.length;

  return (
    <div className="grow flex flex-col">
      <SlideshowMain />
      <SlideshowFooter currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} currentData={currentData} dataAmount={dataAmount} />
    </div>
  )
}

export default Slideshow;