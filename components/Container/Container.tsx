const Container = ({ containerClassName = "", children, contentClassName = "" }) => (
  <div className={`relative w-full ${containerClassName}`}>
    <div className={`w-[310px] md:w-[1100px] mx-auto ${contentClassName}`}>{children}</div>
  </div>
)

export default Container
