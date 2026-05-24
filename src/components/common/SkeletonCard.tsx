export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden animate-pulse">
      <div className="h-2 bg-gray-200" />
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 space-y-2">
            <div className="h-5 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
          </div>
          <div className="w-12 h-12 bg-gray-200 rounded-xl" />
        </div>

        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-200 rounded" />
          <div className="h-3 bg-gray-200 rounded w-5/6" />
        </div>

        <div className="flex gap-2 mb-4">
          <div className="h-6 bg-gray-200 rounded-lg w-20" />
          <div className="h-6 bg-gray-200 rounded-lg w-24" />
          <div className="h-6 bg-gray-200 rounded-lg w-16" />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 py-4 border-t border-gray-100">
          <div className="h-10 bg-gray-200 rounded-lg" />
          <div className="h-10 bg-gray-200 rounded-lg" />
        </div>

        <div className="flex gap-2">
          <div className="flex-1 h-10 bg-gray-200 rounded-xl" />
          <div className="flex-1 h-10 bg-gray-200 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
