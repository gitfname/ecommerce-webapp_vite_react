import BannerSlider_1 from "../components/BannerSLider_1"
import BlogPostCard_1 from "../components/BlogPostCard_1"
import ProductCard_1 from "../components/ProductCard_1"
import ProductSLider_1 from "../components/ProductSLider_1"
import SectionGroup_1 from "../components/SectionGroup_1"

function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto pb-20">
      <BannerSlider_1 />

      <div className="mt-6 grid grid-cols-3 gap-6 px-10 place-items-center max-lg:hidden">
        <img
          alt=""
          src={import.meta.env.BASE_URL+"/images/Horizental_1_D.webp"}
          className="w-auto h-auto object-center object-cover rounded-sm"
        />

        <img
          alt=""
          src={import.meta.env.BASE_URL+"/images/Horizental_2_D.webp"}
          className="w-auto h-auto object-center object-cover rounded-sm"
        />

        <img
          alt=""
          src={import.meta.env.BASE_URL+"/images/Horizental_3_D.webp"}
          className="w-auto h-auto object-center object-cover rounded-sm"
        />
      </div>

      <div className="w-full mt-14 px-4 lg:px-10">
        <SectionGroup_1
          title="دسته بندی های تابستانه"
        >
          <div className="w-full grid max-lg:place-items-center lg:grid-cols-[30%_70%] lg:border border-slate-300">
              <div className="place-self-center max-lg:hidden">
                  <img
                    alt=""
                    src={import.meta.env.BASE_URL+"/images/img-7.webp"}
                    className="w-32 h-auto object-center object-cover rounded-sm block"
                  />
                  <p className="text-sm text-slate-800 font-[iranyekan500] text-center mt-5">
                    انواع تیشرت مردانه
                  </p>
              </div>

              <div className="w-full grid grid-cols-2 max-lg:gap-3 lg:grid-cols-3 lg:border-r border-slate-300">
                <div className="max-lg:border max-lg:rounded-xl border-b lg:hidden border-l border-slate-300 flex max-md:flex-col gap-y-3 items-center gap-x-3 p-6 cursor-pointer">
                  <img
                    alt=""
                    src={import.meta.env.BASE_URL+"/images/img-7.webp"}
                    className="w-20 h-auto object-center object-cover rounded-sm"
                  />
                  <p className="text-sm text-slate-800 font-[iranyekan500]">
                    انواع تیشرت مردانه
                  </p>
                </div>

                <div className="max-lg:border max-lg:rounded-xl border-b border-l border-slate-300 flex max-md:flex-col gap-y-3 items-center gap-x-3 p-6 cursor-pointer">
                  <img
                    alt=""
                    src={import.meta.env.BASE_URL+"/images/img-1.webp"}
                    className="w-20 h-auto object-center object-cover rounded-sm"
                  />
                  <p className="text-sm text-slate-800 font-[iranyekan500]">
                    انواع شلوار مردانه
                  </p>
                </div>

                <div className="max-lg:border max-lg:rounded-xl border-b border-l border-slate-300 flex max-md:flex-col gap-y-3 items-center gap-x-3 p-6 cursor-pointer">
                  <img
                    alt=""
                    src={import.meta.env.BASE_URL+"/images/img-3.webp"}
                    className="w-20 h-auto object-center object-cover rounded-sm"
                  />
                  <p className="text-sm text-slate-800 font-[iranyekan500]">
                    انواع پیراهن مردانه
                  </p>
                </div>

                <div className="max-lg:border max-lg:rounded-xl border-b border-slate-300 flex max-md:flex-col gap-y-3 items-center gap-x-3 p-6 cursor-pointer">
                  <img
                    alt=""
                    src={import.meta.env.BASE_URL+"/images/img-2.webp"}
                    className="w-20 h-auto object-center object-cover rounded-sm"
                  />
                  <p className="text-sm text-slate-800 font-[iranyekan500]">
                    انواع پوشاک و کفش زنانه
                  </p>
                </div>

                <div className="max-lg:border max-lg:rounded-xl border-l border-slate-300 flex max-md:flex-col gap-y-3 items-center gap-x-3 p-6 cursor-pointer">
                  <img
                    alt=""
                    src={import.meta.env.BASE_URL+"/images/img-5.webp"}
                    className="w-20 h-auto object-center object-cover rounded-sm"
                  />
                  <p className="text-sm text-slate-800 font-[iranyekan500]">
                    انواع کفش اسپورت مردانه
                  </p>
                </div>

                <div className="max-lg:border max-lg:rounded-xl border-l border-slate-300 flex max-md:flex-col gap-y-3 items-center gap-x-3 p-6 cursor-pointer">
                  <img
                    alt=""
                    src={import.meta.env.BASE_URL+"/images/img-4.webp"}
                    className="w-20 h-auto object-center object-cover rounded-sm"
                  />
                  <p className="text-sm text-slate-800 font-[iranyekan500]">
                    انواع بلوز مردانه
                  </p>
                </div>

                <div className="max-lg:border max-lg:rounded-xl border-slate-300 flex max-md:flex-col gap-y-3 items-center gap-x-3 p-6 cursor-pointer">
                  <img
                    alt=""
                    src={import.meta.env.BASE_URL+"/images/img-6.webp"}
                    className="w-20 h-auto object-center object-cover rounded-sm"
                  />
                  <p className="text-sm text-slate-800 font-[iranyekan500]">
                    انواع هودی
                  </p>
                </div>

              </div>
          </div>
        </SectionGroup_1>
      </div>

      <div className="mt-14 w-full">
        <SectionGroup_1
          className="py-10 bg-slate-100/60 px-4 lg:px-10"
          title="جدید ترین ها"
          seeMore
        >
          <ProductSLider_1
            prevNextBtnClassName="bg-slate-200 hover:bg-slate-300/90"
            items={[
              {
                img: import.meta.env.BASE_URL+"/images/img-8.webp",
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
                img: import.meta.env.BASE_URL+"/images/img-9.webp",
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
                img: import.meta.env.BASE_URL+"/images/img-10.webp",
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
                img: import.meta.env.BASE_URL+"/images/img-11.webp",
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
                img: import.meta.env.BASE_URL+"/images/img-12.webp",
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
                img: import.meta.env.BASE_URL+"/images/img-13.webp",
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
                img: import.meta.env.BASE_URL+"/images/img-14.webp",
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
                img: import.meta.env.BASE_URL+"/images/img-15.webp",
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
                img: import.meta.env.BASE_URL+"/images/img-16.webp",
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
                img: import.meta.env.BASE_URL+"/images/img-17.webp",
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
            renderer={item => <ProductCard_1 {...item} />}
          />
        </SectionGroup_1>
      </div>

      <div className="mt-14 w-full">
        <SectionGroup_1
          className="px-4 lg:px-10"
          title="شگفت انگیز ها"
          seeMore
        >
          <ProductSLider_1
            items={[
              {
                img: import.meta.env.BASE_URL+"/images/img-8.webp",
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
                img: import.meta.env.BASE_URL+"/images/img-9.webp",
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
                img: import.meta.env.BASE_URL+"/images/img-10.webp",
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
                img: import.meta.env.BASE_URL+"/images/img-11.webp",
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
                img: import.meta.env.BASE_URL+"/images/img-12.webp",
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
                img: import.meta.env.BASE_URL+"/images/img-13.webp",
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
                img: import.meta.env.BASE_URL+"/images/img-14.webp",
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
                img: import.meta.env.BASE_URL+"/images/img-15.webp",
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
                img: import.meta.env.BASE_URL+"/images/img-16.webp",
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
                img: import.meta.env.BASE_URL+"/images/img-17.webp",
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
            renderer={(item, i) => <ProductCard_1 key={i} {...item} />}
          />
        </SectionGroup_1>
      </div>

      <div className="mt-14 w-full px-4 lg:px-10">
        <img
          alt=""
          src={import.meta.env.BASE_URL+"/images/Single_1_D.webp"}
          className="w-auto h-auto object-center object-cover max-sm:hidden"
        />
      </div>

      <div className="w-full mt-14 px-4 lg:px-10">
        <SectionGroup_1
          title="مجله دایان شاپ"
          seeMore
          seeMoreSideText="مشاهده بلاگ"
        >
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4">
            <BlogPostCard_1
              img={import.meta.env.BASE_URL+"/images/blog-post-img-1.jpg"}
              title="30 مدل لباس کردی زنانه زیبا و خیره کننده"
              subtitle="
              بیایید درباره مدل لباس کردی زنانه صحبت کنیم. لباس اقوام مختلف کرد با وجود شباهت زیاد، در بعضی نکات مثل نحوه بستن شال دور کمر یا روسری سر کردن زن ها با هم تفاوت دارد. اگر دوست دارید لباس کردی زنانه را بشناسید متن زیر را دنبال کنید. همچنین بهترین ایده های لباس کردی 1401 [&hellip;]
              "
            />

            <BlogPostCard_1
              img={import.meta.env.BASE_URL+"/images/blog-post-img-2.jpg"}
              title="استایل مونوکروم چیست؟ 25 استایل جذاب و متفاوت"
              subtitle="
              اگر می خواهید جذاب باشید لازم نیست حتما لباس های رنگارنگ بپوشید. می توانید با لباس های تک رنگ و استفاده از طیف های یک رنگ تیپ زیبایی داشته باشید. در این مقاله از دایان شاپ جدیدترین استایل مونوکروم یا (استایل تک رنگ) و انواع آن را همراه با به روزترین عکس ها برای هر [&hellip;]
              "
            />

            <BlogPostCard_1
              img={import.meta.env.BASE_URL+"/images/blog-post-img-3.jpg"}
              title="جدیدترین مدل های شلوار اسکینی مردانه; ترند های 2023"
              subtitle="
              اگر دنبال تیپی خاص و در عین حال منحصر به فرد هستید، شلوار اسکینی مردانه جزو انتخاب های خوبی و مناسب به حساب می آید. شلوار اسکینی مردانه شامل مدل های جین، کتان، پارچه ای و&#8230; می شود. اگر می خواهید جدیدترین مدل ها را مشاهده کنید حتما این مقاله از دایان شاپ را به [&hellip;]
              "
            />
          </div>
        </SectionGroup_1>
      </div>
    </div>
  )
}

export default Home