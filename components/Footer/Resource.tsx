import lists from "./resources.json"

const Resource = () => (
  <div className="col-span-1">
    <p className="font-inter_semibold  text-[22px] text-black leading-[115%] mb-[10px] md:mb-[30px]">
      Resources
    </p>
    <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-[20px] justify-start">
      {lists.map((list, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <a href={list.link} key={i}>
          <p className="font-inter text-[12px] md:text-[16px] text-white leading-[115%]">
            {list.titles}
          </p>
        </a>
      ))}
    </div>
  </div>
)

export default Resource
