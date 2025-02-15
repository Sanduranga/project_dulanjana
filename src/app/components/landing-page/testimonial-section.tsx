'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Typography } from '../typography'
import Image from 'next/image'
import { FaArrowRightLong } from 'react-icons/fa6'
import Button from '@/app/shared/components/button'

const Testimonial = () => {
  const data = {
    header: 'Rated & Loved by You',
    text: 'What our customers say about us',
    testimonialCard: [
      {
        id: 1,
        title: 'Great Service',
        text: 'I had a great experience with Furnix. They delivered my furniture on time and the quality was top-notch.',
        author: 'John',
      },
      {
        id: 2,
        title: 'Great Service',
        text: 'I had a great experience with Furnix. They delivered my furniture on time and the quality was top-notch.',
        author: 'John',
      },
      {
        id: 3,
        title: 'Great Service',
        text: 'I had a great experience with Furnix. They delivered my furniture on time and the quality was top-notch.',
        author: 'John',
      },
      {
        id: 4,
        title: 'Great Service',
        text: 'I had a great experience with Furnix. They delivered my furniture on time and the quality was top-notch.',
        author: 'John',
      },
    ],
  }
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(sliderRef.current?.scrollWidth ? -sliderRef.current.offsetWidth : 0)
  }, [])

  const [isScreen, setIsScreen] = useState<null | number>(null)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsScreen(1)
      } else if (window.innerWidth > 1023) {
        setIsScreen(3)
      } else {
        setIsScreen(2)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const noOfTestimonials = data?.testimonialCard.length
  const testimonialWidth = isScreen === 1 ? 390 : isScreen === 2 ? 480 : 520
  const [view, setView] = useState(0)

  return (
    <div className="mt-10 md:mt-14 lg:mt-[76px] overflow-x-hidden bg-slate-100 lg:pt-[95px] pt-10 lg:pb-[111px] pb-20 px-4 md:px-8 lg:px-24 xl:px-32 2xl:px-64">
      <div className="relative">
        <div className="flex flex-col lg:flex-row justify-normal md:justify-between">
          <div className="flex flex-col md:gap-3 gap-1 mb-4 md:mb-0">
            <Typography variant="h3" className="h3 font-bold text-gray-700">
              {data?.header}
            </Typography>
            <Typography className="font-normal text-lg text-gray-400">{data?.text}</Typography>
          </div>
        </div>

        <div ref={sliderRef} className="w-full -mr-2 sm:-mr-6 lg:-mr-28 mt-20 lg:mt-24">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: `${-testimonialWidth * view}px` }}
            transition={{
              delay: 0,
              ease: 'easeInOut',
              duration: 1,
            }}
            className="flex">
            {data?.testimonialCard?.map((card: any, index: number) => (
              <div
                key={card.id}
                className="flex relative lg:ml-auto lg:min-w-[30rem] md:min-w-[27.5rem] min-w-[21.875rem] md:h-auto mr-10 shadow-md bg-white rounded-xl pointer-events-none">
                <div className="absolute left-1/4 translate-x-[-50%] overflow-hidden lg:-top-20 -top-16 border-[6px] border-amber-400 rounded-full">
                  <Image width={80} height={80} src={'/man.jpg'} alt={'testimonial_image'} />
                </div>
                <div className="flex flex-col lg:py-6 pb-4 pt-12 lg:px-8 px-6">
                  <Typography
                    variant="h4"
                    className="text-[28px] leading-[33.6px] font-bold md:mt-4 mt-1 lg:mt-7 text-gray-700">
                    {card.title}
                  </Typography>
                  <Typography
                    className="lg:mt-4 mt-1 font-normal
                   md:text-base text-gray-400 mb-auto leading-relaxed">
                    {card.text}
                  </Typography>
                  <Typography className="font-normal mt-3 md:text-sm text-gray-700">{card.author}</Typography>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div
          onClick={() => {
            noOfTestimonials - 1 === view ? setView(0) : setView(view + 1)
          }}
          className="absolute -bottom-7 right-0 shadow-md">
          <Button variant="primary" size="xxs">
            <FaArrowRightLong />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
