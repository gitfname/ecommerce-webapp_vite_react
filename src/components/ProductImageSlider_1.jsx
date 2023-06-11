
import { useRef } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { Swiper, SwiperSlide } from "swiper/react"
import LazyImg from "./LazyImg"
import LazyImg_2 from "./LazyImg_2"

function ProductImageSlider_1({items=[{id: "", img: ""}], prevNextBtnClassName=""}) {
    const swiperRef = useRef(null)

    const next = () => swiperRef.current?.slideNext()
    const prev = () => swiperRef.current?.slidePrev()

    return (
        <div>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                className="w-full"
                onSwiper={swiper => swiperRef.current = swiper}
            >
                {
                    items.map(item => (
                        <SwiperSlide
                            key={item.id}
                        >
                            <LazyImg
                            >
                                <img
                                    loading="lazy"
                                    alt=""
                                    data-src={import.meta.env.BASE_URL+item.img}
                                    className="w-auto h-auto"
                                />
                            </LazyImg>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className="flex items-center justify-center gap-x-2 mt-3 -translate-y-full z-10 relative">

                <button onClick={prev} className={`p-2 active:scale-95 transition-all rounded-lg bg-slate-100 hover:bg-slate-200 grid place-items-center ${prevNextBtnClassName}`}>
                    <MdKeyboardArrowRight className="w-4 h-4 fill-slate-600" />
                </button>
                <button onClick={next} className={`p-2 active:scale-95 transition-all rounded-lg bg-slate-100 hover:bg-slate-200 grid place-items-center ${prevNextBtnClassName}`}>
                    <MdKeyboardArrowLeft className="w-4 h-4 fill-slate-600" />
                </button>

            </div>

        </div>
    )
}

export default ProductImageSlider_1