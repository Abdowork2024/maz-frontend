import CustomConnectWallet from "../CustomConnectWallet"
import LoginButton from "./LoginButton"
import SignUpButton from "./SignUpButton"

const AuthButton = () => (
  <div className="flex gap-[20px]">
    <LoginButton />
    <SignUpButton />
    <CustomConnectWallet />
  </div>
)

export default AuthButton
