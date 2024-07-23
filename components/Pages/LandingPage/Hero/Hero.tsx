import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "../../../../shared/Media"
import Container from "../../../Container"
import TryNowButton from "./TryNowButton/TryNowButton"

const Hero = () => (
  <div
    className="w-full h-[250px] md:h-[758px] 
      bg-cover mt-[100px] md:mt-[120px] relative relative"
  >
    <FadeInWhenVisible className="!absolute !left-[50%] !translate-x-[-50%] w-[80%]">
      <Media
        type="image"
        link="/images/hero_bg.svg"
        blurLink="/images/hero_bg.svg"
        containerClasses="w-full aspect-[1453/967] mx-auto"
      />
    </FadeInWhenVisible>
    <Container containerClassName="pt-[5px] md:pt-[30px]">
      <FadeInWhenVisible>
        <p className="text-center font-redhat font-bold text-[22px] md:text-[30px] xl:text-[35px] 2xl:text-[40px] w-full text-white sm:leading-[10px] md:leading-[45px]">
          {`Unveiling 'Maz' Token: A New Frontier in Real Asset-Backed Cryptocurrency`}
        </p>
      </FadeInWhenVisible>
      <p className="font-inter text-[#320B0B] text-[6px] md:text-[18px] text-center">
        {`From Real Estate to Café Innovation, Ride the 'Maz' Wave`}
      </p>
    </Container>
    <TryNowButton />
  </div>
)

export default Hero
