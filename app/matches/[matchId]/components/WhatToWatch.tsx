const ICONS = ['⚡', '🏃', '🎯', '⏱️']

type Props = { items: string[] }

export default function WhatToWatch({ items }: Props) {
  return (
    <div className="rounded-xl bg-white border border-gray-100 shadow-sm px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#00A651] mb-3">What to Watch</p>
      <div className="grid grid-cols-2 gap-x-3 gap-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-sm leading-none flex-shrink-0 mt-0.5">{ICONS[i % ICONS.length]}</span>
            <p className="text-xs text-gray-700 leading-snug">{item}</p>
          </div>
        ))}
      </div>
      <button className="flex items-center gap-1 text-[10px] text-[#00A651] hover:underline mt-3">
        View key insights
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  )
}
