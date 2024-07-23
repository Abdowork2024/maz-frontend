import EasyItem from "./EasyItem"
import list from "./easylist.json"

const EasyList = () => (
  <>
    {list.map((item, i) => (
      // eslint-disable-next-line
      <EasyItem data={item} key={i} />
    ))}
  </>
)

export default EasyList
