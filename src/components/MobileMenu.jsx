import { useState } from "react"
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai"
import { Link } from "react-router-dom"


function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="p-2 rounded-lg bg-slate-100 grid place-items-center active:scale-95 transition-transform duration-200">
                <AiOutlineMenu className="w-5 h-5 fill-slate-800" />
            </button>
            <div
                className={`fixed top-0 left-0 w-full h-full pointer-events-none z-50
                ${isOpen?"!pointer-events-auto":""}
                `}
            >
                <div
                    onClick={() => setIsOpen(false)}
                    className={`absolute top-0 left-0 z-10 w-full h-full bg-black/40 pointer-events-none opacity-0
                    transition-opacity duration-300
                    ${isOpen?"!opacity-100 !pointer-events-auto":""}`}
                ></div>

                <div
                    className={`w-64 h-full bg-white absolute top-0 right-0 translate-x-full z-20
                    flex flex-col gap-y-3 pt-6
                    transition-transform duration-300 ${isOpen?"!translate-x-0":""}`}
                >

                    <Link
                        to="/"
                        className="mx-auto mb-6"
                    >
                        <svg viewBox="0 0 120 19" className="inline-block w-32" fill="currentColor"><path d="M27.5125 6.99902V0.642822H24.743V6.99902C24.743 9.60577 26.9295 11.7483 29.5897 11.7483H49.3407V9.03443H29.5897C28.46 9.03443 27.5125 8.106 27.5125 6.99902Z"></path><path d="M62.7874 0.714111H60.2001V2.89235H62.7874V0.714111Z"></path><path d="M42.3081 4.3922V2.17824V0H39.7208V2.17824H37.5343H34.5098V4.3922H37.5343H42.3081Z"></path><path d="M85.0893 14.1404V16.3543H88.1139H92.8877V14.1404H88.1139H85.0893Z"></path><path d="M76.5262 7.07031V0.714111H73.7567V7.07031C73.7567 9.67706 75.9432 11.8196 78.6034 11.8196H92.8882V9.10572H78.6034C77.4737 9.10572 76.5262 8.17728 76.5262 7.07031Z"></path><path d="M115.153 0.714111H100.869V3.42799H115.153C116.319 3.42799 117.231 4.35642 117.231 5.4634V7.0346C117.231 8.17728 116.283 9.07001 115.153 9.07001H100.869V11.7839H115.153C117.814 11.7839 120 9.64135 120 7.0346V5.4634C120 2.85665 117.814 0.714111 115.153 0.714111Z"></path><path d="M95.5118 11.8196H98.2448V0.714111H95.5118V11.8196Z"></path><path d="M68.2904 7.07031C68.2904 8.21299 67.3429 9.10572 66.2133 9.10572H56.7751C55.609 9.10572 54.6979 8.17728 54.6979 7.07031V0.714111H51.9284V7.07031C51.9284 9.67706 54.1149 11.8196 56.7751 11.8196H66.2133C68.8735 11.8196 71.0599 9.67706 71.0599 7.07031V0.714111H68.2904V7.07031Z"></path><path d="M7.14233 14.105V16.2832H10.1669H12.3534V18.4615H14.9407V16.2832V14.105H10.1669H7.14233Z"></path><path d="M19.3866 6.99913C19.3866 8.14182 18.4391 9.03454 17.3094 9.03454H4.84666C3.68055 9.03454 2.7695 8.10611 2.7695 6.99913V5.17798H0V6.99913C0 9.60588 2.18647 11.7484 4.84666 11.7484H17.3094C20.0061 11.7484 22.1561 9.60588 22.1561 6.99913V5.17798H19.3866V6.99913Z"></path></svg>
                    </Link>
                    
                    <div className="space-y-5 px-3 pr-6">
                        <p
                            className="text-base text-slate-800 font-[iranyekan500]"
                        >
                            سبد خرید
                        </p>

                        <p
                            className="text-base text-slate-800 font-[iranyekan500]"
                        >
                            مردانه
                        </p>

                        <p
                            className="text-base text-slate-800 font-[iranyekan500]"
                        >
                            زنانه
                        </p>

                        <p
                            className="text-base text-slate-800 font-[iranyekan500]"
                        >
                            اکسسوری
                        </p>
                    </div>

                    <div className="mt-auto flex items-center gap-x-2 p-3 justify-center mb-6 mx-auto w-max rounded-xl
                    bg-slate-100 px-6">
                        <AiOutlineUser className="w-5 h-5 fill-slate-700" />
                        <p
                            className="text-base text-slate-800 font-[iranyekan500]"
                        >
                            حساب کاربری
                        </p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default MobileMenu