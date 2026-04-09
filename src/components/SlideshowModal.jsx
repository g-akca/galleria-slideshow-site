function SlideshowModal({ image, name, closeModal }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center px-6 tablet:px-12">
      <div className="flex flex-col items-center gap-6 tablet:gap-8 max-h-[90vh]">
        <button
          onClick={closeModal}
          className="text-white font-bold tracking-base uppercase self-end cursor-pointer transition-all hover:opacity-25"
        >
          Close
        </button>

        <img src={image} alt={name} className="object-cover shrink min-h-0" />
      </div>
    </div>
  )
}

export default SlideshowModal;