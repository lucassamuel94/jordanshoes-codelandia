import { Card } from '.'
import { motion } from 'framer-motion'

export function ListShoes() {
  const allShoes = [
    {
      id: 1,
      picture: '1',
    },
    {
      id: 2,
      picture: '2',
    },
    {
      id: 3,
      picture: '3',
    },
    {
      id: 4,
      picture: '4',
    },
    {
      id: 5,
      picture: '5',
    },
    {
      id: 6,
      picture: '6',
    },
    {
      id: 7,
      picture: '7',
    },
    {
      id: 8,
      picture: '8',
    },
  ]

  const animationMotion = {
    initial: { opacity: 0, y: -30 },
    whileInView: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  }

  return (
    <section className='py-12 md:py-16 lg:py-24 space-y-14 container'>
      <header className='text-center space-y-1 lg:space-y-4'>
        <motion.h3
          className='font-semibold text-2xl lg:text-3xl text-black'
          {...animationMotion}
          transition={{ duration: 0.5 }}
        >
          Destaques
        </motion.h3>
        <motion.p
          className='text-base lg:text-xl'
          {...animationMotion}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado.
        </motion.p>
      </header>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-5'>
        {allShoes.map((e) => (
          <Card picture={e.picture} key={e.id} />
        ))}
      </div>
    </section>
  )
}
