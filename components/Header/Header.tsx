import { useMediaQuery } from "usehooks-ts"
import useIsMobile from "@/hooks/useIsMobile"
import AuthButtons from "../AuthButtons"
import DesktopMenu from "../DesktopMenu"
import Logo from "./Logo"
import MobileMenu from "../MobileMenu"

const Header = () => {
  const isMacbook = useMediaQuery("(max-width: 1060px)")
  const isMobile = useIsMobile()

  return (
    <nav
      className="fixed top-0 z-50 w-screen
        text-black bg-pink_7 
        h-auto md:h-[120px]
        flex justify-between items-end
        md:py-[25px] md:px-[75px]
        py-4 px-[20px]"
      id="header_nav_bar"
    >
      <Logo />
      <div className="flex gap-[80px] items-center">
        {isMacbook ? <MobileMenu /> : <DesktopMenu />}
        {!isMobile && <AuthButtons />}
      </div>
    </nav>
  )
}

export default Header
