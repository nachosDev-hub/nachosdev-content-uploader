import { MatchData } from '@/lib/matchData'

type Props = { match: MatchData }

export default function MatchHeroCard({ match }: Props) {
  return (
    <div
      className="rounded-xl overflow-hidden border border-gray-100 shadow-sm"
      style={{
        background: 'linear-gradient(160deg, #E8F7EF 0%, #f0faf5 40%, #ffffff 100%)',
      }}
    >
      {/* Match type badge */}
      <div className="pt-3 px-4 flex justify-center">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#00A651] bg-white border border-[#00A651]/20 px-3 py-0.5 rounded-full">
          {match.matchType}
        </span>
      </div>

      {/* Teams + VS */}
      <div className="flex items-center justify-between px-6 pt-4 pb-2">
        {/* Home team */}
        <div className="flex flex-col items-center gap-1 flex-1">
          <span className="text-5xl leading-none">{match.homeTeam.flag}</span>
          <span className="text-sm font-semibold text-gray-800 mt-1">{match.homeTeam.name}</span>
        </div>

        {/* VS */}
        <div className="flex flex-col items-center px-2">
          <span className="text-xl font-bold text-gray-400 tracking-widest">VS</span>
        </div>

        {/* Away team */}
        <div className="flex flex-col items-center gap-1 flex-1">
          <span className="text-5xl leading-none">{match.awayTeam.flag}</span>
          <span className="text-sm font-semibold text-gray-800 mt-1">{match.awayTeam.name}</span>
        </div>
      </div>

      {/* Match details */}
      <div className="px-4 pb-3 pt-1 space-y-1.5">
        <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span>{match.date}</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          <span>{match.localTime} · {match.gmtOffset}</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>{match.venue}, {match.city}</span>
        </div>
      </div>

      {/* Updated timestamp */}
      <div className="px-4 pb-3 flex items-center justify-center gap-1.5">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#00A651" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10"/>
          <path d="M20.49 15a9 9 0 1 1-.08-8.49"/>
        </svg>
        <span className="text-[10px] text-gray-400">Updated {match.updatedAt}</span>
      </div>
    </div>
  )
}
