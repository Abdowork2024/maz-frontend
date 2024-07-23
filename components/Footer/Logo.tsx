import Media from "@/shared/Media"

const Logo = () => (
  <div className="col-span-1 flex flex-col justify-start md:justify-between items-start">
    <div className="flex items-center gap-[20px]">
      <Media
        type="image"
        link="/images/dark-logo.svg"
        blurLink="/images/dark-logo.svg"
        containerClasses="w-[80%] aspect-[47/30]"
      />
      <Media
        type="image"
        link="/images/dark-logo-name.svg"
        blurLink="/images/dark-logo-name.png"
        containerClasses="w-[80%] aspect-[113/14]"
      />
    </div>
    <p className="font-inter text-[16px] text-white leading-[115%] mt-[20px] text-center">
      Copyright © MAZUMA 2024
    </p>
  </div>
)

export default Logo
