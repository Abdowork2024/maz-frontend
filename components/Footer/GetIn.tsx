const GetIn = () => (
  <div className="col-span-2">
    <p className="font-inter_semibold text-[16px] md:text-[22px] text-black leading-[115%] mb-[10px] md:mb-[30px]">
      Get in Touch
    </p>
    <div className="flex flex-col justify-start items-between">
      <p className="font-inter text-[12px] md:text-[16px] text-white leading-[115%] mb-[10px] md:mb-[20px]">
        Question or feedback? We’d love to hear <br />
        from you.
      </p>
      <input
        type="text"
        className="w-[220px] md:w-[300px] h-[20px] md:h-[55px] rounded-[8px] bg-blue_4 text-[12px] md:text-[16px]
        p-[15px_15px] md:p-[20px] border-white_3 border-[1px] focus:outline-none placeholder:text-white_3 !text-white focus:border-white"
        placeholder="Your Eamil"
      />
    </div>
    <div className="flex gap-[20px] mt-[30px] md:mt-[80px] font-inter text-[12px] md:text-[16px] text-white leading-[115%] ">
      <p className="mb-[5px] md:mb-[20px]">Privacy Policy</p>
      <p className="mb-[5px] mdmb-[20px]">Terms & Conditions</p>
    </div>
  </div>
)

export default GetIn
