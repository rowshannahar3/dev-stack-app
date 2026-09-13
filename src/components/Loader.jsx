export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-3 text-slate-500">
      <span className="loading loading-spinner loading-lg text-pink-500" />
      <p className="text-sm">Loading technologies...</p>
    </div>
  );
}
