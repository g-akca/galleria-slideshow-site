import GalleryItem from "./GalleryItem";
import useColumnCount from "../hooks/useColumnCount";
import data from "../data/data.json";
import { useMemo } from "react";

function GallerySection() {
  const columnCount = useColumnCount();

  const columns = useMemo(() => {
    const cols = Array.from({ length: columnCount }, () => []);

    data.forEach((item) => {
      let colIndex;

      if (columnCount === 1) {
        colIndex = 0;
      }
      else if (columnCount === 2) {
        colIndex = item.tabletCol ?? 0;
      }
      else {
        colIndex = item.desktopCol ?? 0;
      }

      cols[colIndex].push(item);
    });

    return cols;
  }, [columnCount]);

  return (
    <section className="flex justify-center gap-10">
      {columns.map((col, i) => (
        <div key={i} className="flex flex-col gap-10 flex-1">
          {col.map(item => (
            <GalleryItem
              key={item.name}
              image={item.images.gallery}
              title={item.name}
              artist={item.artist.name}
              style={{ height: `${item.galleryHeight}px` }}
            />
          ))}
        </div>
      ))}
    </section>
  )
}

export default GallerySection;