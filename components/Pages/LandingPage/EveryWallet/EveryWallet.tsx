import Container from "../../../Container"
import EveryList from "./EveryList"
import SubTitle from "./SubTitle"

const EveryWallet = () => (
  <div className="w-full relative mt-[80px] md:mt-[100px] relative">
    <Container contentClassName="flex flex-col justify-center items-center gap-[30px] mt-[100px]">
      <SubTitle />
      <EveryList />
    </Container>
  </div>
)

export default EveryWallet
