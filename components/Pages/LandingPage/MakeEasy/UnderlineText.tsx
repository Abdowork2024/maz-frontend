const UnderlineText = ({ text, className = "" }) => (
  <p className={`w-fit border-b-[1px] md:border-b-[2px] md:pb-1 tracking-[0.1px] ${className}`}>
    {text}
  </p>
)

export default UnderlineText
