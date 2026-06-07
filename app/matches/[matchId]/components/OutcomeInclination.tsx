type Props = {
  homeWin: number
  draw: number
  awayWin: number
}

export default function OutcomeInclination({ homeWin, draw, awayWin }: Props) {
  return (
    <div className="rounded-xl bg-white border border-gray-100 shadow-sm px-4 py-3">
      <div className="flex items-center gap-1.5 mb-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#00A651]">Outcome Inclination</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      </div>

      {/* Gradient bar */}
      <div className="relative h-2.5 rounded-full overflow-hidden flex mb-4">
        <div
          className="h-full rounded-l-full"
          style={{ width: `${homeWin}%`, background: '#00A651' }}
        />
        <div
          className="h-full"
          style={{ width: `${draw}%`, background: '#9ca3af' }}
        />
        <div
          className="h-full rounded-r-full"
          style={{ width: `${awayWin}%`, background: '#f59e0b' }}
        />
      </div>

      {/* Stats row */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-[#00A651]">{homeWin}%</span>
          <span className="text-[10px] text-gray-500 uppercase tracking-wide mt-0.5">Home Win</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-gray-500">{draw}%</span>
          <span className="text-[10px] text-gray-500 uppercase tracking-wide mt-0.5">Draw</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold text-amber-500">{awayWin}%</span>
          <span className="text-[10px] text-gray-500 uppercase tracking-wide mt-0.5">Away Win</span>
        </div>
      </div>
    </div>
  )
}
