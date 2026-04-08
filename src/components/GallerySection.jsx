import GalleryItem from "./GalleryItem";

import data from "../data/data.json";

function GallerySection() {
  return (
    <section className="flex flex-col gap-10">
      {data.map(item => (
        <GalleryItem 
          key={item.name}
          image={item.images.gallery}
          title={item.name}
          artist={item.artist.name}
          style={{ height: `${item.galleryHeight}px` }}
        />
      ))}
    </section>
  )
}

export default GallerySection;