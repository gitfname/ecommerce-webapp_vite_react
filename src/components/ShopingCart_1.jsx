
import { CgShoppingBag } from "react-icons/cg"

function ShopingCart_1() {
  return (
    <div className="flex items-center gap-x-5">
        <CgShoppingBag className="w-6 h-6 sm:w-5 sm:h-5 fill-slate-800 flex-shrink-0 cursor-pointer" />
        <div className="flex-shrink-0 max-sm:hidden">
            <p className="text-base sm:text-sm font-[iranyekan500] tracking-wide text-slate-800">
                سبد خرید شما
            </p>
            <p className="text-xs font-[iranyekan300] text-slate-500 tracking-wide mt-1">
                سبد خالی است
            </p>
        </div>
    </div>
  )
}

export default ShopingCart_1