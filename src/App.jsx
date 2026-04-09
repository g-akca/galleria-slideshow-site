import Header from "./components/Header";
import GallerySection from "./components/GallerySection";
import Slideshow from "./components/Slideshow";

import { useState } from "react";

function App() {
  const [showStarted, setShowStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  function startShow(index = 0) {
    if (typeof index !== "number") index = 0;
    
    setCurrentIndex(index);
    setShowStarted(true);
  }

  function stopShow() {
    setShowStarted(false);
    setCurrentIndex(0);
  }

  return (
    <div className="text-base leading-base text-grey-400 min-h-screen flex flex-col">
      <Header showStarted={showStarted} startShow={startShow} stopShow={stopShow} />

      {showStarted ? (
        <main className="pt-6 tablet:pt-10 desktop:pt-24 grow flex flex-col">
          <Slideshow currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
        </main>
      ) : (
        <main className="px-8 py-6 tablet:px-13.5 tablet:py-10.5 desktop:p-10">
          <GallerySection startShow={startShow} />
        </main>
      )}
    </div>
  )
}

export default App;