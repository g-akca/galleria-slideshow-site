import SlideshowHeader from "./SlideshowHeader";

function SlideshowMain({ currentData }) {
  return (
    <div className="grow px-6">
      <SlideshowHeader currentData={currentData} />

      <div className="relative py-16 flex flex-col gap-16 -translate-y-4">
        <p className="absolute top-0 right-0 -z-10 font-bold text-[100px] leading-[100%] text-grey-100">{currentData.year}</p>

        <p className="font-bold tracking-base">{currentData.description}</p>
        <a href={currentData.source} className="font-bold text-[9px] leading-[125%] tracking-[2px] uppercase">Go to source</a>
      </div>
    </div>
  )
}

export default SlideshowMain;