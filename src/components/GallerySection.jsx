import GalleryItem from "./GalleryItem";
import useColumnCount from "../hooks/useColumnCount";
import data from "../data/data.json";
import { useMemo } from "react";
import { motion } from "framer-motion";

function GallerySection({ startShow }) {
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
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GalleryItem
                image={item.images.gallery}
                title={item.name}
                artist={item.artist.name}
                style={{ height: `${item.galleryHeight}px` }}
                handleClick={() => startShow(data.findIndex(el => el.name === item.name))}
              />
            </motion.div>
          ))}
        </div>
      ))}
    </section>
  )
}

export default GallerySection;