import Link from "next/link"

const DesktopMenu = () => (
  <div className="flex gap-[40px]">
    <Link href="/wallet">
      <div className="cursor-pointer text-[16px] leading-[30px] text-white">Wallet</div>
    </Link>
    <Link href="/exchange">
      <div className="cursor-pointer text-[16px] leading-[30px] text-white">Exchange</div>
    </Link>
    <Link href="/explorer">
      <div className="cursor-pointer text-[16px] leading-[30px] text-white">Explorer</div>
    </Link>
  </div>
)

export default DesktopMenu
