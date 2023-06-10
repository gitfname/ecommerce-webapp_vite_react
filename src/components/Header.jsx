import { Link } from "react-router-dom"
import ShopingCart_1 from "./ShopingCart_1"
import { AiOutlineSearch } from "react-icons/ai"
import MegaMenu from "./MegaMenu"
import MobileMenu from "./MobileMenu"

const megaMenu_1 = [
    {
        id: "c73vd52",
        text: "کیف مردانه",
        items: [
            {
                id: "6b275xd2",
                text: "فولدر چرمی"
            },
            {
                id: "h246fb3",
                text: "کوله و ساک ورزشی"
            },
            {
                id: "sjc2746dv35",
                text: "کیف اداری"
            },
            {
                id: "j358g6dg4",
                text: "کیف دوشی"
            },
            {
                id: "fj5k78d63g5",
                text: "کیف پول"
            },
            {
                id: "bf5gg72n4c",
                text: "ست چرمی"
            },
            {
                id: "dfu5623",
                text: "کوله پشتی"
            },
        ]
    },
    {
        id: "d328643",
        text: "کفش مردانه",
        items: [
            {
                id: "fh4856vdc355h",
                text: "کفش رسمی"
            },
            {
                id: "8v6v3cv7365",
                text: "کفش اسپورت و ورزشی"
            },
            {
                id: "x9375vb275ct",
                text: "نیم بوت"
            },
            {
                id: "v497vc4r3",
                text: "صندل مردانه"
            },
            {
                id: "385bx2537b",
                text: "کفش روزمره"
            },
        ]
    },
    {
        id: "h275vdd",
        text: "لباس مردانه",
        items: [
            {
                id: "374c1x684c5",
                text: "بلوز مردانه"
            },
            {
                id: "483bc73v52x2",
                text: "رکابی مردانه"
            },
            {
                id: "dhs74vd5w",
                text: "شلوارک مردانه"
            },
            {
                id: "hfg6rx456",
                text: "ست دونفره"
            },
            {
                id: "3856bxvc325",
                text: "شلوار مردانه"
            },
            {
                id: "4834cjc72vc",
                text: "هودی و سویشرت"
            },
            {
                id: "vjd8365b2v",
                text: "کاپشن و کت"
            },
            {
                id: "chw84632gcx",
                text: "تیشرت مردانه"
            },
            {
                id: "f8e6r34vc5",
                text: "پیراهن"
            },
            {
                id: "vj49672tv4g",
                text: "ست مردانه"
            },
            {
                id: "hg835f4jd24",
                text: "بافت"
            },
            {
                id: "gjh9387h2",
                text: "کلاه"
            }
        ]
    }
]

const megaMenu_2 = [
    {
        id: "c73vd52",
        text: "کیف زنانه",
        items: [
            {
                id: "6b275xd2",
                text: "کیف لوازم آرایشی"
            },
            {
                id: "h246fb3",
                text: "کیف پول"
            },
            {
                id: "sjc2746dv35",
                text: "کیف اداری"
            },
            {
                id: "j358g6dg4",
                text: "کیف دوشی"
            },
            {
                id: "fj5k78d63g5",
                text: "کیف پول"
            },
            {
                id: "bf5gg72n4c",
                text: "ست چرمی"
            }
        ]
    },
    {
        id: "d328643",
        text: "کفش زنانه",
        items: [
            {
                id: "fh4856vdc355h",
                text: "رسمی"
            },
            {
                id: "8v6v3cv7365",
                text: "راحتی"
            },
            {
                id: "x9375vb275ct",
                text: "اسپورت"
            },
            {
                id: "v497vc4r3",
                text: "بوت"
            },
            {
                id: "385bx2537b",
                text: "صندل زنانه"
            },
            {
                id: "fghe73642f3",
                text: "نیم بوت"
            },
        ]
    },
    {
        id: "h275vdd",
        text: "لباس زنانه",
        items: [
            {
                id: "374c1x684c5",
                text: "بلوز زنانه"
            },
            {
                id: "483bc73v52x2",
                text: "کلاه"
            },
            {
                id: "dhs74vd5w",
                text: "ست دونفره"
            },
            {
                id: "hfg6rx456",
                text: "مانتو"
            },
            {
                id: "3856bxvc325",
                text: "شلوار"
            },
            {
                id: "4834cjc72vc",
                text: "هودی و سویشرت"
            },
            {
                id: "vjd8365b2v",
                text: "ست زنانه"
            },
            {
                id: "chw84632gcx",
                text: "شال و روسری"
            },
            {
                id: "f8e6r34vc5",
                text: "تیشرت و تونیک"
            },
            {
                id: "vj49672tv4g",
                text: "بافت"
            },
            {
                id: "hg835f4jd24",
                text: "کاپشن"
            },
            {
                id: "gjh9387h2",
                text: "پیراهن و لباس مجلسی زنانه"
            }
        ]
    }
]

const megaMenu_3 = [
    {
        id: "hhd6254",
        text: "هدیه"
    },
    {
        id: "dh2746d",
        text: "عطر و ادکلن",
        items: [
            {
                id: "dh275",
                text: "عطر و ادکلن مردانه"
            },
            {
                id: "f6254jf",
                text: "عطر و ادکلن زنانه"
            }
        ]
    },
    {
        id: "he73vc53",
        text: "عینک",
        items: [
            {
                id: "fh2745g2z",
                text: "عینک روزمره"
            },
            {
                id: "3957bxvz2",
                text: "عینک آفتابی مردانه"
            },
            {
                id: "fi362g43",
                text: "عینک آفتابی زنانه"
            }
        ]
    },
    {
        id: "304nxb35",
        text: "گجت پوشیدنی",
        items: [
            {
                id: "dfh476gd",
                text: "مچ بندی هوشمند"
            },
            {
                id: "hf7353fg2",
                text: "ساعت هوشمند"
            }
        ]
    },
    {
        id: "f386fg53",
        text: "ست ساعت مچی"
    },
    {
        id: "hhf76os",
        text: "ساعت مچی عقربه ای",
        items: [
            {
                id: "7264nnfb52",
                text: "ساعت مجی عقربه ای مردانه"
            },
            {
                id: "fhf37v2423",
                text: "ساعت مجی عقربه ای زنانه"
            }
        ]
    },
    {
        id: "rg467fv243",
        text: "ساعت مچی دیجیتال",
        items: [
            {
                id: "7264nnfb52",
                text: "ساعت مجی دیجیتال مردانه"
            },
            {
                id: "fhf37v2423",
                text: "ساعت مجی دیجیتال زنانه"
            }
        ]
    },
    {
        id: "h765vs42",
        text: "زیور آلات",
        items: [
            {
                id: "836dv243c2",
                text: "گوشواره"
            },
            {
                id: "hhdf3756f",
                text: "گردنبند"
            },
            {
                id: "djvb37565sc",
                text: "ست زیورآلات"
            },
            {
                id: "7md62f4",
                text: "دستبند"
            },
            {
                id: "fjh937dve",
                text: "انگشتر"
            }
        ]
    },
    {
        id: "hg837vd",
        text: "کمربند مردانه",
        items: []
    }
]

function Header() {
  return (
    <div className="w-full max-w-7xl px-4 lg:px-10 mx-auto py-6">
        <div className="w-full flex items-center justify-between">

            <div className="flex items-center gap-x-8 flex-1">
                <div className="sm:hidden">
                    <MobileMenu />
                </div>
                {/* logo */}
                <Link
                    to="/"
                >
                    <svg viewBox="0 0 120 19" className="inline-block w-40" fill="currentColor"><path d="M27.5125 6.99902V0.642822H24.743V6.99902C24.743 9.60577 26.9295 11.7483 29.5897 11.7483H49.3407V9.03443H29.5897C28.46 9.03443 27.5125 8.106 27.5125 6.99902Z"></path><path d="M62.7874 0.714111H60.2001V2.89235H62.7874V0.714111Z"></path><path d="M42.3081 4.3922V2.17824V0H39.7208V2.17824H37.5343H34.5098V4.3922H37.5343H42.3081Z"></path><path d="M85.0893 14.1404V16.3543H88.1139H92.8877V14.1404H88.1139H85.0893Z"></path><path d="M76.5262 7.07031V0.714111H73.7567V7.07031C73.7567 9.67706 75.9432 11.8196 78.6034 11.8196H92.8882V9.10572H78.6034C77.4737 9.10572 76.5262 8.17728 76.5262 7.07031Z"></path><path d="M115.153 0.714111H100.869V3.42799H115.153C116.319 3.42799 117.231 4.35642 117.231 5.4634V7.0346C117.231 8.17728 116.283 9.07001 115.153 9.07001H100.869V11.7839H115.153C117.814 11.7839 120 9.64135 120 7.0346V5.4634C120 2.85665 117.814 0.714111 115.153 0.714111Z"></path><path d="M95.5118 11.8196H98.2448V0.714111H95.5118V11.8196Z"></path><path d="M68.2904 7.07031C68.2904 8.21299 67.3429 9.10572 66.2133 9.10572H56.7751C55.609 9.10572 54.6979 8.17728 54.6979 7.07031V0.714111H51.9284V7.07031C51.9284 9.67706 54.1149 11.8196 56.7751 11.8196H66.2133C68.8735 11.8196 71.0599 9.67706 71.0599 7.07031V0.714111H68.2904V7.07031Z"></path><path d="M7.14233 14.105V16.2832H10.1669H12.3534V18.4615H14.9407V16.2832V14.105H10.1669H7.14233Z"></path><path d="M19.3866 6.99913C19.3866 8.14182 18.4391 9.03454 17.3094 9.03454H4.84666C3.68055 9.03454 2.7695 8.10611 2.7695 6.99913V5.17798H0V6.99913C0 9.60588 2.18647 11.7484 4.84666 11.7484H17.3094C20.0061 11.7484 22.1561 9.60588 22.1561 6.99913V5.17798H19.3866V6.99913Z"></path></svg>
                </Link>

                {/* search input */}
                <div className="relative w-full max-w-sm max-lg:hidden">
                    <AiOutlineSearch className="w-5 h-5 fill-slate-700 absolute top-1/2 right-4 -translate-y-1/2 z-10 pointer-events-none" />
                    <input
                        type="text"
                        className="w-full focus:outline-none rounded-lg border border-slate-400/80 p-2 pr-10 text-sm
                        font-[iranyekan400] tracking-wide placeholder-slate-500/90 text-slate-800"
                        placeholder="کالای موردنظر را تایپ کنید"
                        maxLength={90}
                    />
                </div>
            </div>

            {/* shoping cart  */}
            <ShopingCart_1 />

        </div>

        <div tabIndex={0} className="mt-10 flex items-center justify-between relative group max-sm:hidden z-50">

            <div className="flex items-center gap-x-2">

                <MegaMenu
                    title="مردانه"
                    items={megaMenu_1}
                />
                <MegaMenu
                    title="زنانه"
                    items={megaMenu_2}
                />
                <MegaMenu
                    title="اکسسوری"
                    items={megaMenu_3}
                />

            </div>

            <Link
                to="/blog"
                className="text-base font-[iranyekan600] text-slate-700 hover:text-red-400 transition-colors duration-300"
            >
                مجله دایان شاپ
            </Link>

        </div>
    </div>
  )
}

export default Header