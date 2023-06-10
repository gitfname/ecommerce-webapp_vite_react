import ReviewAndStarsCard_1 from "../components/ReviewAndStarsCard_1"
import { AiOutlineHeart } from "react-icons/ai"
import { useEffect } from "react"

function SingleProduct() {

    useEffect(
        () => {
            scrollTo({behavior: "smooth", left: 0, top: 0})
        },
        []
    )

  return (
    <div className="w-full max-w-7xl mx-auto pb-20 mt-6">

        <div className="w-full px-4 lg:px-10 grid-cols-1 grid lg:grid-cols-[35%_65%] gap-x-4 gap-y-6">

            <img
                alt=""
                src={import.meta.env.BASE_URL+"/images/product-1-img.webp"}
                className="w-auto h-auto"
            />

            <div>
                <p
                    className="text-xl text-slate-900 font-[iranyekan500] mb-3"
                >
                    تیشرت مردانه یقه کوبایی Rayan مدل ۳۸۱۰۹
                </p>

                <ReviewAndStarsCard_1 />
                
                <p className="text-2xl text-rose-500 font-[iranyekan600] mt-7">
                    339,000 <span className="text-base font-[iranyekan600]">تومان</span>
                </p>

                <div className="flex flex-col gap-y-2 mt-9">

                    <p className="text-sm text-slate-500 font-[iranyekan300]">
                        برند
                        &nbsp;
                        <span className="text-slate-800 text-sm font-[iranyekan500]">Ryan</span>
                    </p>

                    <p className="text-sm text-slate-500 font-[iranyekan300]">
                        فروشنده
                        &nbsp;
                        <span className="text-slate-800 text-sm font-[iranyekan500]">Nika Clothes</span>
                    </p>

                    <p className="text-sm text-slate-500 font-[iranyekan300]">
                        آستین
                        &nbsp;
                        <span className="text-slate-800 text-sm font-[iranyekan500]">کوتاه</span>
                    </p>

                    <p className="text-sm text-slate-500 font-[iranyekan300]">
                        جنس
                        &nbsp;
                        <span className="text-slate-800 text-sm font-[iranyekan500]">پارچه مراکشی</span>
                    </p>

                    <p className="text-sm text-slate-500 font-[iranyekan300]">
                        رنگ
                        &nbsp;
                        <span className="text-slate-800 text-sm font-[iranyekan500]">طوسی</span>
                    </p>


                    <p className="cursor-pointer text-slate-800 text-xs border-b border-b-slate-800 w-max font-[iranyekan400] mt-1">اطلاعات بیشتر</p>

                    <div className="mt-6 w-full border-t border-t-slate-300 py-4">

                        <p
                            className="text-base text-slate-700 font-[iranyekan500]"
                        >
                            سایز:
                            &nbsp;
                            <span className="text-slate-600 text-xs font-[iranyekan400]">لطفا یک سایز را انتخاب کنید</span>
                        </p>

                        <div className="mt-3 flex items-stretch w-full max-w-xs text-center">
                            <p className="border border-l-0 border-gray-300 p-3 flex-1 text-lg text-slate-700">XXL</p>
                            <p className="border border-l-0 border-gray-300 p-3 flex-1 text-lg text-slate-700">XL</p>
                            <p className="border border-gray-300 p-3 text-lg flex-1 text-slate-700">L</p>
                        </div>

                        <div className="mt-6 flex items-center gap-x-2">

                            <button
                                className="flex-[6] text-base text-white font-[iranyekan500] bg-gray-900 rounded-md p-4
                                active:scale-95 transition-transform duration-200"
                            >
                                افزودن به سبد خرید
                            </button>

                            <button
                                className="flex-[2] border border-slate-400 rounded-md bg-transparent self-stretch
                                transition-transform active:scale-95 duration-200"
                            >
                                <AiOutlineHeart className="w-5 h-5 fill-slate-800 mx-auto" />
                            </button>

                        </div>

                        <p className="mt-5 text-xs text-slate-600/90 font-[iranyekan500] flex items-center">
                            اشتراک گذاری با دیگران
                            &nbsp;&nbsp;
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke-width="1" class="text-neutral-500" xmlns="http://www.w3.org/2000/svg"><path d="M3.27364 11.5177C5.1103 10.5707 7.16736 9.77168 9.08798 8.97263C12.3939 7.66063 15.7104 6.37822 19.0584 5.17473C19.7091 4.96756 20.8845 4.77028 21 5.67783C20.937 6.96024 20.6747 8.24265 20.4963 9.5152C20.0449 12.3266 19.5307 15.1183 19.0164 17.9199C18.838 18.857 17.5995 19.3306 16.8019 18.7386C14.8918 17.5352 12.9607 16.3317 11.0821 15.0888C10.4628 14.4969 11.0401 13.6485 11.5858 13.2342C13.1601 11.7742 14.8289 10.5411 16.3192 9.00223C16.718 8.08481 15.532 8.85425 15.1437 9.09101C12.9817 10.4918 10.8826 11.9715 8.61569 13.1947C7.45072 13.7965 6.10734 13.2835 4.94238 12.9481C3.90336 12.5436 2.37106 12.1392 3.27364 11.5177Z"></path></svg>
                            &nbsp;
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke-width="1" class="text-neutral-500" xmlns="http://www.w3.org/2000/svg"><path d="M12.0022 3H11.9978C7.03538 3 3 7.0365 3 12C3 13.9688 3.6345 15.7935 4.71337 17.2751L3.59175 20.6186L7.05113 19.5128C8.47425 20.4555 10.1719 21 12.0022 21C16.9646 21 21 16.9624 21 12C21 7.03763 16.9646 3 12.0022 3Z"></path><path d="M16.8213 15.6596C16.6175 16.2775 15.8091 16.7899 15.1642 16.9396C14.723 17.0405 14.1467 17.121 12.2067 16.2571C9.72525 15.1528 8.12725 12.4443 8.00271 12.2685C7.88344 12.0928 7 10.8343 7 9.53279C7 8.23125 7.61535 7.59749 7.86338 7.32539C8.06709 7.10204 8.40379 7 8.72677 7C8.83126 7 8.9252 7.00567 9.00964 7.0102C9.25768 7.02154 9.38222 7.03741 9.54582 7.45803C9.74953 7.98523 10.2456 9.28677 10.3047 9.42055C10.3649 9.55433 10.425 9.73573 10.3406 9.91147C10.2614 10.0929 10.1918 10.1734 10.0672 10.3276C9.94268 10.4817 9.82447 10.5997 9.69992 10.7652C9.58593 10.9092 9.45716 11.0634 9.60071 11.3298C9.74425 11.5905 10.2403 12.4601 10.9707 13.1585C11.9133 14.0598 12.6774 14.3478 12.9508 14.4703C13.1545 14.561 13.3973 14.5394 13.5461 14.3694C13.735 14.1506 13.9683 13.7878 14.2058 13.4306C14.3747 13.1744 14.5879 13.1426 14.8116 13.2333C15.0396 13.3184 16.246 13.9589 16.4941 14.0916C16.7421 14.2254 16.9057 14.2889 16.9659 14.4011C17.025 14.5133 17.025 15.0405 16.8213 15.6596Z" fill="white"></path></svg>
                            &nbsp;&nbsp;&nbsp;
                            <span className="h-4 border-r border-slate-400"></span>
                            &nbsp;&nbsp;&nbsp;
                            <span className="cursor-pointer flex items-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke-width="1" className="ml-0.5 fill-slate-700" xmlns="http://www.w3.org/2000/svg"><path d="M18 21H12C11.2044 21 10.4413 20.6839 9.87868 20.1213C9.31607 19.5587 9 18.7956 9 18V12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9H18C18.7956 9 19.5587 9.31607 20.1213 9.87868C20.6839 10.4413 21 11.2044 21 12V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21ZM12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V12C19 11.7348 18.8946 11.4804 18.7071 11.2929C18.5196 11.1054 18.2652 11 18 11H12Z"></path><path d="M9.73 15H5.67C4.96268 14.9974 4.28509 14.7152 3.78494 14.2151C3.28478 13.7149 3.00263 13.0373 3 12.33V5.67C3.00263 4.96268 3.28478 4.28509 3.78494 3.78494C4.28509 3.28478 4.96268 3.00263 5.67 3H12.33C13.0373 3.00263 13.7149 3.28478 14.2151 3.78494C14.7152 4.28509 14.9974 4.96268 15 5.67V9.4H13V5.67C13 5.49231 12.9294 5.32189 12.8038 5.19624C12.6781 5.07059 12.5077 5 12.33 5H5.67C5.49231 5 5.32189 5.07059 5.19624 5.19624C5.07059 5.32189 5 5.49231 5 5.67V12.33C5 12.5077 5.07059 12.6781 5.19624 12.8038C5.32189 12.9294 5.49231 13 5.67 13H9.73V15Z"></path></svg>
                                <span className="text-xs text-slate-700">
                                    کپی لینک
                                </span>
                            </span>
                        </p>

                    </div>
                </div>
            </div>


        </div>

        <div className="mt-10 w-full px-4 lg:px-10 gap-y-6 grid-cols-1 grid lg:grid-cols-[25%_75%]">

            <p className="text-xl text-slate-800 font-[iranyekan500]">
                مشخصات محصول |
            </p>

            <div
                className="[&>div:nth-child(even)]:bg-neutral-200/80 [&>div]:p-3"
            >
                <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-800 font-[iranyekan400]">لارج</p>
                    <p className="text-sm text-slate-900 font-[iranyekan400]">
                        دورسینه = 104
                        &nbsp;
                        قد = 70
                        &nbsp;
                        آستین = 22
                    </p>
                </div>
                
                <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-800 font-[iranyekan400]">ایکس لارج</p>
                    <p className="text-sm text-slate-900 font-[iranyekan400]">
                        دورسینه = 104
                        &nbsp;
                        قد = 70
                        &nbsp;
                        آستین = 22
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-800 font-[iranyekan400]">دو ایکس لارج</p>
                    <p className="text-sm text-slate-900 font-[iranyekan400]">
                        دورسینه = 104
                        &nbsp;
                        قد = 70
                        &nbsp;
                        آستین = 22
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-800 font-[iranyekan400]">آستین</p>
                    <p className="text-sm text-slate-900 font-[iranyekan400]">
                       کوتاه
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-800 font-[iranyekan400]">جینس</p>
                    <p className="text-sm text-slate-900 font-[iranyekan400]">
                        پارچه مراکشی
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-800 font-[iranyekan400]">رنگ</p>
                    <p className="text-sm text-slate-900 font-[iranyekan400]">
                        طوسی
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-800 font-[iranyekan400]">سایز</p>
                    <p className="text-sm text-slate-900 font-[iranyekan400]">
                        XXl , XL , L
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-800 font-[iranyekan400]">سایز مدل</p>
                    <p className="text-sm text-slate-900 font-[iranyekan400]">
                        ایکس لارج
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-800 font-[iranyekan400]">طرح پارچه</p>
                    <p className="text-sm text-slate-900 font-[iranyekan400]">
                        طرح دار
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-800 font-[iranyekan400]">نوع</p>
                    <p className="text-sm text-slate-900 font-[iranyekan400]">
                        تیشرت
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-800 font-[iranyekan400]">یقه</p>
                    <p className="text-sm text-slate-900 font-[iranyekan400]">
                        کوبایی
                    </p>
                </div>
            </div>

        </div>
            
    </div>
  )
}

export default SingleProduct