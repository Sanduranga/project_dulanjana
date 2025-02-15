'use client'
import { Typography } from '@/app/components/typography'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import Button from './button'

const CategoryList = () => {
  const cats = [
    { _id: 1, slug: 'aaaaa', media: '', name: 'sanduranga', description: 'This is a description' },
    { _id: 2, slug: 'ahhua', media: '', name: 'sandur', description: 'This is a description' },
    { _id: 3, slug: 'xxxaa', media: '', name: 'swsfdanga', description: 'This is a description' },
    { _id: 4, slug: 'aaaaa', media: '', name: 'sanduranga', description: 'This is a description' },
    { _id: 5, slug: 'ahhua', media: '', name: 'sandur', description: 'This is a description' },
    { _id: 6, slug: 'xxxaa', media: '', name: 'swsfdanga', description: 'This is a description' },
    { _id: 7, slug: 'aaaaa', media: '', name: 'sanduranga', description: 'This is a description' },
    { _id: 8, slug: 'ahhua', media: '', name: 'sandur', description: 'This is a description' },
    { _id: 9, slug: 'xxxaa', media: '', name: 'swsfdanga', description: 'This is a description' },
    { _id: 10, slug: 'aaaaa', media: '', name: 'sanduranga', description: 'This is a description' },
    { _id: 11, slug: 'ahhua', media: '', name: 'sandur', description: 'This is a description' },
    { _id: 12, slug: 'xxxaa', media: '', name: 'swsfdanga', description: 'This is a description' },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)

  // Handle horizontal scroll
  useEffect(() => {
    const handleWheelScroll = (event: WheelEvent) => {
      if (scrollRef.current && scrollRef.current.contains(event.target as Node)) {
        event.preventDefault()
        scrollRef.current.scrollLeft += event.deltaY
      }
    }
    window.addEventListener('wheel', handleWheelScroll, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheelScroll)
    }
  }, [])

  return (
    <div className="px-4 mt-16">
      <Typography variant="h2" className="h3 font-semibold px-4 md:px-8 lg:px-24 xl:px-32 2xl:px-64">
        Categories
      </Typography>
      {/* Scrollable Container */}
      <div ref={scrollRef} className="flex gap-4 md:gap-8 mt-16 overflow-x-auto scrollbar-hide bg-gray-100 py-8">
        {cats.map((item) => (
          <Link
            href={`/list?cat=${item.slug}`}
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
            key={item._id}>
            <div className="relative bg-slate-100 w-full h-96">
              <Image src={'/chair.jpg'} alt="" fill sizes="20vw" className="object-cover" />
            </div>
            <div className="mx-auto flex flex-col items-center">
              <Typography variant="h4" className="mt-5 font-light text-xl tracking-wide">
                {item.name}
              </Typography>
              <Typography variant="h4" className="mt-2 font-light text-md tracking-wide">
                {item.description}
              </Typography>
              <div className="flex justify-center">
                <Button variant="outlined" color="primary" className="mt-5">
                  Add to cart
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
