import Link from 'next/link'

const SecondaryNavBar = () => {
  return (
    <div className="hidden md:flex justify-center h-14 px-4 md:px-8 lg:px-24 xl:px-32 2xl:px-64 w-full bg-white">
      <div className="flex items-center gap-28 font-semibold">
        <Link href="/">Homepage</Link>
        <div className="flex gap-8">
          <Link href="/">Bed room</Link>
          <Link href="/">Dining</Link>
          <Link href="/">Living</Link>
        </div>
      </div>
    </div>
  )
}

export default SecondaryNavBar
