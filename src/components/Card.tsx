import { motion } from 'framer-motion'

export function Card({ picture }: { picture: string }) {
  return (
    <motion.div className='bg-white-200 flex items-center justify-center w-full aspect-square'>
      <motion.img
        src={`/shoes/${picture}.png`}
        initial={{ scale: 1, opacity: 0.8 }}
        whileHover={{
          opacity: 1,
          rotate: [null, -5],
          scale: [null, 1.2, 1.15],
          transition: { duration: 0.35 },
        }}
        exit={{ scale: 1 }}
      />
    </motion.div>
  )
}
