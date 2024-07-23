import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "../../../../shared/Media"
import UnderlineText from "./UnderlineText"

const EasyItem = ({ data }) => (
  <FadeInWhenVisible className="flex items-start gap-2 mx-auto mb-[5px] md:mb-[50px]">
    <Media
      type="image"
      link={data.link}
      blurLink={data.blurLink}
      containerClasses="w-[20px] md:w-[20px] mt-[10px] aspect-square"
    />
    <div>
      <div className="font-inter_bold text-[16px] md:text-[22px] text-purple_3 leading-[100%] mb- md:mb-4 ">
        {data.titles.map((title) => (
          <UnderlineText key={title} className="border-purple_3" text={title} />
        ))}
      </div>
      <div
        className="font-inter text-[14px] md:text-[16px] text-white leading-[100%]
            flex flex-col gap-2 mt-[10px]"
      >
        {data.contents.map((content) => (
          <UnderlineText key={content} className="border-white !border-b-[1px]" text={content} />
        ))}
      </div>
    </div>
  </FadeInWhenVisible>
)

export default EasyItem
