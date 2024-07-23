import Media from "@/shared/Media"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import ListButton from "./listButton"

const EveryItem = ({ data }) => (
  <FadeInWhenVisible className="flex flex-row justify-between xl:flex-col w-full items-start xl:gap-2 gap-[10px] md:gap-[100px] ">
    <Media
      type="image"
      link={data.link}
      blurLink={data.blurLink}
      containerClasses=" mt-[50px] w-[100%] xl:w-[80%] 2xl:w-full aspect-[239/236]"
    />
    <div className="mt-[33px] md:mt-[50px]">
      <p className="font-inter_bold text-[22px] text-purple_3 leading-[100%] mb-4 lg:w-[300%] xl:w-full">
        {`${data.titles}`}
      </p>
      <div
        className="font-inter text-[12px] md:text-[16px] text-white leading-[100%] mt-[10px] md:mt-[25px]
            flex flex-col gap-2 lg:w-[300%] xl:w-full"
      >
        {data.contents.map((content) => (
          <p key={content} className="text-black_3">
            {`${content}`}
          </p>
        ))}
      </div>
      <ListButton />
    </div>
  </FadeInWhenVisible>
)

export default EveryItem
