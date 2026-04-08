import SlideshowHeader from "./SlideshowHeader";

function SlideshowMain({ currentData }) {
  return (
    <div className="grow px-6">
      <SlideshowHeader currentData={currentData} />
    </div>
  )
}

export default SlideshowMain;