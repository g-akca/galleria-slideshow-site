import viewIcon from "/assets/shared/icon-view-image.svg";

function SlideshowHeader({ currentData }) {
  return (
    <>
      <div className="relative h-70">
        <img src={currentData.images.hero.small} alt={`${currentData.title} painting by ${currentData.artist.name}`} className="w-full h-full object-cover" />

        <button 
          type="button" 
          className="
            absolute top-4 left-4 bg-black flex gap-4 items-center px-4 py-3.5
            text-white text-[10px] leading-[120%] font-bold tracking-[2px] uppercase
          "
        >
          <img src={viewIcon} alt="View image" />
          <p className="mt-0.5">View image</p>
        </button>
      </div>
      
      <div className="bg-white w-70.5 -mt-14 p-6 relative z-10 flex flex-col gap-2">
        <h2 className="font-bold text-black text-[24px] leading-[125%]">{currentData.name}</h2>
        <p className="text-grey-400 text-[15px] leading-[135%]">{currentData.artist.name}</p>
      </div>

      <img src={currentData.artist.image} alt={currentData.artist.name} className="ml-4 h-16" />
    </>
  )
}

export default SlideshowHeader;