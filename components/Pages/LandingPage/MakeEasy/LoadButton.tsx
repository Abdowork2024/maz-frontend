const LoadButton = () => (
  <button
    type="button"
    className="bg-blue_3 font-redhat !text-[10px] md:text-[24px] 
          font-bold w-[120px] md:w-[180px]  h-[40px] md:h-[50px]
          flex justify-center items-center
          bottom-[10px] md:bottom-[50px]
          text-white rounded-[8px] mt-[20px] md:mt-[30px]
          transition duration-[300ms] hover:scale-[1.1]
          "
  >
    <p className="font-inter_medium  md:text-[16px] tracking-[1px] underline">
      Learn
      <br />
      More
    </p>
  </button>
)
export default LoadButton
