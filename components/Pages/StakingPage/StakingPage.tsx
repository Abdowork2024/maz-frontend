import Layout from "@/components/Layout"
import Category from "./Category"
import Brand from "./Brand"

const StakingPage = () => (
  <Layout type="base">
    <div className="w-full flex justify-center items-center">
      <div className="w-[100%]">
        <Brand />
        <div className="p-[30px]">
          <Category />
        </div>
      </div>
    </div>
  </Layout>
)

export default StakingPage
