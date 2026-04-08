import thumbnail from "/assets/starry-night/gallery.jpg";

function GalleryItem() {
  return (
    <div className="relative h-62.5">
      <img
        src={thumbnail}
        alt="Starry Night painting by Vincent Van Gogh"
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 w-full h-42.5 bg-linear-to-b from-transparent to-black/84" />

      <div className="absolute bottom-8 left-8 text-white flex flex-col gap-2">
        <p className="text-[24px] leading-[125%] font-bold">Starry Night</p>
        <p className="text-[13px] leading-[125%] opacity-75">Vincent Van Gogh</p>
      </div>
    </div>
  )
}

export default GalleryItem;