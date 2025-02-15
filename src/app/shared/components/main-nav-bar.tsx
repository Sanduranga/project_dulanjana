import Link from 'next/link'
import Menu from './menu'
import Image from 'next/image'
import SearchBar from './search-bar'
import { GiWoodenChair } from 'react-icons/gi'
import SecondaryNavBar from './secondary-nav-bar'
import Cart from './cart'
import UpperNaVBar from './upper-nav-bar'
// import NavIcons from "./NavIcons";

// const NavIcons = dynamic(() => import('./NavIcons'), { ssr: false })

const MainNavbar = () => {
  return (
    <>
      <UpperNaVBar />
      <div className="h-28 px-4 md:px-8 lg:px-24 xl:px-32 2xl:px-64 flex bg-amber-400">
        {/* MOBILE */}
        {/* <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">FURNIX</div>
        </Link>
        <Menu />
      </div> */}
        {/* BIGGER SCREENS */}
        <div className="hidden md:flex items-center justify-between gap-8 w-full">
          {/* LEFT */}
          <div className="w-1/3 xl:w-1/2 flex-1 items-center gap-12">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="" width={24} height={24} />
              <div className="text-4xl tracking-wide font-bold">FURNIX</div>
            </Link>
          </div>
          <div className="w-2/3 xl:w-1/2 flex-2 items-center justify-between gap-8">
            <SearchBar />
          </div>
          <div className="flex items-center justify-end gap-4 flex-1">
            <GiWoodenChair size={32} />
            <Cart />
          </div>
        </div>
      </div>
      <SecondaryNavBar />
    </>
  )
}

export default MainNavbar
