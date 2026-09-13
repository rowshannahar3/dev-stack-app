export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const isEmpty = stack.length === 0;

  return (
    <aside className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm h-fit md:sticky md:top-24">
      <h3 className="font-bold text-slate-900">Your Stack</h3>
      <p className="text-sm text-slate-400 mt-1">
        {isEmpty ? "No technologies selected yet." : `${stack.length} Technology Selected`}
      </p>

      {/* Conditional rendering: empty state vs. list of selected items */}
      {isEmpty ? (
        <div className="mt-4 border border-dashed border-slate-200 rounded-xl py-10 text-center text-sm text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 border border-slate-100 rounded-xl px-3 py-2.5"
            >
              <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-800 truncate">{item.name}</p>
                <p className="text-xs text-slate-400">{item.category}</p>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                aria-label={`Remove ${item.name}`}
                className="text-slate-400 hover:text-slate-700 text-lg leading-none"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="mt-2 w-full py-2.5 rounded-lg font-semibold text-sm border border-rose-200 text-rose-500 hover:bg-rose-50 transition-colors"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
}
