export default function MatchHeader() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-100">
      {/* Top row: logo center, settings right */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="w-24" />
        {/* MatchNerve Logo */}
        <div className="flex items-center gap-1.5">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 8 L3 8 L4 5 L6 11 L8 3 L10 10 L12 6 L14 9 L16 8 L19 8"
              stroke="#00A651"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <span className="text-sm font-bold tracking-widest text-gray-900">MATCHNERVE</span>
        </div>
        {/* Right icons */}
        <div className="flex items-center gap-2 w-24 justify-end">
          <button className="p-1 text-gray-400 hover:text-gray-600">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
            </svg>
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-600">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>
        </div>
      </div>
      {/* Bottom row: back + share/track */}
      <div className="flex items-center justify-between px-4 pb-2">
        <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Back to matches</span>
        </button>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"/>
              <circle cx="6" cy="12" r="3"/>
              <circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
            <span>Share</span>
          </button>
          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            <span>Track Match</span>
          </button>
        </div>
      </div>
    </header>
  )
}
