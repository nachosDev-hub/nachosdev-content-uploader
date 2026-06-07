type Point = { icon: string; text: string }
type Props = { points: Point[] }

export default function QuickRead({ points }: Props) {
  return (
    <div className="rounded-xl bg-gray-50 border border-gray-100 shadow-sm px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#00A651] mb-3">QuickRead</p>
      <div className="grid grid-cols-2 gap-2">
        {points.map((point, i) => (
          <div key={i} className="flex items-start gap-2 bg-white rounded-lg p-2 border border-gray-100">
            <span className="text-base leading-none flex-shrink-0 mt-0.5">{point.icon}</span>
            <p className="text-[10px] text-gray-600 leading-relaxed">{point.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
