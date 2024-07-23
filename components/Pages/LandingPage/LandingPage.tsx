import Layout from "../../Layout"
import MakeEasy from "./MakeEasy"
import GetItNow from "./GetItNow"
import Hero from "./Hero"
import PowerWallet from "./PowerfulWallet"
import EveryWallet from "./EveryWallet"
import GetInTouch from "./GetInTouch"

const LandingPage = () => (
  <Layout type="base">
    <Hero />
    <GetItNow />
    <MakeEasy />
    <PowerWallet />
    <EveryWallet />
    <GetInTouch />
  </Layout>
)

export default LandingPage
