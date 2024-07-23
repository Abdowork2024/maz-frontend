import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Container from "../../../Container"
import EasyList from "./EasyList"
import LoadMore from "./LoadMore"

const MakeEasy = () => (
  <div className="w-full relative relative">
    <Container contentClassName="mt-[100px] md:mt-[250px]">
      <div className="grid xl:grid-cols-4 2xl:grid-cols-12 w-full">
        <FadeInWhenVisible className="col-span-4 mx-auto mb-[100px]">
          <LoadMore />
        </FadeInWhenVisible>
        <div className="col-span-8 grid grid-cols-1 xl:grid-cols-2 gap-8">
          <EasyList />
        </div>
      </div>
    </Container>
  </div>
)

export default MakeEasy
