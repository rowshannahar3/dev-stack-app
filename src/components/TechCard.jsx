const CATEGORY_STYLES = {
  Frontend: "bg-sky-50 text-sky-600",
  Backend: "bg-emerald-50 text-emerald-600",
  Database: "bg-rose-50 text-rose-600",
  Language: "bg-amber-50 text-amber-600",
  Styling: "bg-cyan-50 text-cyan-600",
  DevOps: "bg-indigo-50 text-indigo-600",
  Tools: "bg-slate-100 text-slate-600",
};

export default function TechCard({ tech, isAdded, onAdd }) {
  const categoryStyle = CATEGORY_STYLES[tech.category] || "bg-slate-100 text-slate-600";

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={`${tech.name} logo`} className="w-9 h-9 object-contain" />
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-50 text-slate-500 border border-slate-100">
          {tech.badge}
        </span>
      </div>

      <div>
        <h3 className="font-bold text-slate-900">{tech.name}</h3>
        <p className="text-sm text-slate-500 mt-1 leading-relaxed">{tech.description}</p>
      </div>

      <div className="flex items-center gap-2 flex-wrap text-xs">
        <span className={`px-2.5 py-1 rounded-full font-medium ${categoryStyle}`}>{tech.category}</span>
        <span className="px-2.5 py-1 rounded-full font-medium bg-slate-50 text-slate-500">{tech.difficulty}</span>
        <span className="flex items-center gap-1 font-medium text-slate-700 ml-auto">
          <span className="text-amber-400">★</span> {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-colors ${
          isAdded
            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
