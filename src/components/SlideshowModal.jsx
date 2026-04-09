import { motion } from "framer-motion"

function SlideshowModal({ image, name, closeModal }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center px-6 tablet:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="flex flex-col items-center gap-6 tablet:gap-8 max-h-[90vh]"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={closeModal}
          className="text-white font-bold tracking-base uppercase self-end cursor-pointer transition-all hover:opacity-25"
        >
          Close
        </button>

        <motion.img
          src={image}
          alt={name}
          className="object-cover shrink min-h-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        />
      </motion.div>
    </motion.div>
  )
}

export default SlideshowModal;