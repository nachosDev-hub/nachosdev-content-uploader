import { Player } from '@/lib/matchData'

type Props = {
  teamName: string
  flag: string
  left: Player[]
  right: Player[]
}

function FitBar({ fit }: { fit: number }) {
  return (
    <div className="flex items-center gap-1">
      <div className="w-10 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${fit}%`,
            background: fit >= 80 ? '#00A651' : fit >= 70 ? '#f59e0b' : '#ef4444',
          }}
        />
      </div>
      <span className="text-[9px] text-gray-500">{fit}%</span>
    </div>
  )
}

function PlayerRow({ player }: { player: Player }) {
  return (
    <div className="flex items-center gap-1 py-1 border-b border-gray-50 last:border-0">
      <span className="text-[10px] text-gray-400 w-4 text-right flex-shrink-0">{player.number}</span>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-medium text-gray-800 truncate leading-tight">{player.name}</p>
        <p className="text-[9px] text-gray-400 uppercase">{player.pos}</p>
      </div>
      <FitBar fit={player.fit} />
    </div>
  )
}

export default function StartingXI({ teamName, flag, left, right }: Props) {
  return (
    <div className="rounded-xl bg-white border border-gray-100 shadow-sm px-4 py-3">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          <span className="text-sm">{flag}</span>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00A651]">
            {teamName} Starting XI
          </p>
        </div>
        <button className="text-[10px] text-[#00A651] hover:underline flex items-center gap-0.5">
          View full squad
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-2 gap-2 mb-1">
        {[left, right].map((_, colIdx) => (
          <div key={colIdx} className="flex items-center gap-1">
            <span className="text-[9px] text-gray-400 w-4 text-right">#</span>
            <div className="flex-1">
              <span className="text-[9px] text-gray-400 uppercase tracking-wide">Player</span>
            </div>
            <span className="text-[9px] text-gray-400">Fit</span>
          </div>
        ))}
      </div>

      {/* Players grid */}
      <div className="grid grid-cols-2 gap-x-3">
        <div>
          {left.map((player, i) => (
            <PlayerRow key={i} player={player} />
          ))}
        </div>
        <div>
          {right.map((player, i) => (
            <PlayerRow key={i} player={player} />
          ))}
        </div>
      </div>
    </div>
  )
}
