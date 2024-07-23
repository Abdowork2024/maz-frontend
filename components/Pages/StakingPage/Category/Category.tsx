import EnterAmount from "./EnterAmount"
import CoinList from "./CoinList"
import ExchangeButton from "./ExchangeButton"

const Category = () => (
  <div className="w-full bg-white_3_opacity rounded-[10px] p-[20px]">
    <EnterAmount />
    <CoinList />
    <div className="w-full flex justify-end mt-[20px]">
      <ExchangeButton />
    </div>
  </div>
)

export default Category
