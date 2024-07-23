import { useState } from "react"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const EnterAmount = () => {
  const [amount, setAmount] = useState(0)

  const onChangeAmount = (e) => {
    const temp = parseInt(e.target.value, 10)

    if (Number.isNaN(temp)) {
      setAmount(0)
      return
    }
    setAmount(temp)
  }
  return (
    <FadeInWhenVisible className="w-full bg-black p-[20px] rounded-[10px]">
      <div className="border border-black_4 rounded-md">
        <p className="p-2 text-right text-white">Balance: 0.000000</p>
        <div
          className="p-2 border-black_4 border-t
            w-full flex justify-between"
        >
          <button
            type="button"
            className="border border-green_1 rounded-sm
                hover:border-green px-2 text-green_1 hover:text-green"
          >
            MAX
          </button>
          <div className="flex gap-2">
            <input
              type="text"
              value={amount}
              className="bg-black !outline-none !border-none
                          text-white      !text-right"
              placeholder="Enter amount"
              onChange={onChangeAmount}
            />
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  )
}

export default EnterAmount
