import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "../../../../shared/Media"
import Container from "../../../Container"
import GetInButton from "./GetInButton"

const PowerWallet = () => (
  <div className="w-full relative mt-[80px] md:mt-[100px] relative p-[10px]">
    <Container contentClassName="grid grid-cols-5 2xl:grid-cols-10 gap-[50px]">
      <FadeInWhenVisible className="flex flex-col col-span-5 mt-[120px] mx-auto">
        <p className="font-inter_semibold text-[22px] md:text-[16px] text-yellow_3 mb-[10px] leading-[100%]">
          Your gatway to the global <br />
          economy
        </p>
        <p className="font-inter_bold text-[28px] mt-[10px] md:text-[30px] xl:text-[36px] 2xl:text-[42px] text-purple_3 leading-[100%]">
          The Easiest and Most <br /> Powerful Crypto <br /> Wallet
        </p>

        <p className="text-inter text-[12px] md:text-[20px] mt-[20px] text-black_3">
          Bitcoin uses peer-to-peer technology to operate with
          <br />
          no central authority or banks; managing transactions
          <br />
          and the issuing of bitcoins is carried out collectively by
          <br />
          the network.
        </p>
        <GetInButton />
      </FadeInWhenVisible>
      <FadeInWhenVisible className="col-span-5 md:mt-[50px]">
        <Media
          type="image"
          link="/images/phone.svg"
          blurLink="/images/phone.png"
          containerClasses="w-[80%] xl:w-[50%] 2xl:w-[80%] aspect-[521/569] mx-auto"
        />
      </FadeInWhenVisible>
    </Container>
  </div>
)

export default PowerWallet
