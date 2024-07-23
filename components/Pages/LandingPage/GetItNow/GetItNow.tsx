import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "../../../../shared/Media"
import Container from "../../../Container"
import GetItNowButton from "./GetItNowButton"

const GetItNowSection = () => (
  <div className="w-full relative relative">
    <Container contentClassName="grid grid-cols-1 xl:grid-cols-10 gap-[5px] md:gap-[50px]">
      <FadeInWhenVisible className="col-span-5 mt-[10px] md:mt-[100px]">
        <Media
          type="image"
          link="/images/globe.svg"
          blurLink="/images/globe.png"
          containerClasses="w-[50%] xl:w-[70%] 2xl:w-[80%] aspect-[521/569] mx-auto"
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible className="flex flex-col p-[10px] col-span-5 mt-[12px] md:mt-[120px]">
        <p className="font-inter_medium text-[22px] md:text-[34px] xl:text-[38px] 2xl:text-[42px] text-purple_3 leading-[100%]">
          Security Concerns in Cryptocurrency Investments
        </p>
        <p className="font-inter_medium text-[22px] md:text-[34px] xl:text-[38px] 2xl:text-[42px] text-purple_3 mt-[3px] md:mt-[30px]">
          Building Trust Safely
        </p>
        <p className="font-inter_regular text-[12px] md:text-[16px] mt-[10px] md:mt-[20px] text-white tracking-[1px]">
          {`Real Assets back 'Maz' token, Mitigating security risks \n for investors.`}
        </p>
        <GetItNowButton />
      </FadeInWhenVisible>
    </Container>
  </div>
)

export default GetItNowSection
