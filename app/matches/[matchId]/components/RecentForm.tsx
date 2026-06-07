import { RecentMatch } from '@/lib/matchData'

type Team = { name: string; flag: string; shortCode: string }

type Props = {
  homeTeam: Team
  awayTeam: Team
  homeForm: RecentMatch[]
  awayForm: RecentMatch[]
}

function ResultPill({ match }: { match: RecentMatch }) {
  const colorMap = {
    W: 'bg-green-100 text-green-800 border-green-200',
    D: 'bg-gray-100 text-gray-700 border-gray-200',
    L: 'bg-red-100 text-red-700 border-red-200',
  }
  return (
    <div className={`rounded-lg border px-2 py-1 text-center min-w-0 ${colorMap[match.result]}`}>
      <div className="text-[9px] font-bold">{match.result} {match.score}</div>
      <div className="text-[8px] opacity-80 truncate max-w-[52px]">vs {match.opponent}</div>
      <div className="text-[7px] opacity-60 truncate max-w-[52px]">{match.competition}</div>
    </div>
  )
}

export default function RecentForm({ homeTeam, awayTeam, homeForm, awayForm }: Props) {
  return (
    <div className="rounded-xl bg-white border border-gray-100 shadow-sm px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#00A651] mb-3">
        Recent Form
      </p>

      {/* Home team */}
      <div className="mb-3">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-sm">{homeTeam.flag}</span>
          <span className="text-xs font-semibold text-gray-700">{homeTeam.name}</span>
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {homeForm.map((m, i) => (
            <div key={i} className="flex-shrink-0">
              <ResultPill match={m} />
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 mb-3" />

      {/* Away team */}
      <div>
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-sm">{awayTeam.flag}</span>
          <span className="text-xs font-semibold text-gray-700">{awayTeam.name}</span>
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {awayForm.map((m, i) => (
            <div key={i} className="flex-shrink-0">
              <ResultPill match={m} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
