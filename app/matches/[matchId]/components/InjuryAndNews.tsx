import { MatchData } from '@/lib/matchData'

type Props = { match: MatchData }

export default function InjuryAndNews({ match }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Injury Watch */}
      <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-3">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#00A651] mb-2">
          Injury Watch
        </p>

        {/* Home */}
        <div className="mb-3">
          <div className="flex items-center gap-1 mb-1.5">
            <span className="text-xs">{match.homeTeam.flag}</span>
            <span className="text-[10px] font-semibold text-gray-700">{match.homeTeam.name}</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span className="text-[9px] text-gray-600">Unavailable</span>
              </div>
              <span className="text-[10px] font-bold text-gray-700">{match.homeInjury.unavailable}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                <span className="text-[9px] text-gray-600">Doubtful</span>
              </div>
              <span className="text-[10px] font-bold text-gray-700">{match.homeInjury.doubtful}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                <span className="text-[9px] text-gray-600">Monitored</span>
              </div>
              <span className="text-[10px] font-bold text-gray-700">{match.homeInjury.monitored}</span>
            </div>
          </div>
        </div>

        {/* Away */}
        <div className="border-t border-gray-100 pt-2 mb-2">
          <div className="flex items-center gap-1 mb-1.5">
            <span className="text-xs">{match.awayTeam.flag}</span>
            <span className="text-[10px] font-semibold text-gray-700">{match.awayTeam.name}</span>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span className="text-[9px] text-gray-600">Unavailable</span>
              </div>
              <span className="text-[10px] font-bold text-gray-700">{match.awayInjury.unavailable}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                <span className="text-[9px] text-gray-600">Doubtful</span>
              </div>
              <span className="text-[10px] font-bold text-gray-700">{match.awayInjury.doubtful}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" />
                <span className="text-[9px] text-gray-600">Monitored</span>
              </div>
              <span className="text-[10px] font-bold text-gray-700">{match.awayInjury.monitored}</span>
            </div>
          </div>
        </div>

        <button className="flex items-center gap-0.5 text-[9px] text-[#00A651] hover:underline mt-1">
          View full injury report
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      {/* Related News */}
      <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-3">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#00A651] mb-2">
          Related News
        </p>
        <div className="space-y-2">
          {match.relatedNews.map((item, i) => (
            <div key={i} className="flex items-start gap-2 border-b border-gray-50 pb-2 last:border-0 last:pb-0">
              {/* Thumb placeholder */}
              <div
                className="w-10 h-10 rounded-md flex-shrink-0"
                style={{
                  background: i === 0 ? '#E8F7EF' : i === 1 ? '#FEF3C7' : '#EDE9FE',
                }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-[9px] font-medium text-gray-800 leading-tight line-clamp-2">{item.headline}</p>
                <p className="text-[8px] text-gray-400 mt-0.5">{item.timeAgo}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="flex items-center gap-0.5 text-[9px] text-[#00A651] hover:underline mt-2">
          View all news
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
