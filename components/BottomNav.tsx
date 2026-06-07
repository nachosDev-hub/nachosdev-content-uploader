type Props = { active?: string }

const NAV_ITEMS = [
  {
    key: 'home',
    label: 'Home',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    key: 'matches',
    label: 'Matches',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
        <path d="M2 12h20"/>
      </svg>
    ),
  },
  {
    key: 'world-cup',
    label: 'World Cup',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
        <path d="M4 22h16"/>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
      </svg>
    ),
  },
  {
    key: 'news',
    label: 'News',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
        <path d="M18 14h-8"/>
        <path d="M15 18h-5"/>
        <path d="M10 6h8v4h-8V6z"/>
      </svg>
    ),
  },
  {
    key: 'community',
    label: 'Community',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
]

export default function BottomNav({ active }: Props) {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-100 z-20">
      <div className="flex items-center justify-around px-2 py-2">
        {NAV_ITEMS.map((item) => {
          const isActive = item.key === active
          return (
            <button
              key={item.key}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg transition-colors ${
                isActive ? 'text-[#00A651]' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {item.icon}
              <span className={`text-[9px] font-medium ${isActive ? 'text-[#00A651]' : 'text-gray-400'}`}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
