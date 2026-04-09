import { useState } from "react";
import viewIcon from "/assets/shared/icon-view-image.svg";

function SlideshowHeader({ currentData }) {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <div className="relative tablet:w-172 desktop:w-212 tablet:self-center desktop:self-start desktop:shrink-0">
        <div className="relative h-70 tablet:h-140">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={currentData.images.hero.large}
            />
            <img
              src={currentData.images.hero.small}
              alt={`${currentData.title} painting by ${currentData.artist.name}`}
              className="w-full tablet:w-118.75 h-full object-cover"
            />
          </picture>

          <button 
            type="button" 
            onClick={() => setModalActive(true)} 
            className="
              absolute top-4 tablet:top-auto tablet:bottom-4 left-4 bg-black flex gap-4 items-center px-4 py-3.5
              text-white text-[10px] leading-[120%] font-bold tracking-[2px] uppercase
            "
          >
            <img src={viewIcon} alt="View image" />
            <p className="mt-0.5">View image</p>
          </button>
        </div>
        
        <div className="flex flex-col items-start -mt-14 tablet:mt-0 relative tablet:absolute tablet:top-0 tablet:right-0 z-10">
          <div className="bg-white w-70.5 tablet:w-111.25 p-6 tablet:pt-0 tablet:pr-0 tablet:pl-16 tablet:pb-16 flex flex-col gap-2 tablet:gap-6">
            <h2 className="font-bold text-black text-[24px] tablet:text-[56px] leading-[125%] tablet:leading-[115%] w-4/5">{currentData.name}</h2>
            <p className="text-grey-400 text-[15px] leading-[135%]">{currentData.artist.name}</p>
          </div>

          <img src={currentData.artist.image} alt={currentData.artist.name} className="h-16 tablet:h-32 ml-4 tablet:ml-65 desktop:absolute desktop:ml-24 desktop:mt-124" />
        </div>
      </div>

      {modalActive && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center px-6 tablet:px-12">
          <div className="flex flex-col items-center gap-6 tablet:gap-8 max-h-[90vh]">
            <button
              onClick={() => setModalActive(false)}
              className="text-white font-bold tracking-base uppercase self-end"
            >
              Close
            </button>

            <img src={currentData.images.gallery} alt={currentData.name} className="object-cover shrink min-h-0" />
          </div>
        </div>
      )}
    </>
  )
}

export default SlideshowHeader;