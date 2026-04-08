import SlideshowMain from "./SlideshowMain";
import SlideshowFooter from "./SlideshowFooter";

import data from "../data/data.json";

function Slideshow({ currentIndex }) {
  const currentData = data[currentIndex];

  return (
    <div className="grow">
      <SlideshowMain />
      <SlideshowFooter />
    </div>
  )
}

export default Slideshow;