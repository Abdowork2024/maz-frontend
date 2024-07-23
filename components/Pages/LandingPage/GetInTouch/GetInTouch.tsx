import Container from "@/components/Container"
import Media from "@/shared/Media"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import SendButton from "./SendButton"

const GetInTouch = () => (
  <div className="w-full relative mt-[150px] relative">
    <Container contentClassName="w-full flex flex-col justify-center items-center gap-[30px] md:gap-[80px]">
      <FadeInWhenVisible className="w-full flex jsutify-center">
        <p className="font-inter_bold text-[30px] xl:text-[36px] 2xl:text-[42px] mx-auto text-purple_3 leading-[100%]">
          Get in touch
        </p>
      </FadeInWhenVisible>
      <FadeInWhenVisible className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="col-sapn-1 flex flex-col items-end gap-[20px] items-center mt-[30px]">
          <input
            type="text"
            className="w-full h-[30px] md:w-[300px] xl:w-[400px] 2xl:w-[462px] xl-[50px] 2xl:h-[55px] 
            rounded-full bg-purple_3_opacity p-[20px] focus:outline-none
            placeholder:text-[#5B46F6] !text-white"
            placeholder="Your Name"
          />
          <input
            type="text"
            className="w-full h-[30px] md:w-[300px] xl:w-[400px] 2xl:w-[462px] xl-[50px] 2xl:h-[55px] 
            rounded-full bg-purple_3_opacity p-[20px] focus:outline-none
            placeholder:text-[#5B46F6] !text-white"
            placeholder="Your Email"
          />
          <input
            type="text"
            className="w-full h-[50px] md:w-[300px] md:h-[100px] xl:w-[462px] xl:h-[134px] 
            rounded-full bg-purple_3_opacity mt-[10px] p-[20px] 
            placeholder:text-[#5B46F6] focus:outline-none !text-white"
            placeholder="Write your Message"
          />
          <SendButton />
        </div>
        <Media
          type="image"
          link="/images/email.svg"
          blurLink="/images/email.png"
          containerClasses="w-[80%] aspect-[541/541] md:transform md:translate-y-[-80px] mx-auto"
        />
      </FadeInWhenVisible>
    </Container>
  </div>
)

export default GetInTouch
