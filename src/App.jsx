import Header from "./components/Header";
import GallerySection from "./components/GallerySection";
import Slideshow from "./components/Slideshow";

import { useState } from "react";

function App() {
  const [showStarted, setShowStarted] = useState(false);

  return (
    <div className="text-base leading-base text-grey-400">
      <Header />

      {showStarted ? (
        <main className="pt-6 tablet:pt-10 desktop:pt-24">
          <Slideshow setShowStarted={setShowStarted} />
        </main>
      ) : (
        <main className="px-8 py-6 tablet:px-13.5 tablet:py-10.5 desktop:p-10">
          <GallerySection setShowStarted={setShowStarted} />
        </main>
      )}
    </div>
  )
}

export default App;