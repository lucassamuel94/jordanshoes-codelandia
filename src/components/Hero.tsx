import { motion } from 'framer-motion'
import Typed from 'react-typed'

export function Hero() {
  return (
    <div className='relative h-[378px] bg-hero bg-fixed bg-cover bg-no-repeat bg-center flex items-center justify-center'>
      <div className='absolute inset-0 w-full h-full bg-black/60 z-0'></div>

      <div className='text-white flex flex-col items-start lg:items-center justify-center gap-3 lg:gap-6 px-5 lg:px-0 lg:max-w-[637px] z-10'>
        <motion.h2
          className='text-3xl lg:text-5xl font-bold'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typed
            strings={['A melhor loja de Jordan']}
            typeSpeed={40}
            backSpeed={40}
            backDelay={10000}
            loop={true}
          />
        </motion.h2>

        <motion.p
          className='text-base lg:text-2xl lg:text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o
          jogador Michael Jordan.
        </motion.p>
      </div>
    </div>
  )
}
