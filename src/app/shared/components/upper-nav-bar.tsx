import { Typography } from '@/app/components/typography'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

const UpperNaVBar = () => {
  return (
    <div className="hidden md:flex justify-end h-8 px-4 md:px-8 lg:px-24 xl:px-32 2xl:px-64 w-full bg-gray-400">
      <div className="flex items-center gap-2 font-bold">
        <span>
          <FaWhatsapp />
        </span>
        <Typography variant="h6">0771223555</Typography>
      </div>
    </div>
  )
}

export default UpperNaVBar
