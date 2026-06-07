import { MatchData } from '@/lib/matchData'

type Props = { match: MatchData }

type Position = { name: string; x: number; y: number }

function PlayerDot({ pos, color }: { pos: Position; color: string }) {
  // x and y are 0-100 percentages
  return (
    <g>
      <circle
        cx={`${pos.x}%`}
        cy={`${pos.y}%`}
        r="10"
        fill={color}
        stroke="white"
        strokeWidth="1.5"
      />
      <text
        x={`${pos.x}%`}
        y={`${pos.y + 6}%`}
        textAnchor="middle"
        fontSize="5"
        fill={color === '#00A651' ? '#065f46' : '#78350f'}
        fontWeight="600"
        dy="8"
      >
        {pos.name.split(' ').slice(-1)[0]}
      </text>
    </g>
  )
}

export default function TacticalView({ match }: Props) {
  // Mirror away team positions (they play from opposite end)
  // Home plays top-to-bottom, away plays bottom-to-top on same pitch
  const awayMirrored = match.awayTacticalPositions.map((p) => ({
    ...p,
    x: 100 - p.x,
    y: 100 - p.y,
  }))

  return (
    <div className="rounded-xl bg-white border border-gray-100 shadow-sm px-4 py-3">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#00A651]">Tactical View</p>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-medium text-[#00A651]">{match.homeFormation}</span>
          <span className="text-[10px] text-gray-400">vs</span>
          <span className="text-[10px] font-medium text-amber-500">{match.awayFormation}</span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#00A651] border border-white shadow-sm" />
          <span className="text-[9px] text-gray-500">{match.homeTeam.flag} {match.homeTeam.name}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-amber-400 border border-white shadow-sm" />
          <span className="text-[9px] text-gray-500">{match.awayTeam.flag} {match.awayTeam.name}</span>
        </div>
      </div>

      {/* Pitch SVG */}
      <div className="relative w-full rounded-lg overflow-hidden" style={{ paddingBottom: '65%' }}>
        <svg
          viewBox="0 0 100 65"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 w-full h-full"
          style={{ background: '#3d8b40' }}
        >
          {/* Pitch markings */}
          {/* Outer border */}
          <rect x="2" y="1" width="96" height="63" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
          {/* Center line */}
          <line x1="2" y1="32.5" x2="98" y2="32.5" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
          {/* Center circle */}
          <circle cx="50" cy="32.5" r="8" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
          {/* Center spot */}
          <circle cx="50" cy="32.5" r="0.8" fill="rgba(255,255,255,0.5)" />
          {/* Top penalty area */}
          <rect x="28" y="1" width="44" height="14" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
          {/* Top goal area */}
          <rect x="38" y="1" width="24" height="5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
          {/* Bottom penalty area */}
          <rect x="28" y="50" width="44" height="14" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
          {/* Bottom goal area */}
          <rect x="38" y="59" width="24" height="5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />

          {/* Alternating grass stripes */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect
              key={i}
              x="2"
              y={1 + i * 10.5}
              width="96"
              height="10.5"
              fill={i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'transparent'}
            />
          ))}

          {/* Home positions (playing top-half, attacking downward) */}
          {match.homeTacticalPositions.map((pos, i) => {
            // Scale: home plays in top half (y 0-65 of pitch)
            const scaledY = (pos.y / 100) * 65
            const scaledX = (pos.x / 100) * 100
            return (
              <PlayerDot
                key={`home-${i}`}
                pos={{ name: pos.name, x: scaledX, y: (scaledY / 65) * 100 }}
                color="#00A651"
              />
            )
          })}

          {/* Away positions (playing inverted — attacking upward) */}
          {awayMirrored.map((pos, i) => {
            const scaledY = (pos.y / 100) * 65
            const scaledX = (pos.x / 100) * 100
            return (
              <PlayerDot
                key={`away-${i}`}
                pos={{ name: pos.name, x: scaledX, y: (scaledY / 65) * 100 }}
                color="#f59e0b"
              />
            )
          })}
        </svg>
      </div>
    </div>
  )
}
