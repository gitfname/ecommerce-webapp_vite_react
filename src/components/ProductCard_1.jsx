import { Link } from "react-router-dom"
import LazyImg from "./LazyImg"
import LazyImg_2 from "./LazyImg_2"

function ProductCard_1({img, title="", price="", available={show:false, available:true, t:"موجود", f:"نامجود"}}) {

    return (
    <Link to="/products/10" className="w-64 h-full select-none block">
        <LazyImg>
            <div className="border border-slate-300/80 rounded-xl overflow-hidden group">
                <img
                    loading="lazy"
                    alt=""
                    data-src={img}
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-300"
                />
            </div>
        </LazyImg>
        <div className="p-2.5 mt-2">
            <p
                className="text-sm font-[iranyekan500] text-slate-700 leading-6 line-clamp-3"
            >
                {title}
            </p>

            <p
                className="text-sm font-[iranyekan300] text-slate-600 truncate mt-3"
            >
                {price}
            </p>

            {
                available.show
                ?
                    <p
                        className={`text-sm font-[iranyekan300] ${available.available ? "text-emerald-400" : "text-red-400"} truncate mt-4`}
                    >
                        {
                            available.available ? available.t : available.f
                        }
                    </p>
                :
                    null
            }
            
        </div>
    </Link>
  )
}

export default ProductCard_1