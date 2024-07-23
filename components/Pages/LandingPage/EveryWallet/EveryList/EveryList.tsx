import EveryItem from "./EveryItem"
import lists from "./everylist.json"

const EveryList = () => (
  <div className="grid grid-cols-1 xl:grid-cols-3 gap-[50px] xl:gap-[100px] 2xl:gap-[150px]">
    {lists.map((list, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <EveryItem data={list} key={i} />
    ))}
  </div>
)

export default EveryList
