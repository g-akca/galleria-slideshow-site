function GalleryItem({ image, title, artist, className }) {
  return (
    <div className={`relative ${className}`}>
      <img
        src={image}
        alt={`${title} painting by ${artist}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 w-full h-42.5 bg-linear-to-b from-transparent to-black/84 text-white p-8 flex flex-col justify-end gap-2">
        <p className="text-[24px] leading-[125%] font-bold">{title}</p>
        <p className="text-[13px] leading-[125%] opacity-75">{artist}</p>
      </div>
    </div>
  )
}

export default GalleryItem;