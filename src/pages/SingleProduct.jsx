import ReviewAndStarsCard_1 from "../components/ReviewAndStarsCard_1"
import { AiOutlineHeart } from "react-icons/ai"
import { useEffect } from "react"
import ProductSLider_1 from "../components/ProductSLider_1"
import SectionGroup_1 from "../components/SectionGroup_1"
import ProductCard_1 from "../components/ProductCard_1"
import ProductImageSlider_1 from "../components/ProductImageSlider_1"

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

            {/* <img loading="lazy"
                alt=""
                src={import.meta.env.BASE_URL+"/images/product-1-img.webp"}
                className="w-auto h-auto"
            /> */}

            <ProductImageSlider_1
                items={[
                    {
                        id: "0",
                        img: "images/product-1-img.webp"
                    },
                    {
                        id: "1",
                        img: "images/product-1-img-2.jpg"
                    },
                    {
                        id: "2",
                        img: "images/product-1-img-3.webp"
                    },
                    {
                        id: "3",
                        img: "images/product-1-img-4.jpg"
                    }
                ]}
                prevNextBtnClassName="bg-slate-200 hover:bg-slate-300/70"
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
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" strokeWidth="1" className="text-neutral-500" xmlns="http://www.w3.org/2000/svg"><path d="M3.27364 11.5177C5.1103 10.5707 7.16736 9.77168 9.08798 8.97263C12.3939 7.66063 15.7104 6.37822 19.0584 5.17473C19.7091 4.96756 20.8845 4.77028 21 5.67783C20.937 6.96024 20.6747 8.24265 20.4963 9.5152C20.0449 12.3266 19.5307 15.1183 19.0164 17.9199C18.838 18.857 17.5995 19.3306 16.8019 18.7386C14.8918 17.5352 12.9607 16.3317 11.0821 15.0888C10.4628 14.4969 11.0401 13.6485 11.5858 13.2342C13.1601 11.7742 14.8289 10.5411 16.3192 9.00223C16.718 8.08481 15.532 8.85425 15.1437 9.09101C12.9817 10.4918 10.8826 11.9715 8.61569 13.1947C7.45072 13.7965 6.10734 13.2835 4.94238 12.9481C3.90336 12.5436 2.37106 12.1392 3.27364 11.5177Z"></path></svg>
                            &nbsp;
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" strokeWidth="1" className="text-neutral-500" xmlns="http://www.w3.org/2000/svg"><path d="M12.0022 3H11.9978C7.03538 3 3 7.0365 3 12C3 13.9688 3.6345 15.7935 4.71337 17.2751L3.59175 20.6186L7.05113 19.5128C8.47425 20.4555 10.1719 21 12.0022 21C16.9646 21 21 16.9624 21 12C21 7.03763 16.9646 3 12.0022 3Z"></path><path d="M16.8213 15.6596C16.6175 16.2775 15.8091 16.7899 15.1642 16.9396C14.723 17.0405 14.1467 17.121 12.2067 16.2571C9.72525 15.1528 8.12725 12.4443 8.00271 12.2685C7.88344 12.0928 7 10.8343 7 9.53279C7 8.23125 7.61535 7.59749 7.86338 7.32539C8.06709 7.10204 8.40379 7 8.72677 7C8.83126 7 8.9252 7.00567 9.00964 7.0102C9.25768 7.02154 9.38222 7.03741 9.54582 7.45803C9.74953 7.98523 10.2456 9.28677 10.3047 9.42055C10.3649 9.55433 10.425 9.73573 10.3406 9.91147C10.2614 10.0929 10.1918 10.1734 10.0672 10.3276C9.94268 10.4817 9.82447 10.5997 9.69992 10.7652C9.58593 10.9092 9.45716 11.0634 9.60071 11.3298C9.74425 11.5905 10.2403 12.4601 10.9707 13.1585C11.9133 14.0598 12.6774 14.3478 12.9508 14.4703C13.1545 14.561 13.3973 14.5394 13.5461 14.3694C13.735 14.1506 13.9683 13.7878 14.2058 13.4306C14.3747 13.1744 14.5879 13.1426 14.8116 13.2333C15.0396 13.3184 16.246 13.9589 16.4941 14.0916C16.7421 14.2254 16.9057 14.2889 16.9659 14.4011C17.025 14.5133 17.025 15.0405 16.8213 15.6596Z" fill="white"></path></svg>
                            &nbsp;&nbsp;&nbsp;
                            <span className="h-4 border-r border-slate-400"></span>
                            &nbsp;&nbsp;&nbsp;
                            <span className="cursor-pointer flex items-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" strokeWidth="1" className="ml-0.5 fill-slate-700" xmlns="http://www.w3.org/2000/svg"><path d="M18 21H12C11.2044 21 10.4413 20.6839 9.87868 20.1213C9.31607 19.5587 9 18.7956 9 18V12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9H18C18.7956 9 19.5587 9.31607 20.1213 9.87868C20.6839 10.4413 21 11.2044 21 12V18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21ZM12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V12C19 11.7348 18.8946 11.4804 18.7071 11.2929C18.5196 11.1054 18.2652 11 18 11H12Z"></path><path d="M9.73 15H5.67C4.96268 14.9974 4.28509 14.7152 3.78494 14.2151C3.28478 13.7149 3.00263 13.0373 3 12.33V5.67C3.00263 4.96268 3.28478 4.28509 3.78494 3.78494C4.28509 3.28478 4.96268 3.00263 5.67 3H12.33C13.0373 3.00263 13.7149 3.28478 14.2151 3.78494C14.7152 4.28509 14.9974 4.96268 15 5.67V9.4H13V5.67C13 5.49231 12.9294 5.32189 12.8038 5.19624C12.6781 5.07059 12.5077 5 12.33 5H5.67C5.49231 5 5.32189 5.07059 5.19624 5.19624C5.07059 5.32189 5 5.49231 5 5.67V12.33C5 12.5077 5.07059 12.6781 5.19624 12.8038C5.32189 12.9294 5.49231 13 5.67 13H9.73V15Z"></path></svg>
                                <span className="text-xs text-slate-700">
                                    کپی لینک
                                </span>
                            </span>
                        </p>

                    </div>
                </div>
            </div>


        </div>

        <div className="flex max-lg:flex-col gap-y-8 items-center gap-x-5 justify-evenly py-6 border-y border-slate-300 my-9">

            <div className="flex max-lg:flex-col items-center gap-2">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#999999" strokeWidth="1" className="m-auto lg:ml-2 lg:inline-block text-xs lg:text-base" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M18.975 5.02507C18.525 4.96657 18.525 4.91707 18.075 4.87207V16.9501H18.975C19.722 16.9501 20.325 16.3471 20.325 15.6001V6.37507C20.325 5.62807 19.722 5.02507 18.975 5.02507Z" fill="#cdcdcd"></path><path fillRule="evenodd" clipRule="evenodd" d="M7.104 14.25C7.104 13.8772 7.40621 13.575 7.779 13.575H16.221C16.5938 13.575 16.896 13.8772 16.896 14.25C16.896 14.6227 16.5938 14.925 16.221 14.925H7.779C7.40621 14.925 7.104 14.6227 7.104 14.25Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M18.8888 5.69447C14.2975 5.10334 9.70247 5.10334 5.1112 5.69447L5.06827 5.7H5.025C4.65079 5.7 4.35 6.00079 4.35 6.375V15.6C4.35 15.9742 4.65079 16.275 5.025 16.275H9.156C9.54156 16.275 9.91269 16.4165 10.1984 16.6705L10.2385 16.7061L11.8859 18.7195C11.9565 18.7631 12.0476 18.7632 12.1184 18.7197L13.7612 16.7064L13.8016 16.6705C14.0873 16.4165 14.4584 16.275 14.844 16.275H18.975C19.3492 16.275 19.65 15.9742 19.65 15.6V6.375C19.65 6.00079 19.3492 5.7 18.975 5.7H18.9317L18.8888 5.69447ZM19.0224 4.35054C14.3425 3.75132 9.6575 3.75132 4.97763 4.35054C3.87979 4.37564 3 5.27104 3 6.375V15.6C3 16.7198 3.90521 17.625 5.025 17.625H9.156C9.19881 17.625 9.23948 17.6372 9.2734 17.6584L10.9231 19.6747L10.9646 19.7112C11.557 20.2326 12.4475 20.2326 13.0399 19.7112L13.0818 19.6744L14.7269 17.6583C14.7607 17.6372 14.8013 17.625 14.844 17.625H18.975C20.0948 17.625 21 16.7198 21 15.6V6.375C21 5.27104 20.1202 4.37564 19.0224 4.35054Z"></path><path d="M15.6 12H8.40005C7.65305 12 7.05005 11.397 7.05005 10.65V7.95003C7.05005 7.20303 7.65305 6.60003 8.40005 6.60003C10.7985 6.29853 13.2015 6.29853 15.6 6.60003C16.347 6.60003 16.95 7.20303 16.95 7.95003V10.65C16.95 11.397 16.347 12 15.6 12Z" fill="#cdcdcd"></path></svg>
                <p className="text-sm text-slate-600/80 font-[iranyekan500]">
                    پاسخ گویی سریع
                </p>
            </div>

            <div className="flex max-lg:flex-col items-center gap-x-2">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#999999" strokeWidth="1" className="m-auto lg:ml-2 lg:inline-block text-xs lg:text-base" xmlns="http://www.w3.org/2000/svg"><path d="M17.24 6.94492L12.3 3.33992C11.525 2.77492 10.435 2.93992 9.87 3.71492L7.505 6.94492H17.24Z" fill="#cdcdcd"></path><path d="M20.095 6.96509H17.61C18.515 6.96509 19.21 7.76009 19.095 8.65509L17.975 16.1251C17.88 16.8701 17.24 17.4251 16.49 17.4251H18.975C19.725 17.4251 20.365 16.8701 20.46 16.1251L21.58 8.65509C21.7 7.76009 21 6.96509 20.095 6.96509Z" opacity="0.3" fill="#cdcdcd"></path><path d="M6.99499 7.71509C6.57757 7.71509 6.24499 8.05093 6.24499 8.46009L6.23499 16.4401C6.23499 16.4402 6.23499 16.44 6.23499 16.4401C6.2352 16.8474 6.57107 17.1851 6.98499 17.1851H18.635C19.0101 17.1851 19.3241 16.9081 19.371 16.5402L19.3716 16.5355L20.4916 8.55587C20.5469 8.10875 20.1995 7.71509 19.75 7.71509H6.99499ZM4.74499 8.45958C4.74526 7.21897 5.75257 6.21509 6.99499 6.21509H19.75C21.1092 6.21509 22.1512 7.40929 21.9789 8.75067L21.9783 8.755L20.8583 16.7351C20.7129 17.8546 19.7582 18.6851 18.635 18.6851H6.98499C5.74903 18.6851 4.73499 17.6826 4.73499 16.4401L4.74499 8.46009C4.74499 8.45992 4.74499 8.45975 4.74499 8.45958Z" fillRule="evenodd" clipRule="evenodd"></path><path fillRule="evenodd" clipRule="evenodd" d="M20.23 15.1951H5.48499V13.6951H20.23V15.1951Z"></path><path d="M8.15991 18.4351C8.15991 19.0195 8.63778 19.5001 9.22991 19.5001C9.82339 19.5001 10.2999 19.0232 10.2999 18.4351H11.7999C11.7999 19.857 10.6464 21.0001 9.22991 21.0001C7.81204 21.0001 6.65991 19.8506 6.65991 18.4351H8.15991Z" fillRule="evenodd" clipRule="evenodd"></path><path d="M14.9351 18.4351C14.9351 19.0195 15.4129 19.5001 16.0051 19.5001C16.5985 19.5001 17.0751 19.0232 17.0751 18.4351H18.5751C18.5751 19.857 17.4216 21.0001 16.0051 21.0001C14.5872 21.0001 13.4351 19.8506 13.4351 18.4351H14.9351Z" fillRule="evenodd" clipRule="evenodd"></path><path d="M2.03817 4.98359C2.16869 4.59048 2.59318 4.37761 2.9863 4.50814C4.43634 4.9896 5.59902 5.90219 6.19462 7.44479C6.34381 7.8312 6.15151 8.2654 5.7651 8.41459C5.37869 8.56378 4.94449 8.37148 4.7953 7.98507C4.3909 6.93767 3.62358 6.30026 2.51362 5.93172C2.12051 5.80119 1.90764 5.3767 2.03817 4.98359Z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                <p className="text-sm text-slate-600/80 font-[iranyekan500]">
                    خدمات پس از فروش
                </p>
            </div>

            <div className="flex max-lg:flex-col items-center gap-x-2">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#999999" strokeWidth="1" className="m-auto lg:ml-2 lg:inline-block text-xs lg:text-base" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 3.75C12.09 3.75 11.72 3.785 11.35 3.835C15.37 4.385 18.475 7.825 18.475 12C18.475 16.175 15.375 19.615 11.35 20.165C11.72 20.215 12.09 20.25 12.475 20.25C17.03 20.25 20.725 16.555 20.725 12C20.725 7.445 17.03 3.75 12.475 3.75Z" opacity="0.3" fill="#cdcdcd"></path><path d="M12.475 21C8.345 21 4.755 18.205 3.75 14.205L5.205 13.84C6.04 17.17 9.03 19.5 12.475 19.5C16.61 19.5 19.975 16.135 19.975 12C19.975 7.865 16.61 4.5 12.475 4.5C9.61 4.5 7.035 6.095 5.755 8.66L4.415 7.995C5.945 4.915 9.035 3 12.475 3C17.435 3 21.475 7.035 21.475 12C21.475 16.965 17.435 21 12.475 21Z"></path><path d="M7.64007 8.62499L4.53007 11.695C4.39507 11.83 4.16007 11.765 4.11007 11.58L3.01007 7.35499C2.96007 7.16999 3.13007 6.99999 3.31507 7.04999L7.53007 8.20499C7.71507 8.25499 7.77507 8.48999 7.64007 8.62499Z" fill="#cdcdcd"></path><path d="M15.0213 10.1176C14.9808 9.53373 14.7328 8.98862 14.3284 8.59477C13.924 8.20083 13.394 7.98817 12.8477 8.00051H11.8926C11.3391 8.00107 10.8084 8.23688 10.4171 8.65627C10.0257 9.07556 9.80556 9.64419 9.80495 10.2372C9.80495 10.437 9.90447 10.6216 10.0659 10.7215C10.2274 10.8214 10.4263 10.8214 10.5878 10.7215C10.7493 10.6216 10.8488 10.437 10.8488 10.2372C10.8491 9.94076 10.9592 9.65655 11.1549 9.44686C11.3506 9.23725 11.6159 9.1193 11.8926 9.11882H12.8477C13.1258 9.1103 13.3966 9.2144 13.6062 9.41033C13.8158 9.60627 13.9488 9.87972 13.9786 10.1761C13.9942 10.4828 13.8914 10.7829 13.6943 11.006C13.4972 11.2291 13.2231 11.3555 12.9363 11.3556H12.4145C12.228 11.3556 12.0557 11.4622 11.9625 11.6352C11.8693 11.8082 11.8693 12.0214 11.9625 12.1944C12.0557 12.3674 12.228 12.474 12.4145 12.474H12.9363C13.223 12.474 13.4971 12.6003 13.6942 12.8232C13.8913 13.0462 13.9942 13.3462 13.9787 13.653C13.949 13.9494 13.816 14.2229 13.6064 14.4191C13.3968 14.6151 13.1258 14.7193 12.8476 14.7108H11.8926C11.6159 14.7103 11.3505 14.5923 11.1549 14.3827C10.9592 14.173 10.8491 13.8888 10.8488 13.5924C10.8488 13.3926 10.7492 13.208 10.5878 13.1081C10.4263 13.0082 10.2274 13.0082 10.0659 13.1081C9.90444 13.208 9.80493 13.3926 9.80493 13.5924C9.80554 14.1854 10.0256 14.754 10.4171 15.1733C10.8084 15.5927 11.3391 15.8285 11.8926 15.8291H12.8476C13.3942 15.8414 13.9242 15.6287 14.3287 15.2347C14.7331 14.8407 14.981 14.2955 15.0214 13.7114C15.0537 13.0976 14.847 12.4969 14.4506 12.0524C14.4049 12.0008 14.3504 11.9611 14.3007 11.9148C14.3504 11.8685 14.4051 11.8288 14.4506 11.7772C14.847 11.3325 15.0536 10.7316 15.0213 10.1176L15.0213 10.1176Z"></path></svg>
                <p className="text-sm text-slate-600/80 font-[iranyekan500]">
                    3 روز ضمانت بازگشت کالا
                </p>
            </div>

            <div className="flex max-lg:flex-col items-center gap-x-2">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#999999" strokeWidth="1" className="m-auto lg:ml-2 lg:inline-block text-xs lg:text-base" xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M19 6.25H16.75V10.5H19V6.25Z" fill="#cdcdcd"></path><path opacity="0.3" d="M19 15H16.75V19.125H19V15Z" fill="#cdcdcd"></path><path d="M16 6.75H4V5C4 4.45 4.45 4 5 4H15C15.55 4 16 4.45 16 5V6.75Z" fill="#cdcdcd"></path><path fillRule="evenodd" clipRule="evenodd" d="M13.5 11.25C12.6692 11.25 12 11.9192 12 12.75C12 13.5808 12.6692 14.25 13.5 14.25H19C19.8308 14.25 20.5 13.5808 20.5 12.75C20.5 11.9192 19.8308 11.25 19 11.25H13.5ZM10.5 12.75C10.5 11.0908 11.8408 9.75 13.5 9.75H19C20.6592 9.75 22 11.0908 22 12.75C22 14.4092 20.6592 15.75 19 15.75H13.5C11.8408 15.75 10.5 14.4092 10.5 12.75Z"></path><path d="M19 15H18.5V17.75C18.5 18.165 18.165 18.5 17.75 18.5H4.25C3.835 18.5 3.5 18.165 3.5 17.75V7.75C3.5 7.335 3.835 7 4.25 7H17.75C18.165 7 18.5 7.335 18.5 7.75V10.5H19C19.36 10.5 19.7 10.595 20 10.745V7.75C20 6.51 18.99 5.5 17.75 5.5H4.25C3.01 5.5 2 6.51 2 7.75V17.75C2 18.99 3.01 20 4.25 20H17.75C18.99 20 20 18.99 20 17.75V14.755C19.7 14.905 19.36 15 19 15Z"></path><path d="M18.875 13.375C19.2202 13.375 19.5 13.0952 19.5 12.75C19.5 12.4048 19.2202 12.125 18.875 12.125C18.5298 12.125 18.25 12.4048 18.25 12.75C18.25 13.0952 18.5298 13.375 18.875 13.375Z"></path></svg>
                <p className="text-sm text-slate-600/80 font-[iranyekan500]">
                    امکان پرداخت حضوری در محل
                </p>
            </div>

            <div className="flex max-lg:flex-col items-center gap-x-2">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="#999999" strokeWidth="1" className="m-auto lg:ml-2 lg:inline-block " xmlns="http://www.w3.org/2000/svg"><path opacity="0.3" d="M20 5.75H17.5L19.5 11H22L20 5.75Z" fill="#cdcdcd"></path><path fillRule="evenodd" clipRule="evenodd" d="M13.25 6.5H14.75V10.25H21.5V11.75H13.25V6.5Z"></path><path d="M7 21C5.485 21 4.25 19.765 4.25 18.25C4.25 16.735 5.485 15.5 7 15.5C8.515 15.5 9.75 16.735 9.75 18.25C9.75 19.765 8.515 21 7 21ZM7 17C6.31 17 5.75 17.56 5.75 18.25C5.75 18.94 6.31 19.5 7 19.5C7.69 19.5 8.25 18.94 8.25 18.25C8.25 17.56 7.69 17 7 17Z"></path><path d="M17 21C15.485 21 14.25 19.765 14.25 18.25C14.25 16.735 15.485 15.5 17 15.5C18.515 15.5 19.75 16.735 19.75 18.25C19.75 19.765 18.515 21 17 21ZM17 17C16.31 17 15.75 17.56 15.75 18.25C15.75 18.94 16.31 19.5 17 19.5C17.69 19.5 18.25 18.94 18.25 18.25C18.25 17.56 17.69 17 17 17Z"></path><path d="M2.75 16H5.425C4.715 16.495 4.25 17.32 4.25 18.25C3.42 18.25 2.75 17.58 2.75 16.75V16Z" fill="#cdcdcd" opacity="0.5"></path><path d="M15.425 16C14.715 16.5 14.25 17.32 14.25 18.25H9.74995C9.74995 17.32 9.28495 16.495 8.57495 16H15.425Z" fill="#cdcdcd" opacity="0.5"></path><path d="M18.575 16C19.285 16.5 19.75 17.32 19.75 18.25C20.58 18.25 21.25 17.58 21.25 16.75V16H18.575Z" fill="#cdcdcd" opacity="0.5"></path><path d="M15.15 19C15.055 18.77 15 18.515 15 18.25C15 17.985 15.055 17.73 15.15 17.5H8.84998C8.94498 17.73 8.99998 17.985 8.99998 18.25C8.99998 18.515 8.94498 18.77 8.84998 19H15.15Z"></path><path d="M20.32 6.45C19.99 5.58 19.145 5 18.215 5H14.735C14.61 3.875 13.655 3 12.5 3H4.25C3.01 3 2 4.01 2 5.25V16.75C2 17.99 3.01 19 4.25 19H5.15C5.055 18.77 5 18.515 5 18.25C5 17.985 5.055 17.73 5.15 17.5H4.25C3.835 17.5 3.5 17.165 3.5 16.75V5.25C3.5 4.835 3.835 4.5 4.25 4.5H12.5C12.915 4.5 13.25 4.835 13.25 5.25V6.5H18.215C18.525 6.5 18.805 6.695 18.915 6.985L20.5 11.14V16.75C20.5 17.165 20.165 17.5 19.75 17.5H18.85C18.945 17.73 19 17.985 19 18.25C19 18.515 18.945 18.77 18.85 19H19.75C20.99 19 22 17.99 22 16.75V10.86L20.32 6.45Z"></path><path d="M11.25 11H5.5C4.95 11 4.5 10.55 4.5 10V6.5C4.5 5.95 4.95 5.5 5.5 5.5H11.25C11.8 5.5 12.25 5.95 12.25 6.5V10C12.25 10.55 11.8 11 11.25 11Z" fill="#cdcdcd"></path></svg>
                <p className="text-sm text-slate-600/80 font-[iranyekan500]">
                    ارسال سریع و ارزان کالا
                </p>
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

        <div className="mt-14 w-full px-4 lg:px-10">
            <SectionGroup_1
                title="کالاهای مشابه"
            >
                <ProductSLider_1
                    renderer={(item, i) => <ProductCard_1 key={i} {...item} />}
                    items={[
                        {
                          img: import.meta.env.BASE_URL+"images/img-26.webp",
                          title: "تیشرت مردانه یقه کوبایی Rayan مدل 38107",
                          price: "339000 تومان",
                          available: {
                            show: true,
                            available: false,
                            t: "موجود",
                            f: "ناموجود"
                          }
                        },
                        {
                          img: import.meta.env.BASE_URL+"images/img-18.webp",
                          title: "تیشرت مردانه یقه کوبایی Rayan مدل 38108",
                          price: "231000 تومان",
                          available: {
                            show: true,
                            available: true,
                            t: "موجود",
                            f: "ناموجود"
                          }
                        },
                        {
                          img: import.meta.env.BASE_URL+"images/img-19.webp",
                          title: "تیشرت مردانه یقه کوبایی Rayan مدل 35527",
                          price: "340000 تومان",
                          available: {
                            show: true,
                            available: true,
                            t: "موجود",
                            f: "ناموجود"
                          }
                        },
                        {
                          img: import.meta.env.BASE_URL+"images/img-20.webp",
                          title: "تیشرت مردانه یقه کوبایی Rayan مدل 44532",
                          price: "300000 تومان",
                          available: {
                            show: true,
                            available: true,
                            t: "موجود",
                            f: "ناموجود"
                          }
                        },
                        {
                          img: import.meta.env.BASE_URL+"images/img-21.webp",
                          title: "تیشرت مردانه یقه کوبایی Rayan مدل 45783",
                          price: "295000 تومان",
                          available: {
                            show: true,
                            available: false,
                            t: "موجود",
                            f: "ناموجود"
                          }
                        },
                        {
                          img: import.meta.env.BASE_URL+"images/img-22.webp",
                          title: "تیشرت مردانه یقه کوبایی Rayan مدل 440505",
                          price: "299000 تومان",
                          available: {
                            show: true,
                            available: true,
                            t: "موجود",
                            f: "ناموجود"
                          }
                        },
                        {
                          img: import.meta.env.BASE_URL+"images/img-23.webp",
                          title: "تیشرت مردانه یقه کوبایی Rayan مدل 11208",
                          price: "335000 تومان",
                          available: {
                            show: true,
                            available: true,
                            t: "موجود",
                            f: "ناموجود"
                          }
                        },
                        {
                          img: import.meta.env.BASE_URL+"images/img-24.webp",
                          title: "تیشرت مردانه یقه دو رنگه کوبایی Rayan مدل 505607",
                          price: "335000 تومان",
                          available: {
                            show: true,
                            available: true,
                            t: "موجود",
                            f: "ناموجود"
                          }
                        },
                        {
                          img: import.meta.env.BASE_URL+"images/img-25.webp",
                          title: "تیشرت مردانه یقه کوبایی Rayan مدل 770808",
                          price: "270000 تومان",
                          available: {
                            show: true,
                            available: false,
                            t: "موجود",
                            f: "ناموجود"
                          }
                        },
                        {
                          img: import.meta.env.BASE_URL+"images/img-26.webp",
                          title: "کفش زنانه All Star مدل 60177",
                          price: "300000 تومان",
                          available: {
                            show: true,
                            available: true,
                            t: "موجود",
                            f: "ناموجود"
                          }
                        },
                    ]}
                />
            </SectionGroup_1>
        </div>

        <div className="mt-14 flex items-center gap-x-3 px-4 lg:px-10">
            <p className="text-lg text-slate-500/90 font-[iranyekan500]">
                برچسب ها:
            </p>
            <div className="flex items-center gap-x-2 text-base">
                <p className="text-slate-700/90 text-sm font-[iranyekan400] p-2 px-3 rounded-sm
                bg-slate-200/80 hover:bg-slate-200 transition-colors duration-200 cursor-pointer">طوسی</p>

                <p className="text-slate-700/90 text-sm font-sans font-normal p-2 px-3 rounded-sm
                bg-slate-200/80 hover:bg-slate-200 transition-colors duration-200 cursor-pointer">XXL</p>

                <p className="text-slate-700/90 text-sm font-sans font-normal p-2 px-3 rounded-sm
                bg-slate-200/80 hover:bg-slate-200 transition-colors duration-200 cursor-pointer">XL</p>

                <p className="text-slate-700/90 text-sm font-sans font-normal p-2 px-3 rounded-sm
                bg-slate-200/80 hover:bg-slate-200 transition-colors duration-200 cursor-pointer">XL</p>
            </div>
        </div>
            
    </div>
  )
}

export default SingleProduct