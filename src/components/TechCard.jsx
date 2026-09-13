const BADGE_STYLES = {
  Popular: "bg-sky-50 text-sky-600",
  Versatile: "bg-emerald-50 text-emerald-600",
  Fast: "bg-orange-50 text-orange-600",
  "Full-Stack": "bg-violet-50 text-violet-600",
  Standard: "bg-teal-50 text-teal-600",
  "Top SQL": "bg-blue-50 text-blue-600",
  Cache: "bg-rose-50 text-rose-600",
  Ubiquitous: "bg-yellow-50 text-yellow-700",
  Essential: "bg-indigo-50 text-indigo-600",
  Robust: "bg-red-50 text-red-600",
  Modern: "bg-cyan-50 text-cyan-600",
  Containers: "bg-sky-50 text-sky-600",
  Design: "bg-fuchsia-50 text-fuchsia-600",
};

export default function TechCard({ tech, isAdded, onAdd }) {
  const badgeStyle = BADGE_STYLES[tech.badge] || "bg-slate-50 text-slate-600";

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={`${tech.name} logo`} className="w-9 h-9 object-contain" />
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeStyle}`}>
          {tech.badge}
        </span>
      </div>

      <div>
        <h3 className="font-bold text-slate-900">{tech.name}</h3>
        <p className="text-sm text-slate-500 mt-1 leading-relaxed">{tech.description}</p>
      </div>

      <div className="flex items-center gap-2 flex-wrap text-xs">
        {/* category chip is now plain/neutral for every card */}
        <span className="px-2.5 py-1 rounded-md font-medium bg-slate-100 text-slate-500">{tech.category}</span>
        <span className="px-2.5 py-1 font-medium text-slate-500">{tech.difficulty}</span>
        <span className="flex items-center gap-1 font-medium text-slate-700 ml-auto">
          <span className="text-amber-400">★</span> {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-colors ${
          isAdded ? "bg-slate-100 text-slate-400 cursor-not-allowed" : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}