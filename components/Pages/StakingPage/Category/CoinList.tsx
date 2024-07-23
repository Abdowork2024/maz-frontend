import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Coin from "./Coin"

const CoinList = () => (
  <FadeInWhenVisible className="grid xm:grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[20px] mt-[40px] ">
    <Coin src="/images/MATIC.svg" name="Polygon" />
    <Coin src="/images/USDT.svg" name="USDT" />
    <Coin src="/images/OP.svg" name="Optimism" />
    <Coin src="/images/USDC.svg" name="USDC" />
    <Coin src="/images/ETH.svg" name="Ethereum" />
    <Coin src="/images/ARB.svg" name="Arbintrum" />
  </FadeInWhenVisible>
)

export default CoinList
