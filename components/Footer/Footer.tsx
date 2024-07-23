import GetIn from "./GetIn"
import Important from "./Important"
import Logo from "./Logo"
import Resource from "./Resource"

const Footer = () => (
  <div
    className="w-full md:grid md:grid-cols-1 md:grid-cols-5 
    px-[30px] md:px-[80px] mt-[20px] md:mt-[250px]
    flex flex-col gap-8 md:gap-[50px]"
  >
    <Logo />
    <Important />
    <Resource />
    <GetIn />
  </div>
)

export default Footer
