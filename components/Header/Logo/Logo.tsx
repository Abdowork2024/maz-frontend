import Media from "../../../shared/Media"

const Logo = () => (
  <div className="flex gap-[20px] flex items-center">
    <Media
      type="image"
      link="/images/logo.svg"
      blurLink="/images/logo.svg"
      containerClasses="w-[47px] h-[30px]"
    />
    <Media
      type="image"
      link="/images/logo-name.svg"
      blurLink="/images/logo-name.png"
      containerClasses="w-[113px] h-[14px]"
    />
  </div>
)

export default Logo
