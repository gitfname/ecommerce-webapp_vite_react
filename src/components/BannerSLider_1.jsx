
import { Swiper, SwiperSlide } from "swiper/react"
import { useRef } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

export default function BannerSlider_1() {
    const swiperRef = useRef(null)

    const prev = () => {
        swiperRef.current?.slidePrev()
    }
    
    const next = () => {
        swiperRef.current?.slideNext()
    }

    return (
        <div className="relative w-full">

            <Swiper
                spaceBetween={15}
                slidesPerView={1}
                className="w-full"
                loop
                onSwiper={swiper => swiperRef.current = swiper}
            >
                <SwiperSlide>
                    <img loading="lazy"
                        alt=""
                        src={import.meta.env.BASE_URL+"/images/SlideShow_1_1_D.webp"}
                        className="w-full h-auto max-sm:aspect-video mx-auto"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img loading="lazy"
                        alt=""
                        src={import.meta.env.BASE_URL+"/images/SlideShow_2_D.webp"}
                        className="w-full h-auto max-sm:aspect-video mx-auto"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img loading="lazy"
                        alt=""
                        src={import.meta.env.BASE_URL+"/images/SlideShow_3_D.webp"}
                        className="w-full h-auto max-sm:aspect-video mx-auto"
                    />
                </SwiperSlide>
            </Swiper>

            <div className="absolute z-10 bottom-1 right-1 flex items-center gap-x-1">
                <button onClick={prev} className="p-3 active:scale-95 transition-transform duration-200 rounded bg-white border border-slate-400 grid place-items-center">
                    <MdKeyboardArrowRight className="w-5 h-5 fill-slate-800" />
                </button>

                <button onClick={next} className="p-3 active:scale-95 transition-transform duration-200 rounded bg-white border border-slate-400 grid place-items-center">
                    <MdKeyboardArrowLeft className="w-5 h-5 fill-slate-800" />
                </button>
            </div>

        </div>
    )
}
