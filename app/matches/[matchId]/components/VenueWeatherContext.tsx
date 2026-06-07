import { MatchData } from '@/lib/matchData'

type Props = { match: MatchData }

export default function VenueWeatherContext({ match }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Venue Context */}
      <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-3">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#00A651] mb-2">Venue Context</p>
        <div className="flex items-start gap-2 mb-2">
          <span className="text-2xl leading-none">🏟️</span>
          <div>
            <p className="text-xs font-semibold text-gray-800 leading-tight">{match.venue}</p>
            <p className="text-[10px] text-gray-500">{match.city}, {match.country}</p>
          </div>
        </div>
        <div className="space-y-1.5 mt-2">
          <div>
            <p className="text-[9px] uppercase tracking-wide text-gray-400">Capacity</p>
            <p className="text-xs font-medium text-gray-700">{match.venueCapacity}</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-wide text-gray-400">Surface</p>
            <p className="text-xs font-medium text-gray-700">{match.venueSurface}</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-wide text-gray-400">Pitch Condition</p>
            <span className="inline-block text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-green-100 text-[#00A651]">
              {match.pitchCondition}
            </span>
          </div>
        </div>
      </div>

      {/* Weather Context */}
      <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-3">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#00A651] mb-2">Weather Context</p>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl leading-none">⛅</span>
          <div>
            <p className="text-xl font-bold text-gray-800">{match.weatherTemp}°C</p>
            <p className="text-[10px] text-gray-500">{match.weatherCondition}</p>
          </div>
        </div>
        <div className="space-y-1.5 mt-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-gray-500">Wind</span>
            <span className="text-[10px] font-medium text-gray-700">{match.weatherWind}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-gray-500">Humidity</span>
            <span className="text-[10px] font-medium text-gray-700">{match.weatherHumidity}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-gray-500">Precip.</span>
            <span className="text-[10px] font-medium text-gray-700">{match.weatherPrecip}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
