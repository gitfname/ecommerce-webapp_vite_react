
import { IoIosArrowDown } from "react-icons/io"

function Menu({title, items=[]}) {
    return (
        <div className="">
            <p className="text-sm font-[iranyekan500] text-slate-800 hover:text-red-400 transition-colors duration-200 cursor-pointer">{title}</p>
            <div className="w-full h-full mt-4 flex flex-col gap-y-3">
                {
                    items.map(item => (
                        <p key={item.id} className="text-xs font-[iranyekan300] text-slate-600 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                            {item.text}
                        </p>
                    ))
                }
            </div>
        </div>
    )
}


function MegaMenu({title, items=[{text: "", items: [{id: "", text: ""}], id: ""}]}) {
  return (
    <div>
        <button className="text-sm font-[iranyekan500] text-slate-800 cursor-pointer p-1 rounded-lg
        hover:text-red-400 transition-colors duration-200 peer flex items-center gap-x-1 fill-slate-700
        hover:fill-red-400 focus:text-red-400 focus:fill-red-400">
            {title}
            <IoIosArrowDown className="w-4 h-4 fill-inherit" />
        </button>

        <div
            tabIndex={0}
            className="absolute bottom-0 left-0 w-full min-h-[25rem] h-max bg-white mega-menu-box-shadow z-10
            translate-y-[99%] opacity-0 pointer-events-none transition-all duration-300 rounded-xl
            peer-focus:opacity-100 peer-focus:translate-y-[102%] peer-focus:pointer-events-auto
            focus:opacity-100 focus:translate-y-[102%] focus:pointer-events-auto p-8 flex flex-wrap gap-8"
        >
            {
                items.map(item => (
                    <Menu
                        key={item.id}
                        title={item.text}
                        items={item.items}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default MegaMenu