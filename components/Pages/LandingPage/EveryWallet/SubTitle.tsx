import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const SubTitle = () => (
  <FadeInWhenVisible className="flex flex-col justify-center items-center align-center">
    <p className="font-inter_semibold text-[16px] text-yellow_3 leading-[100%]">
      Gateway to the global economy
    </p>
    <p className="font-inter_bold text-[30px] xl:text-[36px] 2xl:text-[42px] text-purple_3 leading-[115%] mt-[20px] text-center">
      Cryptocurrency in <br />
      Every Wallet™
    </p>
  </FadeInWhenVisible>
)

export default SubTitle
