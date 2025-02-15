'use client'
import Image from 'next/image'
import { Typography } from '../typography'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Header = () => {
  const images = [
    { src: '/1.jpg', right: '50px', delay: 0, duration: 0.8 },
    { src: '/2.jpg', right: '230px', delay: 0.4, duration: 1.2 },
    { src: '/3.jpg', right: '430px', delay: 0.8, duration: 1.6 },
  ]

  const [isScreen, setIsScreen] = useState<null | number>(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1400) {
        setIsScreen(1)
      } else if (window.innerWidth > 1023) {
        setIsScreen(2)
      } else if (window.innerWidth > 768) {
        setIsScreen(3)
      } else {
        setIsScreen(4)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="relative">
      <div className="relative w-full h-[200px] md:h-[350px] lg:h-[500px] 2xl:h-[700px]">
        <div className="absolute z-20 bg-gradient-to-r from-gray-950/10 to-gray-950/90 w-full h-[200px] md:h-[350px] lg:h-[500px] 2xl:h-[700px]" />
        <Image src="/header.jpg" alt="Header Image" fill className="object-cover z-0" priority />
      </div>

      <div className="absolute top-0 left-0 w-full h-full z-20 grid grid-cols-2  content-center lg:pr-16 md:pr-8 pr-2">
        <div className="grid justify-items-center content-center">
          <Typography variant="h1" className="lg:h1 md:h2 h3 text-white z-0 text-center font-bold">
            Elevate Your Space With Timeless Elegance
          </Typography>
        </div>

        <div className="grid grid-cols-3">
          {images.map((img, index) => (
            <motion.div
              key={img.src}
              className="z-30 "
              style={{ rotate: '6deg' }}
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: -15 * index }}
              transition={{ duration: img.duration, delay: img.delay }}>
              <Image
                src={img.src}
                alt={`Header Image ${index + 1}`}
                width={isScreen === 1 ? 300 : isScreen === 2 ? 200 : isScreen === 3 ? 120 : 80}
                height={380}
                className="border-[6px] border-amber-400"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
