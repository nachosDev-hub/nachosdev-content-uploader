export default function BottomCTA() {
  return (
    <div className="rounded-xl bg-[#E8F7EF] border border-green-100 px-4 py-4 flex items-center justify-between gap-3">
      <div className="flex items-start gap-2.5 flex-1 min-w-0">
        {/* Pulse wave icon */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00A651] flex items-center justify-center">
          <svg width="16" height="12" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 8 L3 8 L4 5 L6 11 L8 3 L10 10 L12 6 L14 9 L16 8 L19 8"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
        <p className="text-xs text-gray-700 leading-snug">
          <span className="font-semibold">Sharper insights. Better context.</span>
          {' '}Stay ahead with MatchNerve.
        </p>
      </div>
      <button className="flex-shrink-0 bg-[#00A651] text-white text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-[#008f46] transition-colors whitespace-nowrap">
        Go to Match Hub
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  )
}
