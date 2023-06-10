
function SectionGroup_1({title="", seeMore=false, seeMoreSideText="مشاهده همه", children, className}) {
  return (
    <div className={`w-full ${className}`}>
        <div className="flex items-center justify-between mb-8">
            <p
                className="text-lg text-slate-800 font-[iranyekan600]"
            >
                {title}
            </p>

            {
                seeMore
                ?
                    <p
                        className="text-sm cursor-pointer hover:text-slate-600 transition-colors duration-200 stext-slate-800 font-[iranyekan500]"
                    >
                        {seeMoreSideText}
                    </p>

                :
                    false
            }

        </div>

        {children}
    </div>
  )
}

export default SectionGroup_1