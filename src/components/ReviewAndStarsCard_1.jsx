
import { GoStar } from "react-icons/go"

function ReviewAndStarsCard_1({stars=0, commentsAmount=0, title={t:"دیدگاه ثبت شده است", f:"دیدگاهی ثبت نشده است"}}) {
  return (
    <div
        className="flex items-center gap-x-2"
    >

      <div className="flex items-center gap-x-0.5">
        <GoStar className="w-4 h-4 fill-slate-400/80" />
        <GoStar className="w-4 h-4 fill-slate-400/80" />
        <GoStar className="w-4 h-4 fill-slate-400/80" />
        <GoStar className="w-4 h-4 fill-slate-400/80" />
        <GoStar className="w-4 h-4 fill-slate-400/80" />
      </div>

      <p className="text-xs text-slate-700 font-[iranyekan500]">
        {commentsAmount}
        &nbsp;
        {
          commentsAmount > 0
          ?
            title.t
          :
           <span className="text-xs">( {title.f} )</span>
        }
      </p>

    </div>
  )
}

export default ReviewAndStarsCard_1