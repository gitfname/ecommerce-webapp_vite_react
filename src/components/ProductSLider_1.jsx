
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md"

function ProductSLider_1({items=[], renderer=(()=>0), prevNextBtnClassName=""}) {
    const swiperRef = useRef(null)

    const prev = () => {
        swiperRef.current?.slidePrev()
    }

    const next = () => {
        swiperRef.current?.slideNext()
    }


    return (
        <div>
            <div className="flex items-center gap-x-2 mb-3">

                <button onClick={prev} className={`p-2 active:scale-95 transition-all rounded-lg bg-slate-100 hover:bg-slate-200 grid place-items-center ${prevNextBtnClassName}`}>
                    <MdKeyboardArrowRight className="w-4 h-4 fill-slate-600" />
                </button>
                <button onClick={next} className={`p-2 active:scale-95 transition-all rounded-lg bg-slate-100 hover:bg-slate-200 grid place-items-center ${prevNextBtnClassName}`}>
                    <MdKeyboardArrowLeft className="w-4 h-4 fill-slate-600" />
                </button>

            </div>

            <Swiper
                onSwiper={swiper => swiperRef.current = swiper}
                className="w-full"
                spaceBetween={15}
                slidesPerView="auto"
            >

                {
                    items.map((item, i) => (
                        <SwiperSlide key={i} className="!w-max">
                            {renderer(item)}
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
  )
}

export default ProductSLider_1