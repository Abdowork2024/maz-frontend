import lists from "./importants.json"

const Important = () => (
  <div className="col-span-1">
    <p className="font-inter_semibold text-[22px] md:text-[22px] text-black leading-[115%] mb-[20px] md:mb-[30px]">
      Important links
    </p>
    <div className="grid gap-[20px] grid-cols-2 md:grid-cols-1">
      {lists.map((list, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <a href={list.link} key={i}>
          <p className="font-inter text-[12px] md:text-[16px] text-white leading-[115%] mb-[10px] md:mb-[20px]">
            {list.titles}
          </p>
        </a>
      ))}
    </div>
  </div>
)

export default Important
