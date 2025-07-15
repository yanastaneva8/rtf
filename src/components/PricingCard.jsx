export default function PricingCard({ label, description, icon, onClick }) {
  return (
    <div
      className="flex flex-col items-center rounded-xl border border-zinc-200 bg-white p-6 shadow-md cursor-pointer hover:shadow-lg transition
        dark:bg-zinc-800 dark:border-zinc-700"
      onClick={onClick}
    >
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-zinc-100">{label}</h3>
      {description && <p className="text-sm text-zinc-600 dark:text-zinc-300">{description}</p>}
    </div>
  )
}