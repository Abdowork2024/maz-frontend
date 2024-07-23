import LoadButton from "./LoadButton"
import UnderlineText from "./UnderlineText"

const LoadMore = () => (
  <div>
    <div className="font-inter_bold text-[40px] md:text-[42px] text-purple_3 leading-[100%] mb-[30px] md:mb-5">
      <UnderlineText text="We make" className="border-purple_3" />
      <UnderlineText text="crypto easy." className="border-purple_3" />
    </div>
    <div
      className="font-inter text-[12px] md:text-[16px] text-white leading-[100%]
            flex flex-col gap-2 mt-[30px] md:mt-[40px]"
    >
      <UnderlineText
        text="Specific cryptocurrencies work and get a bit of"
        className="border-white !border-b-[1px]"
      />
      <UnderlineText
        text="crypto to try out for yourself. Here are a"
        className="border-white !border-b-[1px]"
      />
      <UnderlineText
        text="few reasons why you should choose besnik"
        className="border-white !border-b-[1px]"
      />
      <UnderlineText text="crypto" className="border-white !border-b-[1px]" />
    </div>
    <LoadButton />
  </div>
)

export default LoadMore
