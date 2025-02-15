import Image from 'next/image'
import { Typography } from '../typography'

const Header = () => {
  return (
    <header className="relative">
      <div className="relative w-full h-[300px] md:h-[550px] lg:h-[700px]">
        <div className="absolute z-20 bg-gradient-to-r from-gray-950/10 to-gray-950/90 w-full h-[300px] md:h-[550px] lg:h-[700px]" />
        <Image src="/header.jpg" alt="Header Image" fill className="object-cover z-0" priority />
      </div>
      <div className="absolute z-30 top-1/2 translate-y-[-50%] right-10 border-[6px] border-amber-400">
        <Image src="/1.jpg" alt="Header Image" width={300} height={580} />
      </div>
      <div className="absolute z-30 top-1/2 translate-y-[-50%] right-[300px] border-[6px] border-amber-400">
        <Image src="/2.jpg" alt="Header Image" width={300} height={580} />
      </div>
      <div className="absolute z-30 top-1/2 translate-y-[-50%] right-[600px] border-[6px] border-amber-400">
        <Image src="/3.jpg" alt="Header Image" width={300} height={580} />
      </div>
      <div className="w-[40vw] absolute top-1/2 left-10 transform -translate-y-1/2">
        <Typography variant="h1" className="h1 text-white text-center font-bold">
          Elevate Your Space With Timeless Elegance
        </Typography>
      </div>
    </header>
  )
}

export default Header
