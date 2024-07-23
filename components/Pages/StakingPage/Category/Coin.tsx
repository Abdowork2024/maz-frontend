import Media from "@/shared/Media"

const Coin = ({ src = "", name = "" }) => (
  <div
    className="bg-black flex justify-start 
  items-center py-[10px] pl-[20px] 
  rounded-[10px] min-w-[150px] hover:border-green 
  focus:bg-green_1 active:bg-green_1"
  >
    <Media
      type="image"
      link={src}
      blurLink="/images/MATIC.svg"
      containerClasses="w-[15px] aspect-[1/1]"
    />
    <p className="text-white ml-[10px] text-[15px]">{name}</p>
  </div>
)

export default Coin
