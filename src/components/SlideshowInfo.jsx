function SlideshowInfo({ currentData }) {
  return (
    <div className="relative py-16 tablet:py-18 tablet:px-29 desktop:pl-0 desktop:pr-31.5 desktop:pt-27.5 desktop:pb-0 flex flex-col gap-16 desktop:gap-20 -translate-y-4 desktop:translate-y-0">
      <p className="absolute top-0 right-0 tablet:left-0 tablet:right-auto -z-10 font-bold text-[100px] tablet:text-[200px] leading-[100%] tablet:leading-[115%] tablet:tracking-[-0.2px] text-grey-100">{currentData.year}</p>

      <p className="font-bold tracking-base">{currentData.description}</p>
      <a href={currentData.source} className="font-bold text-[9px] leading-[125%] tracking-[2px] uppercase">Go to source</a>
    </div>
  )
}

export default SlideshowInfo;