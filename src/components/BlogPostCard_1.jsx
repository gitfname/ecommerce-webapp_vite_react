
function BlogPostCard_1({title="", subtitle="", img=""}) {
  return (
    <div>
        <img
            alt=""
            src={img}
            className="w-full aspect-video rounded-lg object-center object-cover shadow-md shadow-black/10"
        />

        <div className="mt-2 p-2.5">
            <p
                className="text-sm text-slate-700 font-[iranyekan500] line-clamp-2"
            >
                {title}
            </p>

            <p
                className="text-xs leading-5 text-slate-600/80 font-[iranyekan500] line-clamp-4 mt-3"
            >
                {subtitle}
            </p>
        </div>
    </div>
  )
}

export default BlogPostCard_1